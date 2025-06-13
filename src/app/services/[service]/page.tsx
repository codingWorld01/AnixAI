import { notFound } from "next/navigation";
import { services, Service } from "@/data/services";
import { Metadata } from "next";
import ComingSoonLottie from "@/components/animations/lottie-animation";

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
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  // Await params to access the service slug
  const { service: serviceSlug } = await params;
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

// Since this is a Server Component, params should be awaited in newer Next.js versions
export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  // Await params to access the service slug
  const { service: serviceSlug } = await params;
  const service: Service | undefined = services.find(
    (s) => s.slug === serviceSlug
  );

  if (!service) {
    notFound(); // Returns a 404 page if the service doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {service.description}
          </p>
        </div>

        {/* Coming Soon Lottie Animation */}
        <div className="mb-10">
          <ComingSoonLottie />
          <p className="text-center text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            We’re working hard to bring you detailed insights about our {service.title.toLowerCase()} services. Stay tuned for updates!
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/contact-us"
            className="inline-block bg-gradient text-white px-8 py-4 rounded-full hover:opacity-90 text-lg font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}