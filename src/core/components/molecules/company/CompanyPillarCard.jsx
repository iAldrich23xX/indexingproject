export default function CompanyPillarCard({ title, description }) {
    return (
        <article className="rounded-2xl border border-border bg-background p-5 shadow-[0_10px_30px_rgba(16,24,40,0.08)] sm:p-6 lg:p-7">
            <h3 className="text-lg font-semibold text-primary sm:text-xl">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-foreground/70 sm:mt-3">{description}</p>
        </article>
    );
}
