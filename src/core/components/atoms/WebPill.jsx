import { NavLink } from "react-router-dom";
import { Globe } from "lucide-react";

export default function WebPill({ url = "https://www.indexingproject.com" }) {
    return (
        <NavLink
            to="/"
            className="
                group
                flex items-center gap-2
                px-5 py-2
                rounded-full
                border border-primary/60
                bg-background/40
                backdrop-blur-md
                text-sm font-medium
                text-foreground-invert
                transition-all duration-300
                hover:scale-125
                shadow-[0_0_15px_rgba(106,18,106,0.35)]
            "
        >
            <Globe className="w-4 h-4 text-foreground-invert transition-transform duration-300 group-hover:scale-110" />

            <span className="tracking-wide">
               {url}
            </span>

            <span
                className="
                    text-primary
                    opacity-70
                    translate-x-0
                    group-hover:translate-x-1
                    transition-all
                "
            >
                ➜
            </span>
        </NavLink>
    );
}