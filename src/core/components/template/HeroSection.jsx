import DotGrid from '@core/components/organisms/DotGrid/DotGrid.jsx';
import mark from "@core/assets/tire-mark.png";
import React from 'react';
import Logo from '@core/components/atoms/Logo.jsx';

export default function HeroSection() {
    return (
        <div className="w-full h-200 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
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
                baseColor="bg-accent"
                activeColor="bg-primary"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}
            >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight text-center">
                    Finanzas reales
                    <span className="block text-primary-soft drop-shadow-[0_0_20px_rgba(157,105,168,0.8)]">
                        en cada kilómetro
                    </span>
                </h1>
            </DotGrid>

            <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
                <div className="pr-28">
                    <Logo size="hero" variant="hero" showText={false} />
                </div>
            </div>
        </div>
    );
}
