"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { BlogPreview } from "@/components/home/blog-preview";
import { resources, Resource } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <section className="bg-background min-h-screen">
      <div className="container px-4 md:px-8 pt-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Learning with Anix AI
        </h1>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <Link href={`/resources/${resource.id}`} key={resource.id}>
              <Card className="group border-border/40 bg-card/60 overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={resource.imageSrc}
                  alt={resource.alt}
                  width={400}
                  height={200}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <BlogPreview />
      </div>
    </section>
  );
}
