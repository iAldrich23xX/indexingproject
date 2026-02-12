import estrategiaDeCompra from "@core/assets/images/photos/estrategia_de_compra.webp";
import visionFinanciera from "@core/assets/images/photos/vision_financiera.jpg";
import brechasPensionales from "@core/assets/images/photos/brechas_pensionales.webp";
import mantenimientoPremium from "@core/assets/images/photos/mantenimiento_premium.jpeg";
import intercomunicadoresMesh from "@core/assets/images/photos/intercomunicadores_mesh.webp";
import tranquilidadEnRuta from "@core/assets/images/photos/tranquilidad_en_ruta.png";

export const companySummary = {
    badge: "Quiénes somos",
    title: "Una firma orientada a resultados, confianza y visión estratégica",
    paragraphs: [
        "Indexing Project nació en 2020 como un Hub de Servicios financieros no bancarios, inspirado en una herencia jurídica y construido con una filosofía cercana: convertir cada decisión financiera en protección, crecimiento y legado.",
        "En 5 años hemos acompañado a familias y empresas con educación financiera práctica, soluciones indexadas en COP y USD, y la Arquitectura FIXER: ordenar, proteger y proyectar el proyecto financiero de vida a largo plazo."
    ]
};

export const strategicPillars = [
    {
        title: "Visión corporativa",
        description: "Transformamos decisiones financieras en estrategias medibles, con foco en sostenibilidad y crecimiento."
    },
    {
        title: "Metodología clara",
        description: "Estandarizamos procesos y ejecutamos con indicadores concretos para dar control en cada etapa."
    },
    {
        title: "Relaciones de largo plazo",
        description: "Trabajamos con aliados especializados para ampliar capacidades y entregar soluciones integrales."
    }
];

export const alliedPartners = [
    {
        name: "Capital Route",
        category: "Planeación financiera",
        image: visionFinanciera
    },
    {
        name: "Patrimonio Axis",
        category: "Inversión inmobiliaria",
        image: estrategiaDeCompra
    },
    {
        name: "Shield Partners",
        category: "Protección y seguros",
        image: tranquilidadEnRuta
    },
    {
        name: "Retiro Nexus",
        category: "Estrategia pensional",
        image: brechasPensionales
    },
    {
        name: "R7 Corporate Lab",
        category: "Optimización operativa",
        image: mantenimientoPremium
    },
    {
        name: "Mesh Alliance",
        category: "Conectividad aplicada",
        image: intercomunicadoresMesh
    }
];
