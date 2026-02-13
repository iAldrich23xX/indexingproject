import { motion } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";


export default function Button({
                                   children,
                                   variant = "primary",
                                   to,
                                   onClick,
                                   className,
                               }) {
    const baseStyles =
        "inline-flex items-center justify-center px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-soft";


    const variants = {
        primary:
            "bg-primary text-foreground-invert hover:scale-105 hover:shadow-xl shadow-primary/30",


        white:
            "bg-card text-foreground hover:bg-background hover:scale-105 shadow-lg",


        outline:
            "border border-foreground-invert/40 text-foreground-invert hover:bg-foreground-invert/10 hover:scale-105",
    };


    const styles = clsx(baseStyles, variants[variant], className);


    const MotionLink = motion(Link);


    return (
        <MotionLink
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            to={to}
            onClick={onClick}
            className={styles}
        >
            {children}
        </MotionLink>
    );
}
