import { notFound } from "next/navigation";
import { projects, Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// Generate static params for pre-rendering all project pages
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: "Project Not Found | Anix AI",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${project.title} | Anix AI`,
    description: project.description,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project: Project | undefined = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // Returns a 404 page if the project doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Project Details */}
        <div className="max-w-4xl mx-auto">
          <Image
            src={project.imageSrc}
            alt={project.alt}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-6">
            {project.subject}
          </p>
          <p className="text-lg text-foreground mb-8">{project.description}</p>

          {/* Add more details if needed */}
          <div className="prose prose-invert max-w-none mb-12">
            <h2>Project Impact</h2>
            <p>
              This section can include more detailed information about the
              project, such as the technologies used, challenges faced, and the
              overall impact on the client’s business. For now, it’s a
              placeholder to demonstrate how you can expand the content.
            </p>
          </div>

          {/* Back to Work Page Button */}
          <div className="text-center">
            <Button
              asChild
              className="bg-gradient rounded-full text-white hover:opacity-90"
            >
              <Link href="/work">Back to All Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
