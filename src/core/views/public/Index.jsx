import React from "react";
import HeroSection from '@core/components/templates/HeroSection.jsx';
import Navbar from '@core/components/organisms/Navbar.jsx';

import useSectionSnap from "@core/hooks/useSectionSnap";
import CatalogPreviewSection from '@core/components/templates/CatalogPreviewSection.jsx';

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

                <CatalogPreviewSection onScrollNext={snap.scrollNext}/>

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
