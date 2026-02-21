const DEFAULT_WHATSAPP_NUMBER = "573000000000";

export function createCatalogWhatsappLink(item, phone = DEFAULT_WHATSAPP_NUMBER) {
    const labelType = item?.type === "producto" ? "producto" : "servicio";
    const message = [
        "Hola Indexing Project,",
        `quiero comprar/solicitar el ${labelType}: ${item?.title || ""}.`,
        item?.category ? `Categoria: ${item.category}.` : "",
        item?.price ? `Precio referencial: ${item.price}.` : "",
        "Quedo atento(a) para continuar el proceso."
    ]
        .filter(Boolean)
        .join(" ");

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
