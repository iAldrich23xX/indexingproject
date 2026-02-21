export default function CatalogPreviewCard({
                                               title,
                                               description,
                                               image,
                                               category,
                                               type,
                                               price,
                                               cta = "Ver más",
                                               onCtaClick
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
                hover:shadow-2xl hover:shadow-primary/20
            "
        >
            <div className="relative h-48 overflow-hidden sm:h-52 lg:h-56">
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
                        absolute top-3 left-3 sm:top-4 sm:left-4
                        bg-primary/90
                        text-foreground-invert text-[11px] font-semibold
                        px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full
                        uppercase tracking-[0.16em]
                    ">
                        {category}
                    </span>
                )}

                <span className="absolute right-3 top-3 rounded-full border border-foreground-invert/35 bg-foreground-invert/15 px-2.5 py-1 text-[11px] font-medium text-foreground-invert backdrop-blur-sm sm:right-4 sm:top-4 sm:px-3">
                    Recomendado
                </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4 sm:gap-4 sm:p-6">
                <h3 className="text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {title}
                </h3>

                <p className="text-sm leading-relaxed text-foreground/75">
                    {description}
                </p>

                {(type || price) && (
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                        {type && (
                            <span className="rounded-full border border-primary/35 bg-primary/8 px-2.5 py-1 font-semibold uppercase tracking-[0.1em] text-primary">
                                {type}
                            </span>
                        )}
                        {price && (
                            <span className="font-semibold text-foreground/85">{price}</span>
                        )}
                    </div>
                )}

                <div className="mt-auto pt-2">
                    <button
                        type="button"
                        onClick={onCtaClick}
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
