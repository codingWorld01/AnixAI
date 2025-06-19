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
        href: "/services/generative-ai-development",
      },
      {
        title: "Generative AI Consulting",
        href: "/services/generative-ai-consulting",
      },
      {
        title: "Enterprise Generative AI",
        href: "/services/enterprise-generative-ai",
      },
      { title: "AI Agent Development", href: "/services/ai-agent-development" },
      { title: "LLM Development", href: "/services/llm-development" },
      {
        title: "Generative AI Integration",
        href: "/services/generative-ai-integration",
      },
      {
        title: "Adaptive AI Development",
        href: "/services/adaptive-ai-development",
      },
      { title: "ChatGPT Developers", href: "/services/chatgpt-developers" },
      {
        title: "Hire Prompt Engineers",
        href: "/services/hire-prompt-engineers",
      },
      {
        title: "ChatGPT Integration Services",
        href: "/services/chatgpt-integration-services",
      },
    ],
  },
  {
    title: "AI Development",
    href: "/services/ai-development",
    children: [
      { title: "AI Development Services", href: "/services/ai-development" },
      {
        title: "Enterprise AI Development",
        href: "/services/enterprise-ai-development",
      },
      {
        title: "AI Consulting Services",
        href: "/services/ai-consulting-services",
      },
      {
        title: "AI Chatbot Development",
        href: "/services/ai-chatbot-development",
      },
      { title: "AI POC Development", href: "/services/ai-poc-development" },
      {
        title: "AI Automation Services",
        href: "/services/ai-automation-services",
      },
      { title: "AI Engineers", href: "/services/ai-engineers" },
      {
        title: "Enterprise AI Chatbot",
        href: "/services/enterprise-ai-chatbot",
      },
      {
        title: "Computer Vision Development",
        href: "/services/computer-vision-development",
      },
      {
        title: "Conversational AI Development",
        href: "/services/conversational-ai-development",
      },
    ],
  },
  {
    title: "Data Engineering",
    href: "/services/data-engineering",
    children: [
      { title: "Data Engineering", href: "/services/data-engineering" },
      { title: "ML Model Engineering", href: "/services/ml-model-engineering" },
      {
        title: "ML Development",
        href: "/services/ml-development",
      },
      {
        title: "MLOps Consulting Services",
        href: "/services/mlops-consulting-services",
      },
      { title: "Cloud Services", href: "/services/cloud-services" },
    ],
  },
];

const industriesData = [
  { title: "Healthcare", href: "/industries/healthcare" },
  { title: "Retail", href: "/industries/retail" },
  { title: "Fintech", href: "/industries/fintech" },
  { title: "SaaS", href: "/industries/saas" },
  { title: "Travel", href: "/industries/travel" },
  { title: "Fitness", href: "/industries/fitness" },
  { title: "Insurance", href: "/industries/insurance" },
  { title: "Construction", href: "/industries/construction" },
  { title: "Manufacturing", href: "/industries/manufacturing" },
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
          <nav className="md:ml-4 hidden md:flex items-center space-x-4">
            {/* <ServicesNav /> */}
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-anixai-blue transition-colors"
            >
              Services
            </Link>
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
            <Link href="/contact" onClick={closeMobileMenu}>
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
                <h3 className="font-medium text-blue-500">{section.title}</h3>
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
