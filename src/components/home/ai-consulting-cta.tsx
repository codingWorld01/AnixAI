import Link from "next/link";

export default function AIConsultingCTA() {
  return (
    <div className="py-16 bg-background">
      <div className="container px-4 md:px-8 text-center">
        <div className="relative max-w-3xl mx-auto">
          {/* Gradient Background with Blur */}
          <div className="absolute inset-0  gradient-blur -z-1"></div>

          {/* Text Content with Semi-Transparent Background */}
          <div className="relative rounded-lg py-8 px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-lg">
              Looking to incorporate AI in your project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 drop-shadow-md">
              Talk to our AI consultants now!
            </p>
            <Link href="/contact-us">
              <button className="inline-block bg-gradient text-white px-8 py-2 rounded-full hover:opacity-90 text-lg font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
