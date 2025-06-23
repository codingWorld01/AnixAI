import { notFound } from "next/navigation";
import { industries, Industry } from "@/data/industries";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQItem from "@/components/FAQItems/FAQItem";

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

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry: industrySlug } = await params;
  const industry: Industry | undefined = industries.find(
    (i) => i.slug === industrySlug
  );

  if (!industry) {
    notFound();
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            {industry.title} Industry Solutions
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            {industry.description}
          </p>
        </div>

        {/* Hero Image */}
        <center>
          <div className="relative w-full md:w-1/2 h-80 md:h-[30rem] mb-16 rounded-xl overflow-hidden shadow-xl">
            <Image
              src={industry.imageSrc}
              alt={industry.imageAlt}
              fill
              className=""
              priority
            />
          </div>
        </center>

        {/* Detailed Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            Our Approach
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {industry.detailedDescription}
          </p>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-200 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-400">
            Frequently Asked Questions
          </h2>
          <div className="bg-gray-800 rounded-lg shadow-md p-6">
            {industry.faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/contact-us"
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 text-lg font-semibold shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
