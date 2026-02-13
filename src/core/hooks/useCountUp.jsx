import { useEffect, useRef, useState } from "react";

export default function useCountUp({
    end = 0,
    duration = 1.2,
    start = 0,
    active = false
}) {
    const [value, setValue] = useState(start);
    const completedRef = useRef(false);
    const rafRef = useRef(null);

    useEffect(() => {
        if (!active || completedRef.current) return;

        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const nextValue = start + (end - start) * easedProgress;

            setValue(nextValue);

            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            } else {
                completedRef.current = true;
                setValue(end);
            }
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [active, duration, end, start]);

    return value;
}
