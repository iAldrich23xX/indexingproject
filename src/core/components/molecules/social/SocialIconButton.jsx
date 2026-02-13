import clsx from "clsx";

export default function SocialIconButton({
    href,
    label,
    icon: Icon,
    className
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={clsx(
                "group flex h-11 w-11 items-center justify-center rounded-full border border-border/70 shadow-[0_8px_22px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1",
                className
            )}
        >
            <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </a>
    );
}
