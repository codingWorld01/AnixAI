import { notFound } from "next/navigation";
import { industries, Industry } from "@/data/industries";
import { Metadata } from "next";
import ComingSoonLottie from "@/components/animations/lottie-animation";

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
  params: Promise<{ industry: string }>;
}): Promise<Metadata> {
  // Await the params to access the industry slug
  const { industry: industrySlug } = await params;
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

// Since this is a Server Component, params should be awaited in newer Next.js versions
export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  // Await the params to access the industry slug
  const { industry: industrySlug } = await params;
  const industry: Industry | undefined = industries.find(
    (i) => i.slug === industrySlug
  );

  if (!industry) {
    notFound(); // Returns a 404 page if the industry doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto ">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {industry.title}
          </h1>
          <p className="text-muted-foreground text-lg">
            {industry.description}
          </p>
        </div>

        {/* Coming Soon Lottie Animation */}
        <div className="mb-10">
          <ComingSoonLottie />
          <p className="text-center text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            We’re working hard to bring you detailed insights for the {industry.title.toLowerCase()} industry. Stay tuned for updates!
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