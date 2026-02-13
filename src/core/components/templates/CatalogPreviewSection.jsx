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
            min-h-[100svh]
            flex flex-col items-center justify-center
            px-4 py-20 sm:px-6 sm:py-24 lg:py-28
            overflow-hidden
        "
        >
            <div
                className="
                    absolute
                    -bottom-24 left-0 right-0
                    mx-auto
                    h-[20rem] w-full
                    max-w-[100vw]
                    bg-primary-soft/30
                    blur-[80px] sm:blur-[120px]
                    rounded-[100%]
                    pointer-events-none
                "
            />

            <div className="relative z-10 w-full max-w-6xl">
                <ScrollReveal className="mx-auto max-w-4xl text-center" preset="fadeDown" delay={0.1} duration={0.85}>
                    <h2 className="text-3xl font-bold leading-tight text-foreground-invert sm:text-4xl md:text-5xl">
                        Servicios y soluciones que impulsan tu crecimiento
                    </h2>
                </ScrollReveal>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:gap-4 md:mt-10 md:grid-cols-3">
                    {catalogQualityMetrics.map((metric) => (
                        <ScrollReveal
                            key={metric.label}
                            className="rounded-2xl border border-foreground-invert/15 bg-foreground-invert/8 px-4 py-4 text-center backdrop-blur-sm sm:px-6 sm:py-5"
                            {...(metric.animation || {})}
                        >
                            <p className="text-2xl font-bold text-foreground-invert sm:text-3xl">
                                <CountUpValue
                                    value={metric.value}
                                    duration={metric.countDuration || 1.3}
                                />
                            </p>
                            <p className="mt-1.5 text-xs text-foreground-invert/70 sm:mt-2 sm:text-sm">{metric.label}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            <ScrollReveal className="relative z-10 mt-10 w-full sm:mt-14" preset="zoomIn" delay={0.15} duration={0.85}>
                <CatalogCarousel items={catalogItems}/>
            </ScrollReveal>

            {/*<div className="relative z-10 mt-12 flex flex-wrap justify-center gap-4">
                <Button variant="white" to="/catalogo">Explorar catálogo</Button>
                <Button variant="outline" to="/catalogo">Ver servicios destacados</Button>
            </div>*/}
        </section>
    );
}
