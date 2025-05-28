import React from 'react';

export function WhyUs() {
    return (
        <section
            className="relative py-16 overflow-hidden bg-cover bg-center"
            // style={{
            //     backgroundImage: `url('https://ext.same-assets.com/839307342/2437992869.webp')`,
            // }}
        >
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-900/70"></div>

            <div className="container px-4 md:px-8 relative z-10">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Why Us
                </h2>

                {/* Three-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Expertise in AI
                        </h3>
                        <div className="w-16 h-1 bg-white/30 mb-4"></div>
                        <p className="text-muted-foreground text-base">
                            Our team has deep expertise in building generative AI solutions that deliver measurable results for data-driven companies.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Proven Results
                        </h3>
                        <div className="w-16 h-1 bg-white/30 mb-4"></div>
                        <p className="text-muted-foreground text-base">
                            We’ve helped numerous clients achieve significant ROI through tailored AI strategies and implementations.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Scalable Solutions
                        </h3>
                        <div className="w-16 h-1 bg-white/30 mb-4"></div>
                        <p className="text-muted-foreground text-base">
                            Our solutions are designed to scale with your business, ensuring long-term growth and adaptability.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}