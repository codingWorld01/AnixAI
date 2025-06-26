import Link from "next/link";
import Image from "next/image";

interface IndustrySectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function IndustrySection({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: IndustrySectionProps) {
  return (
    <section className="max-sm:mb-10 px-4 md:px-8 flex flex-col md:flex-row items-center justify-evenly">
      <div
        className={`md:w-1/2 mb-8 md:mb-0 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-base md:text-lg text-gray-300 mb-2 sm:mb-8 max-w-xl">
          {description}
        </p>
        <Link href="/ai-use-cases">
          <p className=" text-blue-500 hover:text-purple-500 transition-colors duration-300 inline-block hover:translate-x-2">
            Learn more →
          </p>
        </Link>
      </div>
      <div className={`md:w-1/3 ${reverse ? "md:order-1" : "md:order-2"}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>
    </section>
  );
}
