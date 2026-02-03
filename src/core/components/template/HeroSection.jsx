import DotGrid from '@core/components/organisms/DotGrid/DotGrid.jsx';
import mark from "@core/assets/tire-mark.png";
import background from "@core/assets/width_1088.webp"
import React from 'react';
import Logo from '@core/components/atoms/Logo.jsx';

export default function HeroSection() {
    return (
        <section className="w-full h-250 relative">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: `url(${background})` }}
            />

            <div className="absolute inset-0 overflow-hidden">
                <div className="tire-img-wrap">
                    <img
                        src={mark}
                        alt=""
                        className="tire-img"
                        draggable={false}
                    />
                </div>
            </div>

            <DotGrid
                dotSize={8}
                gap={10}
                baseColor="bg-accent/30"
                activeColor="bg-primary"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            >
                <h1 className="text-5xl md:text-7xl text-foreground-invert font-extrabold mb-8 tracking-tight leading-tight text-center drop-shadow-[0_0_20px_rgba(106,18,106,1)]">
                    FINANZAS REALES
                    <span className="block text-primary-soft">
                        EN CADA KILÓMETRO
                    </span>
                </h1>
            </DotGrid>

            <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                <div className="pr-28">
                    <Logo size="hero" variant="hero" showText={false} />
                </div>
            </div>

            <div
                className="
                    pointer-events-none
                    absolute bottom-0 left-0 right-0
                    h-100
                    z-20
                    bg-gradient-to-b
                    from-transparent
                    to-background-end
                "
            />
        </section>
    );
}
