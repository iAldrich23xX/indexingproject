import { useEffect, useRef } from "react";

export default function useSectionSnap(offset = 0) {
    const indexRef = useRef(0);
    const lockedRef = useRef(false);
    const sectionsRef = useRef([]);

    const scrollToIndex = (i) => {
        const el = sectionsRef.current[i];
        if (!el) return;

        lockedRef.current = true;
        indexRef.current = i;

        const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });

        setTimeout(() => {
            lockedRef.current = false;
        }, 900);
    };

    const scrollNext = () => {
        scrollToIndex(
            Math.min(
                indexRef.current + 1,
                sectionsRef.current.length - 1
            )
        );
    };

    const scrollPrev = () => {
        scrollToIndex(
            Math.max(indexRef.current - 1, 0)
        );
    };

    useEffect(() => {
        sectionsRef.current = Array.from(
            document.querySelectorAll("[data-snap]")
        );

        if (!sectionsRef.current.length) return;

        const onWheel = (e) => {
            if (lockedRef.current) return;

            e.preventDefault();

            if (e.deltaY > 0) {
                scrollNext();
            } else {
                scrollPrev();
            }
        };

        window.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, [offset]);

    return {
        scrollNext,
        scrollPrev,
        scrollToIndex
    };
}