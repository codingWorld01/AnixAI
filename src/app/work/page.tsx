import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { workProjects, WorkProject } from "@/data/workProjects";

export default async function WorkPage() {
  return (
    <section className="pt-8 sm:pt-20 sm:pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Digital solutions we’ve engineered
        </h1>

        {/* Work Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {workProjects.map((project: WorkProject) => (
            <Link href={`/work/${project.slug}`} key={project.id}>
              <Card className="border-border/40 bg-card/60 overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {project.imageSrc && (
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover transition-all duration-300 hover:brightness-110"
                  />
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {project.headline}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
