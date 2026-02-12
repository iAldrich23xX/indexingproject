import React from 'react';

import Button from '@core/components/atoms/Button.jsx';
import CatalogCarousel from '@core/components/organisms/CatalogCarousel.jsx';

import visionFinanciera from "@core/assets/images/photos/vision_financiera.jpg";
import brechasPensionales from "@core/assets/images/photos/brechas_pensionales.webp";
import tranquilidadEnRuta from "@core/assets/images/photos/tranquilidad_en_ruta.png";
import estrategiaDeCompra from "@core/assets/images/photos/estrategia_de_compra.webp";
import IntercomunicadoresMesh from "@core/assets/images/photos/intercomunicadores_mesh.webp";
import ChaquetadeProteccion from "@core/assets/images/photos/chaqueta_de_proteccion.jpg";
import MantenimientoPremium from "@core/assets/images/photos/mantenimiento_premium.jpeg";
import GuantesCarbonCore from "@core/assets/images/photos/guantes_carbon_core.jpeg";

const catalogItems = [
    {
        title: "Visión Financiera",
        description: "Ordenamos tus finanzas para que puedas rodar tranquilo, optimizando cada litro de tu presupuesto.",
        image: visionFinanciera,
        category: "Finanzas"
    },
    {
        title: "Brechas Pensionales",
        description: "Creamos más caminos para tu retiro. Que tu futuro no dependa de un solo motor; diversifica tu potencia.",
        image: brechasPensionales,
        category: "Finanzas"
    },
    {
        title: "Tranquilidad en Ruta",
        description: "Seguros de vida y accidentes. Si la ruta finaliza, la familia sigue; siempre hay respaldo, pase lo que pase.",
        image: tranquilidadEnRuta,
        category: "Seguros"
    },
    {
        title: "Estrategia de Compra",
        description: "Vivienda en tu ruta y sin hipotecas pesadas. Trazamos la trayectoria ideal para tu nuevo hogar.",
        image: estrategiaDeCompra,
        category: "Patrimonio"
    },
    {
        title: "Intercomunicadores Mesh",
        description: "Mantené la conexión con tu grupo sin cables. Comunicación cristalina incluso a altas velocidades.",
        image: IntercomunicadoresMesh,
        category: "Equipamiento"
    },
    {
        title: "Chaqueta de Protección Nivel 2",
        description: "Sin estrés, sin afán: Respaldo cuando el cuerpo falla. Protecciones certificadas para máxima seguridad.",
        image: ChaquetadeProteccion,
        category: "Indumentaria"
    },
    {
        title: "Mantenimiento Premium R7",
        description: "Servicios especializados para que tu máquina rinda como el primer día. Eficiencia y crecimiento sostenible.",
        image: MantenimientoPremium,
        category: "Taller"
    },
    {
        title: "Guantes Carbon Core",
        description: "Herramientas pensadas para potenciar el control de tu ruta desde el primer contacto con el manillar.",
        image: GuantesCarbonCore,
        category: "Indumentaria"
    }
];

export default function CatalogPreviewSection() {
    const qualityMetrics = [
        { label: "Soluciones activas", value: "40+" },
        { label: "Categorías especializadas", value: "8" },
        { label: "Acompañamiento personalizado", value: "1:1" }
    ];

    return (
        <section
            data-snap
            className="
            relative
            bg-background-end
            min-h-[85vh]
            flex flex-col items-center justify-center
            h-250
            px-6 py-24 md:py-28
            overflow-hidden
        "
        >
            <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary-soft/20 blur-[140px]" />
            <div className="absolute -bottom-48 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

            <div className="relative z-10 w-full max-w-6xl">
                <div className="mx-auto max-w-4xl text-center space-y-5">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground-invert">
                        Servicios y soluciones que impulsan tu crecimiento
                    </h2>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {qualityMetrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="rounded-2xl border border-white/15 bg-white/8 px-6 py-5 text-center backdrop-blur-sm"
                        >
                            <p className="text-3xl font-bold text-foreground-invert">{metric.value}</p>
                            <p className="mt-2 text-sm text-foreground-invert/70">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 mt-14 container mx-auto">
                <CatalogCarousel items={catalogItems}/>
            </div>

            {/*<div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4">
                <Button variant="white" to="/catalogo">Explorar catálogo</Button>
                <Button variant="outline" to="/catalogo">Ver servicios destacados</Button>
            </div>*/}
        </section>
    );
}
