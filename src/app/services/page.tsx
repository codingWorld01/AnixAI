import ServiceSection from "@/components/service/ServicesSections";
import Link from "next/link";

export const servicesData = [
  {
    title: "Artificial Intelligence",
    description:
      "We harness the power of AI to deliver cutting-edge solutions, including machine learning, natural language processing, and predictive analytics, to drive innovation and efficiency across industries.",
    imageSrc:
      "https://api.deepai.org/job-view-file/abd2a927-1f01-44aa-ac59-d165a6c72c10/outputs/output.jpg",
    imageAlt: "AI technology in action",
    reverse: false,
  },
  {
    title: "Blockchain",
    description:
      "Our blockchain solutions ensure secure, transparent, and decentralized systems, ideal for supply chain management, smart contracts, and cryptocurrency applications.",
    imageSrc:
      "https://api.deepai.org/job-view-file/b471d5e9-d331-4b76-969d-030cb65ae671/outputs/output.jpg",
    imageAlt: "Blockchain network visualization",
    reverse: true,
  },
  {
    title: "Mobile",
    description:
      "We design and develop mobile applications with seamless user experiences, leveraging cross-platform technologies to reach wider audiences efficiently.",
    imageSrc:
      "https://api.deepai.org/job-view-file/222b1fad-b06b-4eb4-9de1-0badc4d6c381/outputs/output.jpg",
    imageAlt: "Mobile app development process",
    reverse: false,
  },
  {
    title: "Cloud",
    description:
      "Our cloud services provide scalable infrastructure, storage, and computing power, enabling businesses to optimize costs and enhance flexibility.",
    imageSrc:
      "https://www.devopsinstitute.com/wp-content/uploads/2021/05/iStock-1277731016-scaled.jpg",
    imageAlt: "Cloud computing infrastructure",
    reverse: true,
  },
  {
    title: "Software",
    description:
      "We build custom software solutions tailored to your business needs, focusing on performance, security, and scalability for long-term success.",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56H_si6dRAa90PtGNzLwiY-Irnctx2m-0Kg&s",
    imageAlt: "Software development team",
    reverse: false,
  },
  {
    title: "Web Design",
    description:
      "Our web design services create visually stunning and user-friendly websites, optimized for performance and tailored to your brand identity.",
    imageSrc:
      "https://www.smartwebsolutions.org/blog/wp-content/uploads/2020/07/web-design.png",
    imageAlt: "Web design mockup",
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="mb-10">
      <section className="bg-black text-white py-16">
        <div className="container px-4 md:px-8 text-center">
          {/* Header Section */}
          <div className="mx-auto">
            <h2 className="text-sm uppercase text-gray-400 tracking-widest mb-2">
              Services
            </h2>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              <span>Empowering Businesses with</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Cutting-Edge Services.
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage our expertise to transform your operations with
              state-of-the-art technology solutions tailored to your needs.
            </p>
            <Link href="/contact-us">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 text-lg font-medium">
                Contact Us →
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-black text-white">
        {servicesData.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            reverse={service.reverse}
          />
        ))}
      </div>
    </div>
  );
}
