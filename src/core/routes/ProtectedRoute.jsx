import { Navigate } from "react-router-dom";
import { useUser } from "@shared/context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
    const { isLogged, loading } = useUser();

    if (loading) return <p>Cargando sesión...</p>;
    if (!isLogged) return <Navigate to="/login" replace />;

    return children;
}