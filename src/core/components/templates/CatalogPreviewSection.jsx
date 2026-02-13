import CatalogCarousel from '@core/components/organisms/CatalogCarousel.jsx';
import ScrollReveal from "@core/components/molecules/ScrollReveal.jsx";
import CountUpValue from "@core/components/atoms/CountUpValue.jsx";
import { catalogItems, catalogQualityMetrics } from "@core/data/home/catalogData.js";

export default function CatalogPreviewSection() {
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
                <ScrollReveal className="mx-auto max-w-4xl text-center space-y-5" preset="fadeDown" delay={0.25} duration={2.0}>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground-invert">
                        Servicios y soluciones que impulsan tu crecimiento
                    </h2>
                </ScrollReveal>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {catalogQualityMetrics.map((metric) => (
                        <ScrollReveal
                            key={metric.label}
                            className="rounded-2xl border border-white/15 bg-white/8 px-6 py-5 text-center backdrop-blur-sm"
                            {...(metric.animation || {})}
                        >
                            <p className="text-3xl font-bold text-foreground-invert">
                                <CountUpValue
                                    value={metric.value}
                                    duration={metric.countDuration || 1.3}
                                />
                            </p>
                            <p className="mt-2 text-sm text-foreground-invert/70">{metric.label}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <ScrollReveal className="relative z-10 mt-14 container mx-auto" preset="zoomIn" delay={0.25} duration={2.0}>
                <CatalogCarousel items={catalogItems}/>
            </ScrollReveal>

            {/*<div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4">
                <Button variant="white" to="/catalogo">Explorar catálogo</Button>
                <Button variant="outline" to="/catalogo">Ver servicios destacados</Button>
            </div>*/}
        </section>
    );
}
