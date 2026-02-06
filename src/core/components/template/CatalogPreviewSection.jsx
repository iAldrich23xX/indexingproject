import React from 'react';

import CatalogPreviewCard from "@core/components/molecules/CatalogPreviewCard.jsx";
import Button from '@core/components/atoms/Button.jsx';

export default function CatalogPreviewSection({ onScrollNext }) {
    return (
        <section
            data-snap
            className="
            relative
            bg-background-end
            min-h-[85vh]
            flex flex-col items-center justify-center
            text-center
            h-250
            px-6 py-28
        "
        >
            <div className="max-w-3xl text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground-invert">
                    Servicios y soluciones que impulsan tu crecimiento
                </h2>
                <p className="text-foreground-invert/70 text-lg">
                    Descubrí asesoría financiera, productos estratégicos y servicios diseñados para escalar con visión y
                    control.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl w-full">
                <CatalogPreviewCard
                    title="Asesoría financiera"
                    description="Estrategias claras para optimizar recursos, minimizar riesgos y tomar decisiones con confianza."
                />

                <CatalogPreviewCard
                    title="Servicios especializados"
                    description="Soluciones a medida para empresas y profesionales que buscan eficiencia y crecimiento sostenible."
                />

                <CatalogPreviewCard
                    title="Productos estratégicos"
                    description="Herramientas y recursos pensados para potenciar resultados desde el primer día."
                />
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-6">
                <Button variant="white" to="/catalogo">Explorar catálogo</Button>
                <Button variant="white" to="/catalogo">Ver servicios</Button>
            </div>
        </section>
    );
}