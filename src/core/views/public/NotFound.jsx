import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div
            className="h-screen w-full flex items-center justify-end text-white px-6"
        >
            <div className="max-w-2xl text-right p-8">
                <h1 className="text-8xl md:text-[10rem] font-extrabold mb-6 text-white">
                    404
                </h1>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
                    Algo se salió del camino...
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
                    Parece que esta página tomó un desvío inesperado. No te preocupes, aún estás a solo un clic de volver al camino correcto.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-white text-[#0a0a0a] px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}
