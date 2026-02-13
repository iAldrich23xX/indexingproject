import CompanyPillarCard from "@core/components/molecules/company/CompanyPillarCard.jsx";
import ScrollReveal from "@core/components/molecules/ScrollReveal.jsx";
import PartnerMarquee from "@core/components/organisms/company/PartnerMarquee.jsx";
import { alliedPartners, companySummary, strategicPillars } from "@core/data/home/companyOverviewData.js";

export default function CompanyOverviewSection() {
    return (
        <section
            data-snap
            className="relative min-h-[100svh] overflow-x-hidden bg-card px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24"
        >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
                <div className="mx-auto max-w-4xl text-center">
                    <ScrollReveal preset="blurUp" fromY={24} duration={0.85}>
                        <span className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            {companySummary.badge}
                        </span>
                    </ScrollReveal>

                    <ScrollReveal preset="fadeUp" fromY={24} duration={0.85} delay={0.08}>
                        <h2 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:mt-6 sm:text-4xl md:text-5xl">
                            {companySummary.title}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal preset="fadeLeft" duration={0.85} delay={0.12}>
                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-foreground/70 sm:mt-5 sm:text-base md:text-lg">
                            {companySummary.paragraphs[0]}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal preset="fadeRight" duration={0.85} delay={0.18}>
                        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65 md:text-base">
                            {companySummary.paragraphs[1]}
                        </p>
                    </ScrollReveal>
                </div>

                <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
                    {strategicPillars.map((pillar) => (
                        <ScrollReveal key={pillar.title} {...(pillar.animation || {})}>
                            <CompanyPillarCard
                                title={pillar.title}
                                description={pillar.description}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal preset="fadeUp" fromY={20} delay={0.12} duration={0.8}>
                    <PartnerMarquee items={alliedPartners}/>
                </ScrollReveal>
            </div>
        </section>
    );
}
