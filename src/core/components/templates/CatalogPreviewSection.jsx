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

            <div className="mt-16 container mx-auto">
                <CatalogCarousel items={catalogItems} />
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-6">
                <Button variant="white" to="/catalogo">Explorar catálogo</Button>
                <Button variant="white" to="/catalogo">Ver servicios</Button>
            </div>
        </section>
    );
}