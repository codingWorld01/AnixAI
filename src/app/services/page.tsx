import ServiceSection from "@/components/service/ServicesSections";
import Link from "next/link";

const capabilities = [
  {
    title: "AI Strategy Consulting",
    description:
      "Defining AI vision, GenAI adoption, regulatory compliance, and transformation roadmaps.",
  },
  {
    title: "GenAI and Multi-Agent Development",
    description:
      "Custom intelligent assistants, agent orchestration, and generative AI solution building.",
  },
  {
    title: "Industry-Specific AI Solutions",
    description:
      "Tailored solutions for BFSI, Wealth, Telecom, Supply Chain, Universities, and Government.",
  },
  {
    title: "AI Integration Services",
    description:
      "Integrating GenAI with CRM, ERP, Client Portals, Data Pipelines, and Support Systems.",
  },
  {
    title: "AI Product Development",
    description:
      "Full-cycle design, development, deployment, and optimization of custom AI platforms.",
  },
];

export const servicesData = [
  {
    title: "Artificial Intelligence",
    description:
      "We harness the power of AI to deliver cutting-edge solutions, including machine learning, natural language processing, and predictive analytics, to drive innovation and efficiency across industries.",
    imageSrc:
      "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg",
    imageAlt: "AI technology in action",
    reverse: false,
  },
  {
    title: "Blockchain",
    description:
      "Our blockchain solutions ensure secure, transparent, and decentralized systems, ideal for supply chain management, smart contracts, and cryptocurrency applications.",
    imageSrc:
      "https://www.cyberbahnit.com/wp-content/uploads/2017/11/blockchain.jpg",
    imageAlt: "Blockchain network visualization",
    reverse: true,
  },
  {
    title: "Mobile",
    description:
      "We design and develop mobile applications with seamless user experiences, leveraging cross-platform technologies to reach wider audiences efficiently.",
    imageSrc:
      "https://www.addevice.io/storage/ckeditor/uploads/images/65f840d316353_mobile.app.development.1920.1080.png",
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
      "https://bairesdev.mo.cloudinary.net/blog/2023/06/Is-Python-good-for-software-development.jpg?tx=w_1920,q_auto",
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

      <section className="py-8 px-4 md:pb-16 md:px-8 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white bg-clip-text text-transparent">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="relative border border-pink-400  p-6 rounded-lg shadow-lg overflow-hidden group"
              >
                <Link href="/contact-us">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-purple-300 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="min-h-screen py-10 bg-black text-white">
        <h1 className="md:max-w-[50%] mx-auto text-3xl md:text-4xl font-bold mb-8 text-white bg-clip-text text-transparent text-center">
          Comprehensive Solutions Across All Technological Frontiers
        </h1>
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
