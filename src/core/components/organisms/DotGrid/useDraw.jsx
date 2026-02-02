import { useEffect } from 'react';

export function useDraw({
                            canvasRef,
                            dotsRef,
                            pointerRef,
                            circlePath,
                            baseColor,
                            activeColor,
                            proximity
                        }) {
    useEffect(() => {
        if (!circlePath) return;

        let rafId;
        const proxSq = proximity * proximity;

        const draw = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const { x: px, y: py } = pointerRef.current;

            for (const dot of dotsRef.current) {
                const ox = dot.cx + dot.xOffset;
                const oy = dot.cy + dot.yOffset;
                const dx = dot.cx - px;
                const dy = dot.cy - py;
                const dsq = dx * dx + dy * dy;

                let color = baseColor;

                if (dsq <= proxSq) {
                    const dist = Math.sqrt(dsq);
                    const t = 1 - dist / proximity;

                    const r = Math.round(
                        baseColor.r + (activeColor.r - baseColor.r) * t
                    );
                    const g = Math.round(
                        baseColor.g + (activeColor.g - baseColor.g) * t
                    );
                    const b = Math.round(
                        baseColor.b + (activeColor.b - baseColor.b) * t
                    );
                    const a =
                        baseColor.a + (activeColor.a - baseColor.a) * t;

                    color = { r, g, b, a };
                }

                ctx.save();
                ctx.translate(ox, oy);
                ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
                ctx.fill(circlePath);
                ctx.restore();
            }

            rafId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafId);
    }, [
        proximity,
        baseColor,
        activeColor,
        circlePath,
        canvasRef,
        dotsRef,
        pointerRef
    ]);
}