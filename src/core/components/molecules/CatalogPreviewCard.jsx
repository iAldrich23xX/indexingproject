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
                bg-card
                border border-border
                rounded-3xl
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            "
        >
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                    "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {category && (
                    <span className="
                        absolute top-4 left-4
                        bg-primary/90
                        text-white text-xs font-semibold
                        px-3 py-1 rounded-full
                        uppercase tracking-wide
                    ">
                        {category}
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-foreground/70 leading-relaxed">
                    {description}
                </p>

                <div className="mt-2">
                    <button
                        className="
                            text-sm font-medium
                            text-primary
                            transition-all
                            group-hover:translate-x-1
                        "
                    >
                        {cta} →
                    </button>
                </div>
            </div>
        </div>
    );
}