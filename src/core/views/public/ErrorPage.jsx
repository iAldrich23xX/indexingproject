import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    const errorMsg = queryParams.get("error") || "Ocurrió un error inesperado.";

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background-end via-background-mid to-background p-6 text-foreground-invert">
            <div className="w-full max-w-md rounded-2xl border border-border/60 bg-background-end/85 p-10 text-center shadow-2xl backdrop-blur-sm">
                <div className="flex justify-center mb-6">
                    <AlertTriangle className="h-16 w-16 animate-pulse text-warning" />
                </div>
                <h1 className="mb-4 text-4xl font-extrabold text-warning">
                    ¡Oops! Error
                </h1>
                <p className="mb-8 text-foreground-invert/75">{errorMsg}</p>
                <button
                    onClick={() => navigate("/")}
                    className="rounded-xl bg-primary px-6 py-3 text-foreground-invert shadow-md transition-all hover:scale-105 hover:bg-primary-soft hover:shadow-lg"
                >
                    Volver al inicio
                </button>
            </div>
        </div>
    );
}
