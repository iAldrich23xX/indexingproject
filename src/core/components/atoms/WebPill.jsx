import { NavLink } from "react-router-dom";
import { Globe } from "lucide-react";

export default function WebPill({ url = "https://www.indexingproject.com" }) {
    return (
        <NavLink
            to="/"
            className="
                group
                flex items-center gap-2
                px-4 py-1.5 lg:px-5 lg:py-2
                rounded-full
                border border-primary/60
                bg-background/40
                backdrop-blur-md
                text-xs lg:text-sm font-medium
                text-foreground-invert
                transition-all duration-300
                hover:scale-105
                shadow-[0_0_15px_rgba(106,18,106,0.35)]
            "
        >
            <Globe className="w-4 h-4 text-foreground-invert transition-transform duration-300 group-hover:scale-110" />

            <span className="max-w-[180px] truncate tracking-wide">
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
