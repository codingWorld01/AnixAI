import { notFound } from "next/navigation";
import { resources, Resource } from "@/data/resources";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// Generate static params for pre-rendering all resource pages
export async function generateStaticParams() {
  return resources.map((resource) => ({
    id: resource.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const resource = resources.find((r) => r.id === params.id);

  if (!resource) {
    return {
      title: "Resource Not Found | Anix AI",
      description: "The resource you are looking for does not exist.",
    };
  }

  return {
    title: `${resource.title} | Anix AI`,
    description: resource.description,
  };
}

export default function ResourceDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const resource: Resource | undefined = resources.find(
    (r) => r.id === params.id
  );

  if (!resource) {
    notFound(); // Returns a 404 page if the resource doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Resource Details */}
        <div className="max-w-4xl mx-auto">
          <Image
            src={resource.imageSrc}
            alt={resource.alt}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {resource.title}
          </h1>
          <p className="text-lg text-foreground mb-8">{resource.description}</p>

          {/* Add more details if needed */}
          <div className="prose prose-invert max-w-none mb-12">
            <h2>About This Resource</h2>
            <p>
              This section can include additional details about the resource,
              such as its purpose, target audience, or key takeaways. For now,
              it’s a placeholder to demonstrate how you can expand the content.
            </p>
          </div>

          {/* Download Button */}
          <div className="text-center mb-8">
            <Link href={resource.downloadUrl}>
              <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Download Now
                </span>
              </button>
            </Link>
          </div>

          {/* Back to Resources Page Button */}
          <div className="text-center">
            <Button
              asChild
              className="bg-gradient rounded-full text-white hover:opacity-90"
            >
              <Link href="/resources">Back to All Resources</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
