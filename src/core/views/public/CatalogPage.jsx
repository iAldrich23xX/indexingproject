import { useMemo, useState } from "react";
import CatalogPreviewCard from "@core/components/molecules/CatalogPreviewCard.jsx";
import { catalogItems } from "@core/data/home/catalogData.js";
import { createCatalogWhatsappLink } from "@core/utils/whatsapp.js";

export default function CatalogPage() {
    const categories = useMemo(
        () => ["Todos", ...new Set(catalogItems.map((item) => item.category))],
        []
    );
    const [activeCategory, setActiveCategory] = useState("Todos");

    const filteredItems = useMemo(() => {
        if (activeCategory === "Todos") return catalogItems;
        return catalogItems.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-background via-background-mid/35 to-background-end/15 px-4 py-8 sm:px-6 sm:py-10 md:py-14">
            <section className="mx-auto w-full max-w-6xl">
                <div className="text-center">
                    <span className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Catalogo
                    </span>
                    <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                        Servicios y productos
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/70 sm:text-base md:text-lg">
                        Explora el catalogo completo y compra por WhatsApp con un mensaje prellenado para agilizar tu solicitud.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
                    {categories.map((category) => {
                        const isActive = category === activeCategory;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition sm:text-sm ${
                                    isActive
                                        ? "border-primary bg-primary text-foreground-invert"
                                        : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-background"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filteredItems.map((item) => (
                        <CatalogPreviewCard
                            key={item.id}
                            {...item}
                            cta="Comprar por WhatsApp"
                            onCtaClick={() => {
                                window.open(createCatalogWhatsappLink(item), "_blank", "noopener,noreferrer");
                            }}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
