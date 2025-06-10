import { notFound } from "next/navigation";
import { services, Service } from "@/data/services";
import { Metadata } from "next";

// Generate static params for pre-rendering all service pages
export async function generateStaticParams() {
  return services.map((service) => ({
    service: service.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  // Ensure params.service is accessed safely
  const serviceSlug = params.service;
  const service = services.find((s) => s.slug === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found | Anix AI",
      description: "The service you are looking for does not exist.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

// Since this is a Server Component, params should be available directly
export default function ServicePage({ params }: { params: { service: string } }) {
  // Access params.service directly
  const service: Service | undefined = services.find(
    (s) => s.slug === params.service
  );

  if (!service) {
    notFound(); // Returns a 404 page if the service doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {service.description}
          </p>
        </div>
        {/* Add more sections as needed, e.g., benefits, case studies, CTA */}
        <div className="text-center">
          <a
        href="/contact-us"
            className="inline-block bg-gradient text-white px-6 py-3 rounded-full hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}