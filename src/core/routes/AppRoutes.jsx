import { Routes, Route } from "react-router-dom";
import Index from "@core/views/public/Index.jsx";
import NotFound from "@core/views/public/NotFound.jsx";
import ErrorPage from "@core/views/public/ErrorPage.jsx";
import Page403 from "@core/views/public/403.jsx";

function AppRoutes() {
    return (
        <Routes>
            {/* Página 404 */}
            <Route path="*" element={<NotFound />} />

            {/* Página 403 */}
            <Route path="/403" element={<Page403 />} />

            {/* Manage Error by backend */}
            <Route path="/error" element={<ErrorPage />} />

            {/* Pages */}
            <Route path="/" element={<Index />} />
        </Routes>
    );
}

export default AppRoutes;
