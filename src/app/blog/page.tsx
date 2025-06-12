"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/home/cta-section";
import { blogPosts, BlogPost } from "@/data/blogPosts";

export default function BlogPage() {
  return (
    <section className="pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8 pt-20 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Our Blog at Anix AI
        </h1>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <Card className="border-border/40 bg-card/60 overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={post.imageSrc}
                  alt={post.alt}
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover"
                />
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
    </section>
  );
}