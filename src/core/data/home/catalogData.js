import visionFinanciera from "@core/assets/images/photos/vision_financiera.jpg";
import brechasPensionales from "@core/assets/images/photos/brechas_pensionales.webp";
import tranquilidadEnRuta from "@core/assets/images/photos/tranquilidad_en_ruta.png";
import estrategiaDeCompra from "@core/assets/images/photos/estrategia_de_compra.webp";
import intercomunicadoresMesh from "@core/assets/images/photos/intercomunicadores_mesh.webp";
import chaquetaDeProteccion from "@core/assets/images/photos/chaqueta_de_proteccion.jpg";
import mantenimientoPremium from "@core/assets/images/photos/mantenimiento_premium.jpeg";
import guantesCarbonCore from "@core/assets/images/photos/guantes_carbon_core.jpeg";
import catalogItemsJson from "@core/data/home/catalogItems.json";

const catalogImageMap = {
    visionFinanciera,
    brechasPensionales,
    tranquilidadEnRuta,
    estrategiaDeCompra,
    intercomunicadoresMesh,
    chaquetaDeProteccion,
    mantenimientoPremium,
    guantesCarbonCore
};

export const catalogItems = catalogItemsJson.map((item) => ({
    ...item,
    image: catalogImageMap[item.imageKey] || null
}));

export const catalogQualityMetrics = [
    {
        label: "Soluciones activas",
        value: "40+",
        animation: { preset: "fadeRight", delay: 0.02, duration: 2.0 },
        countDuration: 1.5
    },
    {
        label: "Categorías especializadas",
        value: "8",
        animation: { preset: "zoomIn", delay: 0.1, duration: 2.0 },
        countDuration: 1.2
    },
    {
        label: "Acompañamiento personalizado",
        value: "1:1",
        animation: { preset: "fadeLeft", delay: 0.18, duration: 2.0 },
        countDuration: 1.0
    }
];
