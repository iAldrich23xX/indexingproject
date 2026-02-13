import React from "react";
import HeroSection from '@core/components/templates/HeroSection.jsx';
import Navbar from '@core/components/organisms/Navbar.jsx';

import useSectionSnap from "@core/hooks/useSectionSnap";
import CatalogPreviewSection from '@core/components/templates/CatalogPreviewSection.jsx';
import CompanyOverviewSection from '@core/components/templates/CompanyOverviewSection.jsx';
import Footer from '@core/components/organisms/Footer.jsx';
import FloatingSocialBar from '@core/components/organisms/FloatingSocialBar.jsx';

export default function Index() {
    //useSectionSnap(-80); if navbar is sticky
    const snap = useSectionSnap(0);

    return (
        <>
            <main
                className="
                    min-h-screen
                    scroll-smooth
                    overflow-x-hidden
                    bg-gradient-to-br
                    from-bg-start
                    via-bg-mid
                    to-bg-end
                    text-text-invert
                "
            >
                <Navbar />
                <HeroSection onScrollNext={snap.scrollNext}/>

                <CatalogPreviewSection />

                <CompanyOverviewSection />

                <FloatingSocialBar />

                <Footer />
            </main>
        </>
    );
}
