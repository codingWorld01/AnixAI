import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
  alt: string;
}

interface Value {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Founder & CEO",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2023/10/MicrosoftTeams-image-1.webp",
    alt: "John Doe - Founder & CEO",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Chief Technology Officer",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2023/10/Group-7749.webp",
    alt: "Jane Smith - CTO",
  },
  {
    id: "3",
    name: "Emily Johnson",
    role: "Head of AI Research",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2022/05/Marketing-team-making-a-mark.jpg.webp",
    alt: "Emily Johnson - Head of AI Research",
  },
];

const values: Value[] = [
  {
    id: "1",
    title: "Innovation",
    description:
      "We push the boundaries of technology to deliver cutting-edge solutions.",
    iconSrc: "/images/icon-innovation.png",
    alt: "Innovation Icon",
  },
  {
    id: "2",
    title: "Integrity",
    description:
      "We uphold the highest standards of ethics and transparency in all our work.",
    iconSrc: "/images/icon-integrity.png",
    alt: "Integrity Icon",
  },
  {
    id: "3",
    title: "Collaboration",
    description:
      "We believe in the power of teamwork to achieve extraordinary results.",
    iconSrc: "/images/icon-collaboration.png",
    alt: "Collaboration Icon",
  },
];

export default function CompanyPage() {
  return (
    <section className="pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center h-96 rounded-lg mb-12"
          style={{ backgroundImage: "url('/images/company-hero.jpg')" }}
        >
          <div className="absolute inset-0 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Innovating tomorrow, today
              </h1>
              <p className="text-lg md:text-xl mb-6">
                We drive technological advancements to shape a smarter, more
                efficient future for our clients.
              </p>
              <Link href="/contact-us">
                <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Get in Touch
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mb-16 ">
          <div className="flex flex-col items-center">
            <div className="mb-8">
              <Image
                src="https://markovate.com/wp-content/uploads/2023/10/ezgif-1-0f84422b93-scaled.webp"
                alt="About Markovate"
                width={800}
                height={5000}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="max-w-3xl text-center mb-12">
              <p className="text-muted-foreground">
                We collaborate with forward-thinking leaders, providing
                strategic insights that will reshape tomorrow. Our team of AI
                engineers, developers, and data scientists supports clients
                through their digital transformation, enhancing capabilities
                throughout their organization. With over 200 innovative
                solutions delivered and counting, we are dedicated to empowering
                businesses with cutting-edge technologies for a future-proof
                world.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-6xl font-bold text-foreground mb-2 text-gradient from-purple-600 to-blue-500">
                  50+
                </h3>
                <p className="text-muted-foreground">Our Core Team</p>
              </div>
              <div className="text-center">
                <h3 className="text-6xl font-bold text-foreground mb-2 text-gradient from-purple-600 to-blue-500">
                  200+
                </h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="text-center">
                <h3 className="text-6xl font-bold text-foreground mb-2 text-gradient from-purple-600 to-blue-500">
                  65+
                </h3>
                <p className="text-muted-foreground">AI Solutions</p>
              </div>
              <div className="text-center">
                <h3 className="text-6xl font-bold text-foreground mb-2 text-gradient from-purple-600 to-blue-500">
                  4
                </h3>
                <p className="text-muted-foreground">Locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-lg p-[2px] bg-gradient-to-br from-purple-600 to-black">
              <Card className="border-border/40 bg-card/60 rounded-lg transition-all duration-300 group-hover:border-transparent">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    Make AI practical, secure, and scalable for real-world
                    impact — empowering analysts, advisors, and enterprises with
                    transformative tools for the future of work.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="group relative rounded-lg p-[2px] bg-gradient-to-br from-blue-500 to-black">
              <Card className="border-border/40 bg-card/60 rounded-lg transition-all duration-300 group-hover:border-transparent">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    To be the world's most trusted AI solutions partner for
                    enterprises building the future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Expertise Section (New) */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Expertise across a range of technologies
              </h2>
              <p className="text-muted-foreground mb-6">
                Markovate relies on an advanced suite of technologies like AI,
                ML, Generative AI, Blockchain, Web3, Mobile and more, to drive
                innovation. Incorporating machine learning frameworks, cloud
                computing, and data analytics tools, our tech stack is designed
                for scalability, reliability, and optimum performance. It’s the
                backbone that ensures each software solution we deliver meets
                industry standards and exceeds client expectations.
              </p>
              <Link href="/contact-us">
                <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Contact Us {" >>"}
                  </span>
                </button>
              </Link>
            </div>
            {/* Image Column */}
            <div className="flex justify-center">
              <Image
                src="/images/feilds.png"
                alt="Technology Expertise"
                width={500}
                height={400}
                className="lg:w-3/4 w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Team Leaders Section (Updated with LinkedIn Icons) */}
        <div className="mb-16">
          <h1 className="lg:text-5xl text-4xl mb-6">Team leaders</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Column */}
            <div className="flex justify-center items-center gap-4 lg:gap-8">
              {/* Image 1 with LinkedIn Icon */}
              <div className="relative w-1/2">
                <Image
                  src="https://markovate.com/wp-content/uploads/2023/10/MicrosoftTeams-image-1.webp"
                  alt="Technology Expertise"
                  width={500}
                  height={400}
                  className="w-full lg:h-[30rem] rounded-lg"
                />
                <a
                  href="https://www.linkedin.com/in/dr-aniket-mhala-560abaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.866-3.063-1.867 0-2.154 1.459-2.154 2.966v5.701h-3v-11h2.881v1.516h.041c.401-.761 1.381-1.516 2.841-1.516 3.038 0 3.597 2.001 3.597 4.604v6.396z" />
                  </svg>
                </a>
              </div>

              {/* Image 2 with LinkedIn Icon */}
              <div className="relative w-1/2">
                <Image
                  src="https://markovate.com/wp-content/uploads/2023/10/Group-7749.webp"
                  alt="Technology Expertise"
                  width={500}
                  height={400}
                  className="w-full lg:h-[30rem] rounded-lg"
                />
                <a
                  href="https://www.linkedin.com/in/dr-aniket-mhala-560abaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.866-3.063-1.867 0-2.154 1.459-2.154 2.966v5.701h-3v-11h2.881v1.516h.041c.401-.761 1.381-1.516 2.841-1.516 3.038 0 3.597 2.001 3.597 4.604v6.396z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Text Column */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient from-purple-600 to-blue-500">
                About Aniket Mhala
              </h2>
              <p className="text-muted-foreground lg:text-xl mb-6">
                Dr. Aniket Mhala, a recognized AI Thought Leader with over 28
                years of distinguished leadership in the IT industry, brings a
                wealth of expertise in driving digital transformation and
                strategic innovation. As the founder and driving force behind
                Anix AI, he is deeply committed to delivering exceptional
                customer success, ensuring robust security, and pioneering
                practical, forward-looking AI solutions that empower businesses
                across industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
