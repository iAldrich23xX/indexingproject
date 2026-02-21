import clsx from "clsx";
import { Link } from "react-router-dom";

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
                    <li key={link.to || link.label}>
                        <Link
                            to={link.to || "#"}
                            className={clsx("text-sm text-foreground-invert/75 transition-colors hover:text-foreground-invert", linkClassName)}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
