"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ServicesSection } from "@/components/home/services-section";
import { projects, Project } from "@/data/projects";

export default function WorkPage() {
  return (
    <section className="pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8 pt-20">
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Work at Anix AI
          </h1>
          <p>Digital solutions we’ve engineered</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link href={`/work/${project.id}`} key={project.id}>
              <Card className="border-border/40 bg-card/60 overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={project.imageSrc}
                  alt={project.alt}
                  width={400}
                  height={400}
                  className="w-full h-98 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.subject}</p>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <ServicesSection />

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Button asChild className="bg-gradient rounded-full text-white hover:opacity-90">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}