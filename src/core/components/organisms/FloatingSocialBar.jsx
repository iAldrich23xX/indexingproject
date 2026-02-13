import { motion } from "framer-motion";
import {
    Facebook,
    Instagram,
    Linkedin,
    MessageCircle,
    Youtube
} from "lucide-react";
import SocialIconButton from "@core/components/molecules/social/SocialIconButton.jsx";
import { socialLinks } from "@core/data/home/socialLinksData.js";

const iconMap = {
    MessageCircle,
    Instagram,
    Facebook,
    Linkedin,
    Youtube
};

export default function FloatingSocialBar() {
    return (
        <motion.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="fixed bottom-3 right-2 z-[70] flex flex-col gap-2 sm:bottom-5 sm:right-4 md:bottom-7 md:right-6"
        >
            {socialLinks.map((social) => {
                const Icon = iconMap[social.icon];
                if (!Icon) return null;

                return (
                    <SocialIconButton
                        key={social.id}
                        href={social.href}
                        label={social.label}
                        icon={Icon}
                        className={social.className}
                    />
                );
            })}
        </motion.aside>
    );
}
