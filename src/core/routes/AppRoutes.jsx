import { Routes, Route } from "react-router-dom";
import Index from "@core/views/public/Index.jsx";
import NotFound from "@core/views/public/NotFound.jsx";
import ErrorPage from "@core/views/public/ErrorPage.jsx";
import Page403 from "@core/views/public/403.jsx";
import PublicLayout from "@core/layouts/PublicLayout.jsx";
import CatalogPage from "@core/views/public/CatalogPage.jsx";
import InfoTemplatePage from "@core/views/public/InfoTemplatePage.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Index />} />
                <Route path="/catalogo" element={<CatalogPage />} />
                <Route path="/info/:slug" element={<InfoTemplatePage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="/403" element={<Page403 />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
