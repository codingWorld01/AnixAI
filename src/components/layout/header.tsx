"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const servicesData = [
  {
    title: "Generative AI",
    href: "/services/generative-ai",
    children: [
      {
        title: "Generative AI Development",
        href: "/generative-ai-development-company",
      },
      {
        title: "Generative AI Consulting",
        href: "/generative-ai-consulting-company",
      },
      {
        title: "Enterprise Generative AI",
        href: "/enterprise-generative-ai-development",
      },
      { title: "AI Agent Development", href: "/ai-agents-development-company" },
      { title: "LLM Development", href: "/llm-development-services" },
      {
        title: "Generative AI Integration",
        href: "/generative-ai-integration-services",
      },
      {
        title: "Adaptive AI Development",
        href: "/adaptive-ai-development-services",
      },
      { title: "ChatGPT Developers", href: "/chatgpt-developers" },
      { title: "Hire Prompt Engineers", href: "/hire-prompt-engineers" },
      {
        title: "ChatGPT Integration Services",
        href: "/chatgpt-integration-service",
      },
    ],
  },
  {
    title: "AI Development",
    href: "/services/ai-development",
    children: [
      { title: "AI Development Services", href: "/ai-development-services" },
      {
        title: "Enterprise AI Development",
        href: "/enterprise-ai-development-company",
      },
      { title: "AI Consulting Services", href: "/ai-consulting-services" },
      {
        title: "AI Chatbot Development",
        href: "/ai-chatbot-development-services",
      },
      { title: "AI POC Development", href: "/ai-poc-development" },
      { title: "AI Automation Services", href: "/ai-automation-services" },
      { title: "AI Engineers", href: "/hire-ai-engineers" },
      {
        title: "Enterprise AI Chatbot",
        href: "/enterprise-ai-chatbot-development",
      },
      {
        title: "Computer Vision Development",
        href: "/computer-vision-development-services",
      },
      {
        title: "Conversational AI Development",
        href: "/conversational-ai-development-services",
      },
    ],
  },
  {
    title: "Data Engineering",
    href: "/services/data-engineering",
    children: [
      { title: "Data Engineering", href: "/data-engineering-services" },
      { title: "ML Model Engineering", href: "/ml-model-engineering-services" },
      {
        title: "ML Development",
        href: "/machine-learning-development-services",
      },
      {
        title: "MLOps Consulting Services",
        href: "/mlops-consulting-services",
      },
      { title: "Cloud Services", href: "/cloud-application-development" },
    ],
  },
];

const industriesData = [
  { title: "Healthcare", href: "/healthcare-ai-development" },
  { title: "Retail", href: "/retail-ai-development" },
  { title: "Fintech", href: "/fintech-ai-development" },
  { title: "SaaS", href: "/saas-ai-development" },
  { title: "Travel", href: "/travel-ai-development" },
  { title: "Fitness", href: "/fitness-ai-development" },
  { title: "Insurance", href: "/insurance-ai-development" },
  { title: "Construction", href: "/construction-ai-development" },
  { title: "Manufacturing", href: "/manufacturing-ai-development" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = React.useState(false);
  const [openServiceCategory, setOpenServiceCategory] = React.useState<
    string | null
  >(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset dropdown states when closing the mobile menu
    if (isMobileMenuOpen) {
      setIsServicesOpen(false);
      setIsIndustriesOpen(false);
      setOpenServiceCategory(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setOpenServiceCategory(null);
  };

  const toggleServiceCategory = (category: string) => {
    setOpenServiceCategory(openServiceCategory === category ? null : category);
  };

  return (
    <header className="w-full bg-background sticky top-0 z-50 border-b border-border/40">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <Image
              src="/images/anixlogo.png"
              alt="AnixAI Logo"
              width={150}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            <ServicesNav />
            <IndustriesNav />
            <Link
              href="/work"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
            >
              Work
            </Link>
            <Link
              href="/company"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
            >
              Company
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
            >
              Resources
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Link href="/contact-us" className="hidden md:inline-flex">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white px-6 hover:opacity-90">
              Contact Us
            </Button>
          </Link>
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/40 absolute top-16 left-0 w-full z-40">
          <nav className="flex flex-col items-start p-4 space-y-4">
            {/* Services Dropdown */}
            <div className="w-full">
              <button
                className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors w-full text-left flex justify-between items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {servicesData.map((section) => (
                    <div key={section.title} className="space-y-1">
                      <button
                        className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors w-full text-left flex justify-between items-center"
                        onClick={() => toggleServiceCategory(section.title)}
                      >
                        <span>{section.title}</span>
                        <svg
                          className={`w-4 h-4 transform transition-transform ${
                            openServiceCategory === section.title
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openServiceCategory === section.title && (
                        <ul className="pl-4 space-y-1">
                          <li>
                            <Link
                              href={section.href}
                              className="block text-sm text-foreground/80 hover:text-anixai-blue"
                              onClick={closeMobileMenu}
                            >
                              {section.title} Overview
                            </Link>
                          </li>
                          {section.children.map((item) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                className="block text-sm text-foreground/80 hover:text-anixai-blue"
                                onClick={closeMobileMenu}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="w-full">
              <button
                className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors w-full text-left flex justify-between items-center"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                Industries
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isIndustriesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isIndustriesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {industriesData.map((industry) => (
                    <Link
                      key={industry.title}
                      href={industry.href}
                      className="block text-sm text-foreground/80 hover:text-anixai-blue"
                      onClick={closeMobileMenu}
                    >
                      {industry.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link
              href="/work"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Work
            </Link>
            <Link
              href="/company"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Company
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
            <Link href="/contact-us" onClick={closeMobileMenu}>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white px-6 hover:opacity-90 w-full">
                Contact Us
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const ServicesNav = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-transparent hover:text-anixai-blue">
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-3 gap-3 md:w-[600px] lg:w-[800px] pl-5 pb-5">
            {servicesData.map((section) => (
              <div key={section.title} className="space-y-2 mt-4">
                <h3 className="font-medium text-blue-500">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.children.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block text-sm py-1 text-foreground/80 hover:text-anixai-blue"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

const IndustriesNav = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-transparent hover:text-anixai-blue">
          Industries
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid grid-cols-3 gap-3 p-4 md:w-[600px]">
            {industriesData.map((industry) => (
              <NavigationMenuLink key={industry.title} asChild>
                <Link
                  href={industry.href}
                  className="block text-sm py-1 text-foreground/80 hover:text-anixai-blue"
                >
                  {industry.title}
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
