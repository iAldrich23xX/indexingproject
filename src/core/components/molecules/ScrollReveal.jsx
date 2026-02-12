import { motion } from "framer-motion";
import clsx from "clsx";
import { useMemo } from "react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1];

function buildPreset(preset, distance) {
    const map = {
        fadeUp: { x: 0, y: distance, scale: 1, rotate: 0, blur: 0, opacity: 0 },
        fadeDown: { x: 0, y: -distance, scale: 1, rotate: 0, blur: 0, opacity: 0 },
        fadeLeft: { x: -distance, y: 0, scale: 1, rotate: 0, blur: 0, opacity: 0 },
        fadeRight: { x: distance, y: 0, scale: 1, rotate: 0, blur: 0, opacity: 0 },
        zoomIn: { x: 0, y: 18, scale: 0.88, rotate: 0, blur: 0, opacity: 0 },
        zoomOut: { x: 0, y: 18, scale: 1.12, rotate: 0, blur: 0, opacity: 0 },
        rotateLeft: { x: -10, y: 18, scale: 0.98, rotate: -7, blur: 0, opacity: 0 },
        rotateRight: { x: 10, y: 18, scale: 0.98, rotate: 7, blur: 0, opacity: 0 },
        blurUp: { x: 0, y: 22, scale: 1, rotate: 0, blur: 10, opacity: 0 }
    };

    return map[preset] || map.fadeUp;
}

export default function ScrollReveal({
    children,
    className,
    preset = "fadeUp",
    delay = 0,
    duration = 0.65,
    distance = 24,
    y,
    amount = 0.25,
    once = true,
    fromX,
    fromY,
    fromScale,
    fromRotate,
    fromBlur,
    fromOpacity,
    transition
}) {
    const hiddenState = useMemo(() => {
        const presetState = buildPreset(preset, distance);

        const state = {
            opacity: fromOpacity ?? presetState.opacity,
            x: fromX ?? presetState.x,
            y: fromY ?? y ?? presetState.y,
            scale: fromScale ?? presetState.scale,
            rotate: fromRotate ?? presetState.rotate
        };

        const blur = fromBlur ?? presetState.blur;
        if (blur > 0) {
            state.filter = `blur(${blur}px)`;
        }

        return state;
    }, [preset, distance, fromOpacity, fromX, fromY, y, fromScale, fromRotate, fromBlur]);

    const visibleState = useMemo(
        () => ({ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, filter: "blur(0px)" }),
        []
    );

    return (
        <motion.div
            className={clsx(className)}
            initial={hiddenState}
            whileInView={visibleState}
            viewport={{ once, amount }}
            transition={transition || { duration, delay, ease: EASE_OUT_EXPO }}
        >
            {children}
        </motion.div>
    );
}
