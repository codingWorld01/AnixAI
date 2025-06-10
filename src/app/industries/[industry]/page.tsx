import { notFound } from "next/navigation";
import { industries, Industry } from "@/data/industries";
import { Metadata } from "next";

// Generate static params for pre-rendering all industry pages
export async function generateStaticParams() {
  return industries.map((industry) => ({
    industry: industry.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { industry: string };
}): Promise<Metadata> {
  // Ensure params.industry is accessed safely
  const industrySlug = params.industry;
  const industry = industries.find((i) => i.slug === industrySlug);

  if (!industry) {
    return {
      title: "Industry Not Found | Anix AI",
      description: "The industry you are looking for does not exist.",
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

// Since this is a Server Component, params should be available directly
export default function IndustryPage({
  params,
}: {
  params: { industry: string };
}) {
  // Access params.industry directly
  const industry: Industry | undefined = industries.find(
    (i) => i.slug === params.industry
  );

  if (!industry) {
    notFound(); // Returns a 404 page if the industry doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {industry.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {industry.description}
          </p>
        </div>
        {/* Add more sections as needed, e.g., use cases, benefits, CTA */}
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