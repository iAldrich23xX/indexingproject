export default function DotGridLayer({ wrapperRef, children }) {
    return (
        <div ref={wrapperRef} className="w-full h-full relative">
            {children}
        </div>
    );
}