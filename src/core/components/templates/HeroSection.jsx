import React from 'react';

import { ArrowDown } from "lucide-react";

import Logo from '@core/components/atoms/Logo.jsx';
import Button from "@core/components/atoms/Button.jsx";
import ScrollReveal from "@core/components/molecules/ScrollReveal.jsx";

import DotGrid from '@core/components/organisms/DotGrid/DotGrid.jsx';
import mark from "@core/assets/images/illustrations/tire-mark.png";
import background from "@core/assets/images/banners/width_1088.webp";

export default function HeroSection({ onScrollNext }) {
    return (
        <section data-snap className="w-full h-250 relative min-h-screen">
            <div
                className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
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
                <ScrollReveal
                    className="flex flex-col items-center px-4 pt-20 text-center sm:px-6 md:pt-12"
                    preset="zoomIn"
                    fromScale={0.84}
                    fromY={36}
                    duration={0.9}
                >
                    <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-foreground-invert drop-shadow-lg sm:text-4xl md:mb-8 md:text-6xl lg:text-7xl">
                        FINANZAS REALES
                        <span className="block text-primary-soft">
                            EN CADA KILÓMETRO
                        </span>
                    </h1>

                    <div className="flex w-full max-w-md flex-col gap-3 drop-shadow-lg sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                        <Button variant="white" to="/catalogo" className="w-full sm:w-auto">
                            Ver catálogo
                        </Button>

                        <Button variant="primary" to="/info/sobre-nosotros" className="w-full sm:w-auto">
                            Sobre nosotros
                        </Button>
                    </div>
                </ScrollReveal>
            </DotGrid>

            <div className="pointer-events-none absolute inset-0 hidden items-center justify-end xl:flex">
                <ScrollReveal className="pr-10 2xl:pr-20" preset="fadeRight" fromX={70} delay={0.2} duration={0.9}>
                    <Logo size="hero" variant="hero" showText={false} />
                </ScrollReveal>
            </div>

            <div
                className="
                    pointer-events-none
                    absolute bottom-0 left-0 right-0
                    h-48 sm:h-56 md:h-72
                    z-20
                    bg-gradient-to-b
                    from-transparent
                    to-background-end
                    flex
                    justify-center
                "
            >
                <ScrollReveal
                    className="
                        absolute
                        bottom-24 hidden md:block
                        text-base lg:text-lg
                        font-medium
                        tracking-widest
                        neon-hud-solid
                    "

                    delay={0.3} duration={0.9}
                >
                    HUB DE SERVICIOS | ASESORÍA FINANCIERA
                </ScrollReveal>

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
                        w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                        rounded-full

                        neon-hud-solid

                        hover:scale-110
                        hover:shadow-xl hover:shadow-primary/40
                        transition-all
                        duration-300
                        ease-out

                        focus:outline-none
                        focus:ring-2
                        focus:ring-primary/60
                    "
                >
                    <ArrowDown className="h-7 w-7 animate-bounce sm:h-8 sm:w-8 md:h-9 md:w-9" />
                </span>
            </div>
        </section>
    );
}
