export default function CatalogPreviewCard({
                                               title,
                                               description,
                                               image,
                                               category,
                                               cta = "Ver más"
                                           }) {
    return (
        <div
            className="
                group
                h-full
                bg-card/95
                border border-white/40
                rounded-3xl
                overflow-hidden
                backdrop-blur
                transition-all duration-500
                hover:-translate-y-1.5
                hover:border-primary-soft/60
                hover:shadow-[0_22px_60px_rgba(0,0,0,0.35)]
            "
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
                        w-full h-full object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-105
                    "
                    loading="lazy"
                    onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=No+Image'; }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"/>

                {category && (
                    <span className="
                        absolute top-4 left-4
                        bg-primary/90
                        text-white text-[11px] font-semibold
                        px-3 py-1.5 rounded-full
                        uppercase tracking-[0.16em]
                    ">
                        {category}
                    </span>
                )}

                <span className="absolute right-4 top-4 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-medium text-black backdrop-blur-sm">
                    Recomendado
                </span>
            </div>

            <div className="p-6 flex flex-1 flex-col gap-4">
                <h3 className="text-xl font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-foreground/75 leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto pt-2">
                    <button
                        className="
                            inline-flex items-center gap-2
                            text-sm font-semibold
                            text-primary
                            transition-all
                            group-hover:translate-x-1
                        "
                    >
                        {cta}
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 text-base leading-none">
                            →
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
