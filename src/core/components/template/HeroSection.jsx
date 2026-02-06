import React from 'react';

import { ArrowDown } from "lucide-react";

import Logo from '@core/components/atoms/Logo.jsx';
import Button from "@core/components/atoms/Button.jsx";

import DotGrid from '@core/components/organisms/DotGrid/DotGrid.jsx';
import mark from "@core/assets/tire-mark.png";

import background from "@core/assets/width_1088.webp"

export default function HeroSection({ onScrollNext }) {
    return (
        <section data-snap className="w-full h-250 relative min-h-screen">
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
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl md:text-7xl text-foreground-invert font-extrabold mb-8 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(106,18,106,1)]">
                        FINANZAS REALES
                        <span className="block text-primary-soft">
                            EN CADA KILÓMETRO
                        </span>
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 drop-shadow-[0_0_20px_rgba(106,18,106,1)]">
                        <Button variant="white" to="/catalogo">
                            Ver catálogo
                        </Button>

                        <Button variant="primary" to="/about">
                            Sobre nosotros
                        </Button>
                    </div>
                </div>
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
                    flex
                    justify-center
                "
            >
                <span
                    className="
                        absolute
                        bottom-60
                        text-lg
                        md:text-xl
                        font-medium
                        tracking-widest
                        neon-hud-solid
                    "
                >
                    HUB DE SERVICIOS | ASESORÍA FINANCIERA
                </span>

                <span
                    onClick={onScrollNext}
                    aria-label="Scroll to features section"
                    className="
                        absolute
                        bottom-10
                        cursor-pointer
                        pointer-events-auto
                        flex
                        items-center
                        justify-center
                        w-20 h-20
                        rounded-full

                        text-lg
                        md:text-xl
                        font-medium
                        tracking-widest
                        neon-hud-solid

                        hover:scale-110
                        hover:shadow-[0_0_30px_rgba(106,18,106,0.8)]
                        transition-all
                        duration-300
                        ease-out

                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/60
                    "
                >
                    <ArrowDown className="w-6 h-6 animate-bounce" />
                </span>
            </div>
        </section>
    );
}
