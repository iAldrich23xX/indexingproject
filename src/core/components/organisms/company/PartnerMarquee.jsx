import useDuplicatedList from "@core/hooks/useDuplicatedList.jsx";
import PartnerMarqueeCard from "@core/components/molecules/company/PartnerMarqueeCard.jsx";

export default function PartnerMarquee({
    title = "Aliados estratégicos y red de colaboración",
    items = []
}) {
    const marqueeItems = useDuplicatedList(items);

    return (
        <div className="relative mt-14">
            <p className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-foreground/60">
                {title}
            </p>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />

            <div className="partner-marquee border-y border-border py-4">
                <div className="partner-marquee-track">
                    {marqueeItems.map((item, index) => (
                        <PartnerMarqueeCard
                            key={`${item.name}-${index}`}
                            name={item.name}
                            category={item.category}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
