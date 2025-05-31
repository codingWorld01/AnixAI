"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/home/cta-section";

// Define the shape of a blog post
interface BlogPost {
    id: string;
    imageSrc: string;
    alt: string;
    date: string;
    title: string;
    description: string;
}

// Static data for blog posts
const blogPosts: BlogPost[] = [
    {
        id: "1",
        imageSrc: "https://markovate.com/wp-content/uploads/2025/05/AI-Property-Listing-Generation.webp",
        alt: "AI Trends 2025 Blog Image",
        date: "January 15, 2025",
        title: "Top AI Trends to Watch in 2025",
        description:
            "Explore the emerging AI trends that will shape industries in 2025, from generative AI advancements to ethical AI practices, as predicted by AnixAI’s experts.",
    },
    {
        id: "2",
        imageSrc: "https://markovate.com/wp-content/uploads/2025/05/ERP-Automation-2.0_-Generative-AI-Makes-ERP-Accessible-for-All@3x.webp",
        alt: "Generative AI Case Study Blog Image",
        title: "How Generative AI Transformed a Marketing Agency",
        date: "November 20, 2024",
        description:
            "A case study on how AnixAI’s generative AI solution helped a marketing agency produce 1,000+ pieces of content monthly, boosting engagement by 30%.",
    },
    {
        id: "3",
        imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Diffusion-LLMs-dLLMs_-Introducing-a-New-Generation-of-LLMs-88@3x-1.webp",
        alt: "AI in Healthcare Blog Image",
        title: "The Role of AI in Modern Healthcare",
        date: "September 5, 2024",
        description:
            "Discover how AI is revolutionizing healthcare with predictive analytics, personalized care, and operational efficiency, based on AnixAI’s recent projects.",
    },
    {
        id: "4",
        imageSrc: "https://markovate.com/wp-content/uploads/2025/05/Types-of-AI-Agents@3x-1.webp",
        alt: "Ethics in AI Blog Image",
        title: "Navigating Ethics in AI Development",
        date: "July 10, 2024",
        description:
            "AnixAI discusses the importance of ethical AI development, addressing bias, transparency, and accountability in AI systems.",
    },
    {
        id: "5",
        imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Top-8-Quantum-Computing-Applications-Driving-Change-in-the-Market-1.webp",
        alt: "AI in E-commerce Blog Image",
        date: "March 25, 2025",
        title: "The Impact of AI on E-commerce in 2025",
        description:
            "Learn how AI is transforming e-commerce with intelligent chatbots and personalized shopping experiences, featuring insights from AnixAI’s recent e-commerce chatbot project.",
    },
    {
        id: "6",
        imageSrc: "https://markovate.com/wp-content/uploads/2025/04/AI-Agent-Evaluation_@3x.webp",
        alt: "NLP Advancements Blog Image",
        date: "May 10, 2025",
        title: "Advancements in NLP: What’s New in 2025",
        description:
            "AnixAI explores the latest advancements in natural language processing, including improved sentiment analysis and applications in customer feedback, based on our recent retail project.",
    },
];

export default function BlogPage() {
    return (
        <section className="pb-16 bg-background min-h-screen">
            <div className="container px-4 md:px-8 pt-20 mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                    Our Blog at AnixAI
                </h1>

                {/* Blog Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post) => (
                        <Card
                            key={post.id}
                            className="border-border/40 bg-card/60 overflow-hidden"
                        >
                            <Image
                                src={post.imageSrc}
                                alt={post.alt}
                                width={400}
                                height={200}
                                className="w-full h-60 object-cover"
                            />
                            <CardContent className="p-6">
                                <p className="text-sm text-muted-foreground mb-2">
                                    {post.date}
                                </p>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {post.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>


            <CTASection />

        </section>
    );
}