import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main
            className="min-h-[65vh] w-full flex items-center justify-end bg-gradient-to-b from-background-end via-background-mid to-background px-4 py-10 text-foreground-invert sm:px-6"
        >
            <div className="max-w-2xl text-right p-4 sm:p-8">
                <h1 className="mb-6 text-8xl font-extrabold text-foreground-invert md:text-[10rem]">
                    404
                </h1>
                <h2 className="mb-8 text-5xl font-bold text-foreground-invert md:text-6xl">
                    Algo se salió del camino...
                </h2>
                <p className="mb-10 text-xl leading-relaxed text-foreground-invert/75 md:text-2xl">
                    Parece que esta página tomó un desvío inesperado. No te preocupes, aún estás a solo un clic de volver al camino correcto.
                </p>
                <Link
                    to="/"
                    className="inline-block rounded-md bg-card px-8 py-4 text-lg font-semibold text-foreground transition-all duration-300 hover:bg-background hover:shadow-lg"
                >
                    Volver al inicio
                </Link>
            </div>
        </main>
    );
}
