import IndustrySection from "@/components/Industry/IndustrySection";
import Link from "next/link";

export const industriesData = [
  {
    title: "Healthcare",
    description:
      "We develop solutions that ensure HIPAA compliance, offering secure data transmission and robust protection. From predictive analytics for early disease detection to personalized treatment recommendations, these solutions leverage AI to optimize care delivery.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/healthcare-industrynew.webp",
    imageAlt: "Healthcare professionals",
    reverse: false,
  },
  {
    title: "Retail",
    description:
      "Our expertise lies in harnessing advanced data analytics to customize customers' buying cycles, ensuring their purchasing journey is more personalized. By employing AI-driven recommendation engines, we analyze customer behavior, purchase history, and preferences.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/retail-industrynew.webp",
    imageAlt: "Retail customer",
    reverse: true,
  },
  {
    title: "Fintech",
    description:
      "Our dedicated team is committed to crafting solutions that adhere to rigorous regulatory standards for top-tier data protection. We harness the power of AI for advanced fraud detection, real-time risk assessment, and personalized financial advisory services.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/fintech-industrynew.webp",
    imageAlt: "Fintech professional",
    reverse: false,
  },
  {
    title: "SaaS",
    description:
      "Utilizing intelligent automation, we build SaaS solutions that optimize operations, drive user engagement, and unlock new revenue streams. Leveraging ML and NLP, we empower businesses to extract actionable insights and automate repetitive tasks.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/saas-industrynew.webp",
    imageAlt: "SaaS professional",
    reverse: true,
  },
  {
    title: "Travel",
    description:
      "We build digital solutions that redefine the travel industry landscape, streamlining booking processes, enhancing itinerary management, monitoring market demand fluctuations, and tracking competitor pricing in real-time for travel businesses worldwide.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/travel-industrynew.webp",
    imageAlt: "Travel individual",
    reverse: false,
  },
  {
    title: "Fitness",
    description:
      "Our comprehensive suite of digital solutions encompasses everything from gym management software to AI-driven virtual coaching platforms, wearable fitness technology integration, and member engagement tools.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/fitness-industrynew.webp",
    imageAlt: "Fitness individual",
    reverse: true,
  },
  {
    title: "Manufacturing",
    description:
      "Our team collaborates with data-driven manufacturers to implement AI solutions at every level of their operations, from predictive maintenance and quality assurance to automated price forecasting and supply chain optimization.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/insurance-industrynew.webp",
    imageAlt: "Manufacturing workers",
    reverse: false,
  },
  {
    title: "Construction",
    description:
      "We build construction AI solutions that address specific industry needs, such as real-time monitoring, environmental compliance, and material management, setting the foundation for measurable improvements across every phase of construction.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/construction-ai-development-image.webp",
    imageAlt: "Construction workers",
    reverse: true,
  },
  {
    title: "Insurance",
    description:
      "We help insurers harness AI to streamline claims, enhance customer experiences, and boost fraud detection. Our team builds customized solutions to address key insurance challenges, from underwriting and risk management to predictive analytics and claims automation.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/manufacturing-ai-development-image.webp",
    imageAlt: "Insurance meeting",
    reverse: false,
  },
  {
    title: "Food",
    description:
      "We help you enhance food production and customer experience with AI solutions. From demand forecasting and inventory management to personalized recommendations and quality control, our AI-driven innovations optimize operations and drive smarter decision-making.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/food-industry-page-img.webp",
    imageAlt: "Food industry worker",
    reverse: true,
  },
];


export default function IndustriesPage() {
  return (
    <div className="mb-10">
      <section className="bg-black text-white py-5 sm:py-16">
        <div className="container px-4 md:px-8 text-center">
          {/* Header Section */}
          <div className="mx-auto">
            <h2 className="text-sm uppercase text-gray-400 tracking-widest mb-2">
              Industries
            </h2>
            <h1 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
              <span>Transforming Industries through </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Innovative digital solutions.
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-4 sm:mb-8 max-w-2xl mx-auto">
              With our expertise and innovative approach, we help businesses
              achieve enhanced operational efficiency, streamlined workflow and
              reduced costs.
            </p>
            <Link href="/contact-us">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-1 sm:py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 text-lg font-medium">
                Contact Us →
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="max-sm:mt-4 min-h-screen bg-black text-white">
        {industriesData.map((industry, index) => (
          <IndustrySection
            key={index}
            title={industry.title}
            description={industry.description}
            imageSrc={industry.imageSrc}
            imageAlt={industry.imageAlt}
            reverse={industry.reverse}
          />
        ))}
      </div>
    </div>
  );
}
