import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ children, to, end = false }) {
    return (
        <RouterNavLink
            to={to}
            end={end}
            className={({ isActive }) => `
                    px-4 py-2 rounded-full
                    text-sm
                    transition-all duration-300
                    backdrop-blur-sm

                    ${
                        isActive
                            ? "font-semibold text-foreground-invert bg-primary/30 ring-1 ring-primary-soft/70 shadow-lg shadow-primary-soft/45"
                            : "font-semibold text-foreground-invert hover:text-foreground-invert hover:bg-foreground-invert/10"
                    }
                `}
        >
            {children}
        </RouterNavLink>
    );
}
