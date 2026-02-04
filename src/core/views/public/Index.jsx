import React from "react";
import HeroSection from '@core/components/template/HeroSection.jsx';
import Navbar from '@core/components/organisms/Navbar.jsx';

import useSectionSnap from "@core/hooks/useSectionSnap";

export default function Index() {
    //useSectionSnap(-80); if navbar is sticky
    const snap = useSectionSnap(0);

    return (
        <>
            <main
                className="
                    min-h-screen
                    scroll-smooth
                    bg-gradient-to-br
                    from-bg-start
                    via-bg-mid
                    to-bg-end
                    text-text-invert
                "
            >
                <Navbar />
                <HeroSection onScrollNext={snap.scrollNext}/>

                <section id="features" data-snap className="relative bg-background-end h-250 flex flex-col items-center justify-center text-center px-6 py-28">
                    <p className="text-text-invert/80 max-w-2xl text-lg md:text-xl">
                        Hub de servicios y asesoría financiera para crecer con potencia,
                        precisión y visión a largo plazo.
                    </p>

                    <div className="mt-12 flex gap-6">
                        <button className="
                        px-10 py-4 rounded-2xl
                        bg-primary hover:bg-primary/80
                        text-text-invert
                        border border-primary/50
                        focus:outline-none focus:ring-2 focus:ring-primary/50
                        transition-all duration-300
                        shadow-[0_20px_40px_rgba(106,18,106,0.4)]
                        hover:shadow-[0_30px_60px_rgba(106,18,106,0.6)]
                        hover:-translate-y-1
                    ">
                            Empezar ahora
                        </button>

                        <button className="
                        px-10 py-4 rounded-2xl
                        bg-surface/80 backdrop-blur
                        text-text
                        border border-primary/30
                        hover:bg-surface
                        transition-all duration-300
                    ">
                            Ver servicios
                        </button>
                    </div>
                </section>

                {/* FEATURES / SECTION */}
                <section data-snap className="py-24 px-6 bg-surface h-250 text-text relative min-h-screen snap-start">
                    <h2 className="text-4xl font-bold text-center text-primary mb-16">
                        Indexing Project
                    </h2>

                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Precisión", desc: "Datos financieros claros y accionables para cada decisión." },
                            { title: "Velocidad", desc: "Procesos optimizados que te mueven al ritmo del mercado." },
                            { title: "Control", desc: "Paneles e informes que te ponen al volante." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="
                                bg-surface-dark/80 backdrop-blur
                                p-8 rounded-2xl
                                border border-primary/30
                                hover:border-primary/60
                                transition-all
                                hover:-translate-y-2
                                shadow-lg
                            "
                            >
                                <h3 className="text-xl font-bold text-primary-soft mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-text-invert/80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}