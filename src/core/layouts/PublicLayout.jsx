import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@core/components/organisms/Navbar.jsx";
import Footer from "@core/components/organisms/Footer.jsx";

export default function PublicLayout() {
    const { pathname } = useLocation();
    const isHome = pathname === "/";

    return (
        <>
            <Navbar />
            <div className={isHome ? "" : "pt-24 sm:pt-28 md:pt-32"}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
