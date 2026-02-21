import { Link, Navigate, useParams } from "react-router-dom";
import { infoPagesData } from "@core/data/pages/infoPagesData.js";

export default function InfoTemplatePage() {
    const { slug } = useParams();
    const content = slug ? infoPagesData[slug] : null;

    if (!content) {
        return <Navigate to="/404" replace />;
    }

    return (
        <main className="min-h-[65vh] bg-gradient-to-b from-background via-background-mid/40 to-background-end/30 px-4 py-8 sm:px-6 sm:py-12 md:py-16">
            <section className="mx-auto w-full max-w-5xl rounded-3xl border border-border/70 bg-card/90 p-6 shadow-xl backdrop-blur-sm sm:p-8 md:p-10">
                <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {content.badge}
                </span>

                <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
                    {content.title}
                </h1>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/75 sm:text-base md:text-lg">
                    {content.description}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-5">
                    {content.sections.map((section) => (
                        <article
                            key={section.title}
                            className="rounded-2xl border border-border/70 bg-background p-5"
                        >
                            <h2 className="text-lg font-semibold text-foreground sm:text-xl">{section.title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-foreground/70 sm:text-base">{section.text}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-foreground-invert transition hover:bg-primary-soft sm:text-base"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </section>
        </main>
    );
}
