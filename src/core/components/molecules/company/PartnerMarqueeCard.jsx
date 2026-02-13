export default function PartnerMarqueeCard({ name, category, image }) {
    return (
        <article className="w-[190px] shrink-0 rounded-xl border border-border bg-background p-2.5 shadow-sm sm:w-[220px] sm:p-3 md:w-[260px]">
            <div className="h-14 overflow-hidden rounded-lg border border-border bg-white sm:h-16">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                />
            </div>

            <p className="mt-2.5 text-sm font-semibold text-foreground sm:mt-3">{name}</p>
            <p className="mt-1 text-xs text-foreground/60">{category}</p>
        </article>
    );
}
