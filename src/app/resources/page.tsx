"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BlogPreview } from "@/components/home/blog-preview";

interface Resource {
    id: string;
    imageSrc: string;
    alt: string;
    title: string;
    description: string;
    downloadUrl: string;
}

const resources: Resource[] = [
    {
        id: "1",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/04/resource-ebook-img.webp",
        alt: "eBook Cover: Navigating Custom AI Development",
        title: "Navigating Custom AI Development vs. Pre-Existing AI Solutions: A Comprehensive Guide for Businesses",
        description: "Crafting an Effective AI Strategy",
        downloadUrl: "/downloads/ebook-navigating-custom-ai.pdf",
    },
    {
        id: "2",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/04/Crafting-an-Effective-AI-Strategy_.webp",
        alt: "Handbook Cover: AI Strategy Ethics and Security",
        title: "AI Strategy: Prioritizing Ethics and Security for Growth",
        description:
            "A detailed handbook on building AI strategies that prioritize ethics and security, ensuring sustainable business growth while addressing key challenges.",
        downloadUrl: "/downloads/handbook-ai-strategy-ethics-security.pdf",
    },
    {
        id: "3",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/04/Maximizing-Business-Efficiency-with-AI-Chatbots-in-ERP-systems-banner.webp",
        alt: "Infographic: AI Chatbots in ERP Systems",
        title: "Maximizing Business Efficiency with AI Chatbots in ERP Systems",
        description:
            "An insightful infographic illustrating how AI chatbots integrated with ERP systems can streamline operations and enhance productivity for businesses.",
        downloadUrl: "/downloads/infographic-ai-chatbots-erp.pdf",
    },
];

export default function ResourcesPage() {
    return (
        <section className="bg-background min-h-screen">
            <div className="container px-4 md:px-8 pt-20">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                    Resources at AnixAI
                </h1>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {resources.map((resource) => (
                        <Card
                            key={resource.id}
                            className="border-border/40 bg-card/60 overflow-hidden"
                        >
                            <Image
                                src={resource.imageSrc}
                                alt={resource.alt}
                                width={400}
                                height={200}
                                className="w-full h-60 object-cover"
                            />
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    {resource.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {resource.description}
                                </p>
                                <Button asChild className="border border-gradient rounded-full text-white hover:opacity-90">
                                    <Link href={resource.downloadUrl}>
                                        Download Now
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <BlogPreview />
            </div>
        </section>
    );
}