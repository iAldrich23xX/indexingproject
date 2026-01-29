import {BrowserRouter, useLocation} from "react-router-dom";
import AppRoutes from "@core/routes/AppRoutes.jsx";
import ErrorBoundary from "@core/routes/ErrorBoundary.jsx";

import "@core/App.css"

function App() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <AppRoutes />
            </ErrorBoundary>
        </BrowserRouter>
    );
}

export default App;