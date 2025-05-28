import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HomeHero() {
  const logos = [
    {
      src: 'https://ext.same-assets.com/839307342/2938846462.png',
      alt: 'NVMS',
    },
    {
      src: 'https://ext.same-assets.com/839307342/2256489587.png',
      alt: 'Trapeze',
    },
    {
      src: 'https://ext.same-assets.com/839307342/279625952.png',
      alt: 'Synervoz',
    },
    {
      src: 'https://ext.same-assets.com/839307342/1496873731.png',
      alt: 'Nown',
    },
    {
      src: 'https://ext.same-assets.com/839307342/491640340.png',
      alt: 'Landmark',
    },
  ];

  const repeatCount = 6;
  const repeatedLogos = Array(repeatCount).fill(logos).flat();

  return (
    <>
      <section
        className="relative pt-20 pb-16 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/839307342/2437992869.webp')`,
        }}
      >
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple-900/70"></div>

        <div className="container px-4 md:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              We help data driven companies build{' '}
              <span className="text-gradient">measurable Generative AI solutions</span>
            </h1>
            <Link href="/contact-us">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90">
                Contact us <span className="ml-2">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logos and New Section */}
      <div className="mt-16 mb-12 overflow-hidden">
        <p className="text-sm text-muted-foreground text-center mb-8">
          Trusted by the world's most ambitious brands
        </p>
        <div className="relative">
          <div className="flex animate-slide whitespace-nowrap">
            {repeatedLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="flex-shrink-0 mx-4 md:mx-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* New Section */}
        <div className="container px-4 md:px-8 mt-16 lg:mt-[16vh]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl leading-tight mb-6 text-white text-center lg:px-28">
            We empower clients with Generative AI models and agents that drive impactful growth and enhance ROI.
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-gray-300 max-w-3xl mx-auto">
            We assist data-driven companies in enhancing operational efficiency, reducing costs, and creating new revenue streams through the implementation of Generative AI solutions.
          </p>
          <p className="text-base sm:text-lg lg:text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Our AI experts can develop AI solutions from pilot to production within weeks, not years. Our development approach merges clear strategies, deep industry knowledge, and technical expertise to accelerate progress.
          </p>
        </div>
      </div>
    </>
  );
}