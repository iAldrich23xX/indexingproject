import React from "react";

export default function Index() {
    return (
        <main className="min-h-screen overflow-y-auto bg-gradient-to-br from-bg-start via-bg-mid to-bg-end text-text-invert">

            {/* HERO */}
            <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">

                {/* Glow background */}
                <div className="absolute inset-0 -z-10 flex items-center justify-center">
                    <div className="w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                    Finanzas reales
                    <span className="block text-primary-soft drop-shadow-[0_0_20px_rgba(157,105,168,0.8)]">
                        en cada kilómetro
                    </span>
                </h1>

                <div className="p-10 bg-error">
                    TEXTO TEST
                </div>

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

            {/* SEPARADOR */}
            <div className="h-24 bg-gradient-to-b from-transparent to-bg-start" />

            {/* FEATURES / SECTION */}
            <section className="py-24 px-6 bg-surface text-text relative">
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
    );
}