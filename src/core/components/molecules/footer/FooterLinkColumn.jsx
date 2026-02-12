import clsx from "clsx";

export default function FooterLinkColumn({
    title,
    links = [],
    titleClassName,
    listClassName,
    linkClassName
}) {
    return (
        <div>
            <h3 className={clsx("text-sm font-semibold uppercase tracking-[0.15em] text-accent", titleClassName)}>
                {title}
            </h3>
            <ul className={clsx("mt-4 space-y-3", listClassName)}>
                {links.map((link) => (
                    <li key={link}>
                        <a href="#" className={clsx("text-sm text-foreground-invert/75 transition-colors hover:text-foreground-invert", linkClassName)}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
