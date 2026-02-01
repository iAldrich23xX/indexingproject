import { NavLink as RouterNavLink } from "react-router-dom";

export default function NavLink({ children, to, end = false }) {
    return (
        <RouterNavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                {`
                    px-4 py-2 rounded-full
                    text-sm font-medium
                    transition-all duration-300
                    backdrop-blur-sm

                    ${
                        isActive
                            ? "text-foreground bg-primary/20 shadow-[0_0_20px_rgba(157,105,168,0.6)]"
                            : "text-muted-foreground hover:text-foreground hover:bg-card/40"
                    }
                `}
            }
        >
            {children}
        </RouterNavLink>
    );
}