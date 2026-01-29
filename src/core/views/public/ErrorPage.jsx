import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const errorMsg = queryParams.get("error") || "Ocurrió un error inesperado.";

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-blue-950 text-white p-6">
            <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-black shadow-2xl rounded-2xl p-10 max-w-md w-full text-center border border-gray-800">
                <div className="flex justify-center mb-6">
                    <AlertTriangle className="w-16 h-16 text-green-500 animate-pulse" />
                </div>
                <h1 className="text-4xl font-extrabold text-green-500 mb-4">
                    ¡Oops! Error
                </h1>
                <p className="text-gray-300 mb-8">{errorMsg}</p>
                <button
                    onClick={() => navigate("/")}
                    className="bg-gradient-to-r from-green-600 to-green-900 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}
