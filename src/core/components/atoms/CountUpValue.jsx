import { useMemo, useRef } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";
import useCountUp from "@core/hooks/useCountUp.jsx";

function parseNumericToken(text) {
    const match = String(text).match(/-?\d+(\.\d+)?/);
    if (!match) return null;

    const raw = match[0];
    const index = match.index ?? 0;
    const end = Number(raw);
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;

    return {
        prefix: text.slice(0, index),
        suffix: text.slice(index + raw.length),
        end,
        decimals
    };
}

export default function CountUpValue({
    value,
    className,
    duration = 2.0,
    amount = 0.6,
    once = true
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once, amount });
    const parsed = useMemo(() => parseNumericToken(String(value)), [value]);

    const count = useCountUp({
        end: parsed?.end ?? 0,
        duration,
        active: inView && Boolean(parsed)
    });

    const display = useMemo(() => {
        if (!parsed) return String(value);

        const formatted = parsed.decimals > 0
            ? count.toFixed(parsed.decimals)
            : String(Math.round(count));

        return `${parsed.prefix}${formatted}${parsed.suffix}`;
    }, [count, parsed, value]);

    return (
        <span ref={ref} className={clsx(className)}>
            {display}
        </span>
    );
}
