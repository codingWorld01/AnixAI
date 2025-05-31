"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const solutions = [
  {
    title: "Accelerated Claim Processing with an Intelligent Medical Coding Solution",
    description:
      "A leading healthcare company wanted to modernize medical claim processing. We built an AI solution that can understand medical documentation, extract relevant information, and automatically code claims using ICD-10 and CPT/HCPCS codes.",
    image: "/images/img1.webp",
    stats: "40%",
    statsLabel: "reduction in claims settlement processing time",
    quote:
      "This AI solution has transformed our claims processing, saving us countless hours and improving accuracy.",
    quoteAuthor: "Jane Doe, CTO at HealthCare Inc.",
    link: "/case-studies/claim-processing",
  },
  {
    title: "Streamline Your AI Operations",
    description:
      "Our MLOps solutions optimize your AI workflow from data prep to deployment, reducing costs while ensuring scalability and reliability. Get started with modern AI infrastructure today.",
    image: "/images/img2.webp",
    stats: "30%",
    statsLabel: "increase in deployment efficiency",
    quote:
      "The MLOps solution streamlined our operations, allowing us to scale AI initiatives effortlessly.",
    quoteAuthor: "John Smith, Head of AI at TechCorp",
    link: "/services/mlops",
  },
  {
    title: "AI Agents to Supercharge Your Business",
    description:
      "Our AI agents act autonomously to complete complex tasks, make decisions, and interact with users naturally. They integrate with your existing systems to provide 24/7 support.",
    image: "/images/img3.webp",
    stats: "50%",
    statsLabel: "improvement in customer support response time",
    quote:
      "These AI agents have been a game-changer for our customer support team, providing 24/7 assistance.",
    quoteAuthor: "Emily Brown, CEO at SupportSys",
    link: "/services/ai-agents",
  },
];

export function AISolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-16 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            AI Solutions We Have Built for Our Clients
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover how our AI solutions have empowered businesses to achieve measurable growth and efficiency.
          </p>
        </div>

        {/* Sliding Window with Controller Arrows */}
        <div className="relative overflow-hidden sm:pt-16 pt-0">
          {/* Controller Arrows - Adjusted for new padding */}
          <div className="absolute top-0 right-2 flex space-x-2 z-10">
            <button
              onClick={handlePrev}
              className="bg-anixai-blue/80 text-white p-3 rounded-full hover:bg-anixai-blue"
              aria-label="Previous case study"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="bg-anixai-blue/80 text-white p-3 rounded-full hover:bg-anixai-blue"
              aria-label="Next case study"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Carousel Content */}
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="bg-card border-border/60 shadow-lg overflow-hidden mx-auto w-[100%] h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div>
                        <div className="mb-4 inline-block bg-anixai-blue/10 px-3 py-1 rounded-full">
                          <span className="text-anixai-blue text-sm font-medium">Case Study</span>
                        </div>
                        <br />

                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                          {solutions[currentIndex].title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mb-4">
                          {solutions[currentIndex].description}
                        </p>
                        <br />
                        <div className="mb-4">
                          <span className="block text-4xl font-bold text-anixai-blue text-white">
                            {solutions[currentIndex].stats}
                          </span>
                          <span className="text-sm text-gray-300">
                            {solutions[currentIndex].statsLabel}
                          </span>
                        </div>
                        <br />
                        <blockquote className="text-gray-300 italic text-sm md:text-base">
                          "{solutions[currentIndex].quote}" <br />
                          <span className="text-anixai-blue font-medium ">
                            — {solutions[currentIndex].quoteAuthor}
                          </span>
                        </blockquote>
                      </div>
                      <br />
                      <Link href={solutions[currentIndex].link}>
                        <Button
                          variant="outline"
                          className="mt-4 rounded-full border-anixai-blue text-anixai-blue hover:bg-anixai-blue hover:text-white"
                        >
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                    {/* Right Side: Image */}
                    <div className="relative min-h-[300px] md:min-h-full">
                      <Image
                        src={solutions[currentIndex].image}
                        alt={solutions[currentIndex].title}
                        fill
                        className="object-cover transition-opacity duration-300 hover:opacity-90"
                      />
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/work">
            <button className=" relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Know more about our work
              </span>
            </button>

          </Link>
        </div>
      </div>
    </section>
  );
}