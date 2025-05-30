import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Plan Your AI Adoption",
    description: "We analyze your business requirements and data capabilities to develop a strategic roadmap that maximizes the potential of AI within your organization.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-anixai-blue" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
    link: "/services/ai-consulting"
  },
  {
    title: "Enhance Decision-Making",
    description: "Our custom-built AI solutions help you make better business decisions by revealing insights from your data that traditional analytics might miss.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-anixai-blue" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    link: "/services/ai-analytics"
  },
  {
    title: "Scale Gradually with Confidence",
    description: "Start with proof-of-concepts and gradually scale your AI initiatives with our structured approach, ensuring alignment with your business goals and risk tolerance.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 text-anixai-blue" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    link: "/services/ai-poc-development"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Helping our clients to transform their business
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We empower businesses with advanced Generative AI solutions tailored to their specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.title}
              className="group"
            >
              <div className="p-8 rounded-lg border border-border/40 bg-card/60 backdrop-blur-sm h-full flex flex-col group-hover:border-anixai-blue/50 transition-colors duration-300">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-anixai-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <span className="text-anixai-blue font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
