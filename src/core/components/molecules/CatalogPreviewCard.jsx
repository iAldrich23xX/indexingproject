export default function CatalogPreviewCard ({ title, description }) {
    return (
        <div
            className="
                bg-card backdrop-blur
                border border-border
                rounded-3xl
                p-8
                text-left
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_25px_60px_rgba(157,105,168,0.35)]
            "
        >
            <h3 className="text-xl font-semibold text-foreground mb-3">
                {title}
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}