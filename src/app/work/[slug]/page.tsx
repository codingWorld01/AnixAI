import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { workProjects, WorkProject } from "@/data/workProjects";

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return workProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = workProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Work Project Not Found | Anix AI",
      description: "The work project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.headline} | Anix AI`,
    description: project.description,
    openGraph: {
      title: project.headline,
      description: project.description,
      images: [
        {
          url: project.imageSrc,
          width: 800,
          height: 400,
          alt: project.imageAlt,
        },
      ],
    },
  };
}

export default async function WorkProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: WorkProject | undefined = workProjects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side: Headline, Description, Tags */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {project.headline}
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* Right Side: Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-lg bg-card text-center"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.headline}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Results and Impact Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Results and Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-lg bg-card text-center"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {result.headline}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-5">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side: Person Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={project.testimonial.personImage}
              alt={project.testimonial.personImageAlt}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Right Side: Quote */}
          <div className="flex flex-col justify-center">
            <blockquote className="text-lg italic text-foreground leading-relaxed mb-6">
              “{project.testimonial.quote}”
            </blockquote>
            <p className="text-sm font-semibold text-foreground">
              {project.testimonial.personName}
            </p>
            <p className="text-sm text-muted-foreground">
              {project.testimonial.personTitle}
            </p>
          </div>
        </div>

        {/* Similar Solutions Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Similar Solutions We Can Build for Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.similarSolutions.map((solution, index) => (
              <div
                key={index}
                className="p-8 border border-border rounded-lg bg-card text-center"
              >
                <div className="relative w-full h-40 mb-6">
                  <Image
                    src={solution.imageSrc}
                    alt={solution.imageAlt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {solution.headline}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 line-clamp-5">
                  {solution.description}
                </p>
                <Link href="/contact-us">
                  <Button className="bg-gradient rounded-full text-white hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
