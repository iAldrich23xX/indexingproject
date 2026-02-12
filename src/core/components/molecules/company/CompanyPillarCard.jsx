export default function CompanyPillarCard({ title, description }) {
    return (
        <article className="rounded-2xl border border-border bg-background p-7 shadow-[0_10px_30px_rgba(16,24,40,0.08)]">
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">{description}</p>
        </article>
    );
}
