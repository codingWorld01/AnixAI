import Link from "next/link";
import { Button } from "@/components/ui/button";

export function OurProcess() {
    return (
        <section
            className="relative pt-5 pb-10 sm:pt-16 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/hero-bg.webp')`,
            }}
        >
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/40 to-black/70"></div>

            <div className="container px-4 md:px-8 relative z-10">
                {/* Section Subheading */}
                <p className="text-sm text-white text-center mb-4">OUR PROCESS</p>

                {/* Main Heading */}
                <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-8 max-w-4xl mx-auto">
                    Start improving your efficiency and reducing your operational costs with Generative AI in just a few weeks, not years.
                </h2>

                {/* Contact Us Button */}
                <div className="flex justify-center mb-12">
                    <Link href="/contact-us">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90">
                            Contact Us <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center text-center relative">
                        <h3 className="text-lg font-bold text-white mb-2">Executive Briefing</h3>
                        <div className="w-20 h-1 bg-gradient-to-b from-blue-500 to-purple-500 mb-2"></div>
                        <p className="text-base text-white">2 Hours</p>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center text-center relative">
                        <h3 className="text-lg font-bold text-white mb-2">Technology Assessment</h3>
                        <div className="w-20 h-1 bg-gradient-to-b from-blue-500 to-purple-500 mb-2"></div>
                        <p className="text-base text-white">2-3 Days</p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center text-center relative">
                        <h3 className="text-lg font-bold text-white mb-2">Proof of Concept (POC)</h3>
                        <div className="w-20 h-1 bg-gradient-to-b from-blue-500 to-purple-500 mb-2"></div>
                        <p className="text-base text-white">8-12 Weeks</p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center text-center relative">
                        <h3 className="text-lg font-bold text-white mb-2">AI Application Deployment</h3>
                        <div className="w-20 h-1 bg-gradient-to-b from-blue-500 to-purple-500 mb-2"></div>
                        <p className="text-base text-white">3-4 Months</p>
                    </div>
                </div>
            </div>
        </section>
    );
}