import { notFound } from "next/navigation";
import { resources, Resource } from "@/data/resources";
import { Metadata } from "next";
import ResourceDetail from "@/components/ResourceDetails/resource-detail";

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
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params; // Await params to access id
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    return {
      title: "Resource Not Found | Anix AI",
      description: "The resource you are looking for does not exist.",
    };
  }

  return {
    title: `${resource.title} | Anix AI`,
    description: resource.description,
    openGraph: {
      title: resource.title,
      description: resource.description,
      images: [
        {
          url: resource.imageSrc,
          width: 800,
          height: 400,
          alt: resource.alt,
        },
      ],
    },
  };
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await params to access id
  const resource: Resource | undefined = resources.find((r) => r.id === id);

  if (!resource) {
    notFound(); // Returns a 404 page if the resource doesn't exist
  }

  return <ResourceDetail resource={resource} />;
}