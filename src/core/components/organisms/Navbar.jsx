import Logo from '@core/components/atoms/Logo';
import NavMenu from '@core/components/molecules/NavMenu';
import WebPill from '@core/components/atoms/WebPill';

export default function Navbar() {
    return (
        <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
            <div
                className="
                    rounded-full
                    p-[1.5px]
                    bg-gradient-to-r from-primary via-primary-soft to-primary
                    shadow-[0_0_30px_rgba(106,18,106,0.35)]
                "
            >
                <div
                    className="
                        relative
                        flex items-center
                        px-6 py-3
                        rounded-full
                        bg-background-end
                        backdrop-blur-xl
                        border border-border
                        shadow-lg
                        text-foreground-invert
                    "
                >
                    {/* Glow dots background */}
                    <div className="absolute inset-0 -z-10 rounded-full overflow-hidden">
                        <div className="navbar-dots" />
                    </div>

                    <div className="flex items-center">
                        <Logo showText={false} />
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <WebPill />
                    </div>

                    <div className="ml-auto">
                        <NavMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}