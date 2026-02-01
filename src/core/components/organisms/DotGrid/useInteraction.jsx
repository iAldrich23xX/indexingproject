import { useEffect } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { throttle } from '@core/utils/throttle';

gsap.registerPlugin(InertiaPlugin);

export function useInteraction({
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
                               }) {
    useEffect(() => {
        const onMove = e => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const now = performance.now();
            const pr = pointerRef.current;
            const dt = pr.lastTime ? now - pr.lastTime : 16;

            const dx = e.clientX - pr.lastX;
            const dy = e.clientY - pr.lastY;

            let vx = (dx / dt) * 1000;
            let vy = (dy / dt) * 1000;
            let speed = Math.hypot(vx, vy);

            if (speed > maxSpeed) {
                const scale = maxSpeed / speed;
                vx *= scale;
                vy *= scale;
                speed = maxSpeed;
            }

            pr.lastTime = now;
            pr.lastX = e.clientX;
            pr.lastY = e.clientY;

            const rect = canvas.getBoundingClientRect();
            pr.x = e.clientX - rect.left;
            pr.y = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);

                if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);

                    const pushX = dot.cx - pr.x + vx * 0.005;
                    const pushY = dot.cy - pr.y + vy * 0.005;

                    gsap.to(dot, {
                        inertia: { xOffset: pushX, yOffset: pushY, resistance },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)'
                            });
                            dot._inertiaApplied = false;
                        }
                    });
                }
            }
        };

        const onClick = e => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - cx, dot.cy - cy);

                if (dist < shockRadius && !dot._inertiaApplied) {
                    dot._inertiaApplied = true;
                    gsap.killTweensOf(dot);

                    const falloff = Math.max(0, 1 - dist / shockRadius);
                    const pushX = (dot.cx - cx) * shockStrength * falloff;
                    const pushY = (dot.cy - cy) * shockStrength * falloff;

                    gsap.to(dot, {
                        inertia: { xOffset: pushX, yOffset: pushY, resistance },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: returnDuration,
                                ease: 'elastic.out(1,0.75)'
                            });
                            dot._inertiaApplied = false;
                        }
                    });
                }
            }
        };

        const throttledMove = throttle(onMove, 50);

        window.addEventListener('mousemove', throttledMove, { passive: true });
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('mousemove', throttledMove);
            window.removeEventListener('click', onClick);
        };
    }, [
        maxSpeed,
        speedTrigger,
        proximity,
        resistance,
        returnDuration,
        shockRadius,
        shockStrength,
        canvasRef,
        dotsRef,
        pointerRef
    ]);
}