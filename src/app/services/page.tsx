import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    title: "Artificial Intelligence",
    services: [
      {
        name: "Generative AI Development",
        description: "Create powerful text, image, and code generation solutions with custom fine-tuned LLMs.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ),
        link: "/generative-ai-development-company",
      },
      {
        name: "AI Agent Development",
        description: "Design autonomous AI agents that can execute tasks, make decisions, and interact naturally with users.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8" />
            <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
            <path d="M7 9h0" />
            <path d="M17 9h0" />
            <path d="M12 13a2 2 0 0 0 2 2h1a2 2 0 1 0 0-4h-2a2 2 0 0 1 0-4h1a2 2 0 0 1 2 2" />
          </svg>
        ),
        link: "/ai-agents-development-company",
      },
      {
        name: "LLM Development",
        description: "Build, fine-tune, and deploy large language models tailored to your specific business needs.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6H10a6 6 0 0 0-6 6v0a6 6 0 0 0 6 6h10" />
            <path d="M14 11h-2v2h2v-2Z" />
            <path d="M20 11h-2v2h2v-2Z" />
            <path d="M8 11H6v2h2v-2Z" />
          </svg>
        ),
        link: "/llm-development-services",
      },
    ],
  },
  {
    title: "Data Engineering",
    services: [
      {
        name: "ML Model Engineering",
        description: "Design, develop, and deploy machine learning models that deliver predictive insights.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8" />
            <path d="m18 2 4 4-8 8H10V10l8-8Z" />
          </svg>
        ),
        link: "/ml-model-engineering-services",
      },
      {
        name: "MLOps Consulting",
        description: "Streamline your ML lifecycle from development to deployment with robust MLOps practices.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6H4" />
            <path d="M20 12H12" />
            <path d="M20 18H4" />
          </svg>
        ),
        link: "/mlops-consulting-services",
      },
      {
        name: "Cloud Services",
        description: "Leverage cloud platforms to build scalable, reliable, and cost-effective AI solutions.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        ),
        link: "/cloud-application-development",
      },
    ],
  },
  {
    title: "Consulting & Strategy",
    services: [
      {
        name: "Generative AI Consulting",
        description: "Strategic guidance on leveraging generative AI to transform your business operations.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15.5 15.5 5 5" />
            <path d="M14 4 20 10" />
            <path d="M4 14 10 20" />
            <path d="M12 8a4 4 0 0 1 0 8" />
          </svg>
        ),
        link: "/generative-ai-consulting-company",
      },
      {
        name: "AI POC Development",
        description: "Validate your AI ideas with rapid proof-of-concept development and testing.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16.5 9.4 7.5 4.21" />
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <path d="M3.27 6.96 12 12.01l8.73-5.05" />
            <path d="M12 22.08V12" />
          </svg>
        ),
        link: "/ai-poc-development",
      },
      {
        name: "Enterprise AI Strategy",
        description: "Comprehensive AI roadmaps and implementation strategies for large organizations.",
        icon: (
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="m22 12-4-4-7 7-3-3" />
          </svg>
        ),
        link: "/enterprise-ai-development-company",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16 bg-background">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Leverage Our <span className="text-gradient">Expertise in Advanced Technologies</span> to Elevate Your Business
            </h1>
            <p className="text-muted-foreground text-lg">
              At the forefront of innovation, we specialize in creating sophisticated, high-performing Generative AI solutions across the stack. Partner with us to bring your AI vision to life.
            </p>
          </div>

          <div className="mb-16">
            <Link href="/contact-us" className="block text-center">
              <Button className="bg-gradient rounded-full text-white px-8 py-6 text-lg font-medium hover:opacity-90">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Client Logos */}
          <div className="mb-20">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <Image
                src="https://ext.same-assets.com/839307342/2938846462.png"
                alt="NVMS"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="https://ext.same-assets.com/839307342/2256489587.png"
                alt="Trapeze"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="https://ext.same-assets.com/839307342/279625952.png"
                alt="Synervoz"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="https://ext.same-assets.com/839307342/1496873731.png"
                alt="Nown"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <Image
                src="https://ext.same-assets.com/839307342/491640340.png"
                alt="Landmark"
                width={120}
                height={40}
                className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background/80">
        <div className="container px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Comprehensive Solutions Across All Technological Frontiers
          </h2>

          <div className="space-y-20">
            {serviceCategories.map((category) => (
              <div key={category.title} className="mb-12">
                <h3 className="text-2xl font-bold mb-8 text-markovate-blue">{category.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <Link key={service.name} href={service.link} className="group">
                      <div className="p-6 rounded-lg border border-border/40 bg-card/60 h-full group-hover:border-markovate-blue/50 transition-colors duration-300">
                        <div className="flex items-center mb-4">
                          <div className="p-2 rounded-md bg-markovate-blue/10 text-markovate-blue mr-3">
                            {service.icon}
                          </div>
                          <h4 className="text-lg font-semibold group-hover:text-markovate-blue transition-colors">
                            {service.name}
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-background to-background/90">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Decade of Innovation: Celebrating Markovate's Technological Evolution
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              In the past ten years, Markovate has transformed from a humble startup into a leader in AI innovation. Our journey isn't just about the technologies we've mastered, but about the clients whose businesses we've empowered along the way.
            </p>
            <Link href="/about-us">
              <Button variant="outline" className="rounded-full border-markovate-blue text-markovate-blue hover:bg-markovate-blue hover:text-white">
                Learn about our journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
