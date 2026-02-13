import { useEffect, useRef, useState } from "react";
import CatalogPreviewCard from '@core/components/molecules/CatalogPreviewCard.jsx';
import useDuplicatedList from "@core/hooks/useDuplicatedList.jsx";

export default function CatalogCarousel({
                                            items = [],
                                            interval = 4000
                                        }) {
    const length = items.length;
    const extendedItems = useDuplicatedList(items);
    const [itemsPerView, setItemsPerView] = useState(3);

    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const timeoutRef = useRef(null);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
                return;
            }
            if (window.innerWidth < 1024) {
                setItemsPerView(2);
                return;
            }
            setItemsPerView(3);
        };

        updateItemsPerView();
        window.addEventListener("resize", updateItemsPerView);

        return () => window.removeEventListener("resize", updateItemsPerView);
    }, []);

    const stopAutoPlay = () => {
        setIsAutoPlay(false);
        clearTimeout(timeoutRef.current);
    };

    useEffect(() => {
        if (!isAutoPlay || length <= 1) return;

        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => prev + 1);
        }, interval);

        return () => clearTimeout(timeoutRef.current);
    }, [current, isAutoPlay, interval, length]);

    useEffect(() => {
        if (current === length) {
            setTimeout(() => {
                setTransitionEnabled(false);
                setCurrent(0);
            }, 700);
        }

        if (!transitionEnabled) {
            setTimeout(() => {
                setTransitionEnabled(true);
            }, 50);
        }
    }, [current, length, transitionEnabled]);

    const goTo = (index) => {
        stopAutoPlay();
        setCurrent(index);
    };

    const next = () => {
        stopAutoPlay();
        setCurrent((prev) => prev + 1);
    };

    const prev = () => {
        stopAutoPlay();
        setCurrent((prev) =>
            prev === 0 ? length - 1 : prev - 1
        );
    };

    if (length === 0) return null;

    if (length === 1) {
        return (
            <div className="flex justify-center px-1">
                <div className="w-full md:w-2/3 lg:w-1/2 px-4">
                    <CatalogPreviewCard {...items[0]}/>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className={`flex ${transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{
                    transform: `translateX(-${current * (100 / (length >= itemsPerView ? itemsPerView : length))}%)`
                }}
            >
                {extendedItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            ${length === 2 ? "w-full md:w-1/2" : "w-full md:w-1/2 lg:w-1/3"}
                            flex-shrink-0 px-4
                        `}
                    >
                        <CatalogPreviewCard {...item}/>
                    </div>
                ))}
            </div>

            <button
                onClick={prev}
                aria-label="Ver elemento anterior"
                className="absolute left-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 px-2 py-1 text-base text-white backdrop-blur transition hover:scale-105 hover:bg-black/65 sm:px-3 sm:py-2 sm:text-xl md:left-2"
            >
                ‹
            </button>

            <button
                onClick={next}
                aria-label="Ver siguiente elemento"
                className="absolute right-1 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/45 px-2 py-1 text-base text-white backdrop-blur transition hover:scale-105 hover:bg-black/65 sm:px-3 sm:py-2 sm:text-xl md:right-2"
            >
                ›
            </button>

            <div className="mt-7 flex justify-center gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        aria-label={`Ir al elemento ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            current % length === index
                                ? "bg-accent w-8"
                                : "bg-white/35 hover:bg-white/60 w-2"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
