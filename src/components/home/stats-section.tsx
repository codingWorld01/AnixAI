"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const stats = [
  {
    number: "200+",
    label: "Innovative Solutions Deployed",
  },
  {
    number: "50+",
    label: "Certified AI Engineers & Developers",
  },
  {
    number: "15+",
    label: "Years of Proven Industry Experience",
  },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            const targetNumber = parseInt(stat.number.replace('+', ''));
            const element = numberRefs.current[index];

            if (element) {
              gsap.fromTo(
                element,
                { textContent: 0 },
                {
                  textContent: targetNumber,
                  duration: 2,
                  ease: "power1.out",
                  snap: { textContent: 1 },
                  delay: index * 0.3,
                  onUpdate: function () {
                    element.textContent = `${Math.ceil(Number(this.targets()[0].textContent))}+`;
                  },
                }
              );
            }
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 sm:py-16 overflow-hidden bg-cover bg-center"

    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0"></div>

      <div className="container px-8 relative z-10">
        {/* Heading and Paragraph */}
        <div className="text-left max-w-3xl mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Helping startups to large-sized organizations with tailored solutions since 2020
          </h2>
          <p className="text-muted-foreground text-lg">
            As industry leaders, we bring a deep understanding of AI, Generative AI, Agentic AI, Chatbots, and Cloud technologies. Our skilled team of data scientists, engineers, developers, and MLOps specialists build scalable, end-to-end solutions tailored to your needs. We ensure measurable impacts, prioritize data security, and support you fully from pre-processing data to technology evaluation, delivering solutions that grow with your business.{" "}
            <Link href="/company" className="text-white font-bold hover:underline">
              Learn more →
            </Link>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p
                ref={el => { numberRefs.current[index] = el; }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {stat.number}
              </p>
              <p className="text-base text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}