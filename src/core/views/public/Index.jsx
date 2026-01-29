import React from "react";

export default function Index() {
    return (
        <div className="h-screen overflow-y-auto bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            <section className="flex flex-col items-center justify-center text-center px-6 py-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                    Basic <span className="text-[#0ded5b]">template</span>
                </h2>
            </section>

            <section className="py-16 px-6">
                <h3 className="text-3xl font-bold text-center text-[#0ded5b] mb-12">
                    Template react JSX
                </h3>
            </section>
        </div>
    );
}
