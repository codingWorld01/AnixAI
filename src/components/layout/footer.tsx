import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "About Us",
    links: [
      { label: "Overview", href: "/about-us" },
      { label: "Team", href: "/team" },
      { label: "Customers", href: "/customers" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Artificial Intelligence",
    links: [
      { label: "AI Development Services", href: "/ai-development-services" },
      { label: "Generative AI Development", href: "/generative-ai-development-company" },
      { label: "AI Chatbot Development", href: "/ai-chatbot-development-services" },
      { label: "AI Consulting Services", href: "/ai-consulting-services" },
      { label: "Machine Learning Services", href: "/machine-learning-development-services" },
      { label: "AI POC Development", href: "/ai-poc-development" },
      { label: "MLOps Consulting Services", href: "/mlops-consulting-services" },
      { label: "Computer Vision Development", href: "/computer-vision-development-services" },
      { label: "AI Automation Services", href: "/ai-automation-services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Enterprise AI Development", href: "/enterprise-ai-development-company" },
      { label: "Enterprise Generative AI", href: "/enterprise-generative-ai-development" },
      { label: "Generative AI Consulting", href: "/generative-ai-consulting-company" },
      { label: "AI Agents Development", href: "/ai-agents-development-company" },
      { label: "Generative AI Integration", href: "/generative-ai-integration-services" },
      { label: "LLM Development Services", href: "/llm-development-services" },
      { label: "Adaptive AI Development", href: "/adaptive-ai-development-services" },
      { label: "ChatGPT Development", href: "/chatgpt-developers" },
      { label: "ChatGPT Integration", href: "/chatgpt-integration-service" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Healthcare", href: "/healthcare-ai-development" },
      { label: "Retail", href: "/retail-ai-development" },
      { label: "Fintech", href: "/fintech-ai-development" },
      { label: "SaaS", href: "/saas-ai-development" },
      { label: "Travel", href: "/travel-ai-development" },
      { label: "Fitness", href: "/fitness-ai-development" },
      { label: "Insurance", href: "/insurance-ai-development" },
      { label: "Construction", href: "/construction-ai-development" },
      { label: "Manufacturing", href: "/manufacturing-ai-development" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Careers", href: "/careers" },
      { label: "Support", href: "/support" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/markovate" },
  { name: "Twitter", href: "https://twitter.com/markovate" },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-12 pb-6">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0 md:max-w-[300px]">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://ext.same-assets.com/839307342/762043445.webp"
                alt="Markovate Logo"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              A Generative AI company helping businesses enhance efficiency & productivity with cutting-edge AI solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-markovate-blue"
                >
                  {social.name === "LinkedIn" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title} className="mb-6">
                <h3 className="text-sm font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-xs text-muted-foreground hover:text-markovate-blue transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            Markovate Inc. | Copyright 2024 | Privacy Policy | Sitemap
          </p>
          <div className="flex space-x-4">
            <button className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
            </button>
            <button className="text-muted-foreground hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6M9 9l6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
