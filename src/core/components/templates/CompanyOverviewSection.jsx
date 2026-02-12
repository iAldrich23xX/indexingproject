import CompanyPillarCard from "@core/components/molecules/company/CompanyPillarCard.jsx";
import ScrollReveal from "@core/components/molecules/ScrollReveal.jsx";
import PartnerMarquee from "@core/components/organisms/company/PartnerMarquee.jsx";
import { alliedPartners, companySummary, strategicPillars } from "@core/data/home/companyOverviewData.js";

export default function CompanyOverviewSection() {
    return (
        <section
            data-snap
            className="relative min-h-screen h-250 overflow-x-hidden bg-white px-6 pt-40 pb-20 md:pt-44 md:pb-24"
        >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
                <ScrollReveal className="mx-auto max-w-4xl text-center" preset="blurUp" fromY={34} duration={0.75}>
                    <span className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        {companySummary.badge}
                    </span>

                    <h2 className="mt-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                        {companySummary.title}
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
                        {companySummary.paragraphs[0]}
                    </p>

                    <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-foreground/65 md:text-base">
                        {companySummary.paragraphs[1]}
                    </p>
                </ScrollReveal>

                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {strategicPillars.map((pillar) => (
                        <ScrollReveal key={pillar.title} {...(pillar.animation || {})}>
                            <CompanyPillarCard
                                title={pillar.title}
                                description={pillar.description}
                            />
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal preset="fadeUp" fromY={26} delay={0.18}>
                    <PartnerMarquee items={alliedPartners}/>
                </ScrollReveal>
            </div>
        </section>
    );
}
