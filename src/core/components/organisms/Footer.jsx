import Logo from '@core/components/atoms/Logo.jsx';
import FooterLinkColumn from "@core/components/molecules/footer/FooterLinkColumn.jsx";
import ScrollReveal from "@core/components/molecules/ScrollReveal.jsx";
import { footerColumns, footerLegalLinks } from "@core/data/home/footerData.js";

export default function Footer() {
    return (
        <footer
            data-snap
            className="relative bg-background-end px-6 py-16 md:py-24"
        >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background-end to-[#1a081d]/50" />
            <div className="pointer-events-none absolute -top-16 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-soft/10 blur-[100px]" />

            <div className="relative z-10 mx-auto w-full max-w-6xl">
                <ScrollReveal className="grid gap-12 border-b border-border/40 pb-12 md:grid-cols-[1fr,1.8fr]" preset="fadeUp" fromY={28}>
                    <div className="space-y-4">
                        <Logo size="md" variant="subtle" showText={false} />
                        <h2 className="text-2xl font-bold leading-tight text-foreground-invert md:text-3xl">
                            Rodá seguro, <br />
                            proyectá tu futuro.
                        </h2>
                        <p className="max-w-xs text-sm leading-relaxed text-foreground-invert/60">
                            Asesoría financiera y equipamiento premium para los que viven la ruta con visión estratégica.
                        </p>
                    </div>

                    <div className="grid gap-8 grid-cols-2 sm:grid-cols-3">
                        {footerColumns.map((column) => (
                            <ScrollReveal key={column.title} {...(column.animation || {})}>
                                <FooterLinkColumn
                                    title={column.title}
                                    links={column.links}
                                    titleClassName="text-[11px] font-bold uppercase tracking-[0.2em] text-accent/90"
                                    listClassName="mt-5 space-y-2.5"
                                    linkClassName="text-[13px] text-foreground-invert/60 transition-colors hover:text-primary"
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal
                    className="mt-8 flex flex-col gap-6 text-[11px] font-medium uppercase tracking-wider text-foreground-invert/40 md:flex-row md:items-center md:justify-between"
                    preset="fadeDown"
                    delay={0.22}
                >
                    <p>© {new Date().getFullYear()} Indexing Project. Rodando con estrategia.</p>
                    <div className="flex items-center gap-6">
                        {footerLegalLinks.map((link) => (
                            <a key={link} href="#" className="transition-colors hover:text-foreground-invert">
                                {link}
                            </a>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    );
}
