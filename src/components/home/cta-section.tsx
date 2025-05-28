import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-gray-100/30 z-0" />

      <div className="container relative z-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start improving your efficiency and reducing your operational costs with Generative AI in just a few weeks, not years.
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our expertise in Generative AI helps businesses achieve measurable outcomes quickly
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact-us">
              <Button className="bg-gradient rounded-full text-white px-8 py-6 text-lg font-medium hover:opacity-90 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="outline" className="rounded-full border-white/20 bg-background/40 backdrop-blur-sm text-white px-8 py-6 text-lg font-medium hover:bg-background/60 w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
