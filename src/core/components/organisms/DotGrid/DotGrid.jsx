import { useRef, useMemo, useEffect } from 'react';

import Canvas from '@core/components/atoms/Canvas';
import DotGridLayer from '@core/components/molecules/DotGridLayer.jsx';

import { hexToRgb, resolveColor } from '@core/utils/color.jsx';
import { useGrid } from '@core/components/organisms/DotGrid/useGrid.jsx';
import { useInteraction } from '@core/components/organisms/DotGrid/useInteraction.jsx';
import { useDraw } from '@core/components/organisms/DotGrid/useDraw.jsx';

export default function DotGrid({
                                    dotSize = 16,
                                    gap = 32,
                                    baseColor = '#5227FF',
                                    activeColor = '#5227FF',
                                    proximity = 150,
                                    speedTrigger = 100,
                                    shockRadius = 250,
                                    shockStrength = 5,
                                    maxSpeed = 5000,
                                    resistance = 750,
                                    returnDuration = 1.5,
                                    className = '',
                                    style,
                                    children
                                }) {
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);

    const pointerRef = useRef({
        x: 0,
        y: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });

    const baseColorResolved = useMemo(
        () => resolveColor(baseColor),
        [baseColor]
    );

    const activeColorResolved = useMemo(
        () => resolveColor(activeColor),
        [activeColor]
    );

    const circlePath = useMemo(() => {
        if (typeof window === 'undefined' || !window.Path2D) return null;
        const p = new Path2D();
        p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [dotSize]);

    const buildGrid = useGrid(
        wrapperRef,
        canvasRef,
        dotsRef,
        dotSize,
        gap
    );

    useDraw({
        canvasRef,
        dotsRef,
        pointerRef,
        circlePath,
        baseColor: baseColorResolved,
        activeColor: activeColorResolved,
        proximity
    });

    useInteraction({
        canvasRef,
        dotsRef,
        pointerRef,
        maxSpeed,
        speedTrigger,
        proximity,
        resistance,
        returnDuration,
        shockRadius,
        shockStrength
    });

    useEffect(() => {
        buildGrid();

        let ro = null;
        if ('ResizeObserver' in window) {
            ro = new ResizeObserver(buildGrid);
            wrapperRef.current && ro.observe(wrapperRef.current);
        } else {
            window.addEventListener('resize', buildGrid);
        }

        return () => {
            if (ro) ro.disconnect();
            else window.removeEventListener('resize', buildGrid);
        };
    }, [buildGrid]);

    return (
        <section
            className={`relative h-full w-full overflow-hidden ${className}`}
            style={style}
        >
            <DotGridLayer wrapperRef={wrapperRef}>
                <Canvas canvasRef={canvasRef} />
            </DotGridLayer>

            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                {children}
            </div>
        </section>
    );
}