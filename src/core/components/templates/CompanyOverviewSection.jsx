import estrategiaDeCompra from "@core/assets/images/photos/estrategia_de_compra.webp";
import visionFinanciera from "@core/assets/images/photos/vision_financiera.jpg";
import brechasPensionales from "@core/assets/images/photos/brechas_pensionales.webp";
import mantenimientoPremium from "@core/assets/images/photos/mantenimiento_premium.jpeg";
import intercomunicadoresMesh from "@core/assets/images/photos/intercomunicadores_mesh.webp";
import tranquilidadEnRuta from "@core/assets/images/photos/tranquilidad_en_ruta.png";

const strategicPillars = [
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

const alliedPartners = [
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

export default function CompanyOverviewSection() {
    const marqueeItems = [...alliedPartners, ...alliedPartners];

    return (
        <section
            data-snap
            className="relative min-h-screen h-250 overflow-x-hidden bg-white px-6 pt-40 pb-20 md:pt-44 md:pb-24"
        >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Quiénes somos
                    </span>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                        Una firma orientada a resultados, confianza y visión estratégica
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
                        Indexing Project nació en 2020 como un Hub de Servicios financieros no bancarios, inspirado en una herencia jurídica y construido con una filosofía cercana:
                        convertir cada decisión financiera en protección, crecimiento y legado.
                    </p>

                    <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65 md:text-base">
                        En 5 años hemos acompañado a familias y empresas con educación financiera práctica, soluciones indexadas en COP y USD, y la Arquitectura FIXER:
                        ordenar, proteger y proyectar el proyecto financiero de vida a largo plazo.
                    </p>
                </div>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {strategicPillars.map((pillar) => (
                        <article
                            key={pillar.title}
                            className="rounded-2xl border border-primary bg-background p-7 shadow-[0_10px_30px_rgba(16,24,40,0.08)]"
                        >
                            <h3 className="text-xl font-semibold text-primary">{pillar.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{pillar.description}</p>
                        </article>
                    ))}
                </div>

                <div className="relative mt-14">
                    <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
                        Aliados estratégicos y red de colaboración
                    </p>

                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

                    <div className="partner-marquee border-y border-border py-4">
                        <div className="partner-marquee-track">
                            {marqueeItems.map((ally, index) => (
                                <article
                                    key={`${ally.name}-${index}`}
                                    className="w-[230px] shrink-0 rounded-xl border border-border bg-background p-3 shadow-sm md:w-[260px]"
                                >
                                    <div className="h-16 overflow-hidden rounded-lg border border-border bg-white">
                                        <img
                                            src={ally.image}
                                            alt={ally.name}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    <p className="mt-3 text-sm font-semibold text-foreground">{ally.name}</p>
                                    <p className="mt-1 text-xs text-foreground/60">{ally.category}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
