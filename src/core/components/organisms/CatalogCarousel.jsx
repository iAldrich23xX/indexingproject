import { useEffect, useRef, useState } from "react";
import CatalogPreviewCard from '@core/components/molecules/CatalogPreviewCard.jsx';

export default function CatalogCarousel({
                                            items = [],
                                            interval = 4000
                                        }) {
    const length = items.length;
    const extendedItems = [...items, ...items];

    const [current, setCurrent] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const timeoutRef = useRef(null);

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
            <div className="flex justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2 px-4">
                    <CatalogPreviewCard {...items[0]} />
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className={`flex ${transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{
                    transform: `translateX(-${current * (100 / (length >= 3 ? 3 : length))}%)`
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
                        <CatalogPreviewCard {...item} />
                    </div>
                ))}
            </div>

            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur"
            >
                ‹
            </button>

            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur"
            >
                ›
            </button>

            <div className="flex justify-center mt-6 gap-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            current % length === index
                                ? "bg-primary w-6"
                                : "bg-border w-2"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}