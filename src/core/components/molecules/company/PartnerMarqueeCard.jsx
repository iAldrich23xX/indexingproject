export default function PartnerMarqueeCard({ name, category, image }) {
    return (
        <article className="w-[230px] shrink-0 rounded-xl border border-border bg-background p-3 shadow-sm md:w-[260px]">
            <div className="h-16 overflow-hidden rounded-lg border border-border bg-white">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            <p className="mt-3 text-sm font-semibold text-foreground">{name}</p>
            <p className="mt-1 text-xs text-foreground/60">{category}</p>
        </article>
    );
}
