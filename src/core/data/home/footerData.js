export const footerColumns = [
    {
        title: "Compañía",
        links: [
            { label: "Sobre nosotros", to: "/info/sobre-nosotros" },
            { label: "Equipo", to: "/info/equipo" },
            { label: "Aliados", to: "/info/aliados" },
            { label: "Contacto", to: "/info/contacto" }
        ],
        animation: { preset: "fadeRight", delay: 0.04 }
    },
    {
        title: "Servicios",
        links: [
            { label: "Protección financiera", to: "/info/proteccion-financiera" },
            { label: "Crecimiento indexado", to: "/info/crecimiento-indexado" },
            { label: "Formación", to: "/info/formacion" },
            { label: "Arquitectura FIXER", to: "/info/arquitectura-fixer" }
        ],
        animation: { preset: "zoomIn", delay: 0.11 }
    },
    {
        title: "Recursos",
        links: [
            { label: "Blog", to: "/info/blog" },
            { label: "Preguntas frecuentes", to: "/info/preguntas-frecuentes" },
            { label: "Políticas", to: "/info/politicas" },
            { label: "Soporte", to: "/info/soporte" }
        ],
        animation: { preset: "fadeLeft", delay: 0.18 }
    }
];

export const footerLegalLinks = [
    { label: "Términos", to: "/info/terminos" },
    { label: "Privacidad", to: "/info/privacidad" },
    { label: "Cookies", to: "/info/cookies" }
];
