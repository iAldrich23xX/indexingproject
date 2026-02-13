import React from "react";
import { Link } from "react-router-dom";

export default function Page403() {
    return (
        <div
            className="h-screen w-full flex items-center justify-end bg-gradient-to-b from-background-end to-background-gradial px-6 text-foreground-invert"
        >
            <div className="max-w-2xl text-right p-8">
                <h1 className="mb-6 text-8xl font-extrabold text-foreground-invert md:text-[10rem]">
                    403
                </h1>
                <h2 className="mb-8 text-5xl font-bold text-foreground-invert md:text-6xl">
                    Algo se salió del camino...
                </h2>
                <p className="mb-10 text-xl leading-relaxed text-foreground-invert/75 md:text-2xl">
                    Parece que no tienes acceso a esta pagina. No te preocupes, aún estás a solo un clic de volver al camino correcto.
                </p>
                <Link
                    to="/"
                    className="inline-block rounded-md bg-card px-8 py-4 text-lg font-semibold text-foreground transition-all duration-300 hover:bg-background hover:shadow-lg"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
