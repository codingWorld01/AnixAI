import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "The Rise of Agent Economy: How Businesses Can Benefit",
    category: "AI Agents",
    image: "/images/po1.webp",
    link: "/blog/rise-of-agent-economy",
  },
  {
    title: "EqualAI: The AI Model That Transforms Art with Attention",
    category: "Generative AI",
    image: "/images/po2.webp",
    link: "/blog/equal-ai-model",
  },
  {
    title: "Agent Evolution: LLMs The Future of Conversational Assistance",
    category: "LLMs",
    image: "/images/po3.webp",
    link: "/blog/agent-evolution-llms",
  },
  {
    title: "AI Agent Evaluation: How to Measure Efficiency",
    category: "AI Agents",
    image: "/images/po4.png",
    link: "/blog/ai-agent-evaluation",
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Point of view</h2>
          <p className="text-muted-foreground text-lg">
            Our thought leadership provides an inclusive platform for exploring
            insights and technological perspectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Link href={post.link} key={post.title} className="block group">
              <Card className="border-border/40 bg-card/60 overflow-hidden h-full transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs inline-block rounded-full px-2.5 py-0.5 bg-anixai-blue/10 text-anixai-blue font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 transition-colors">
                    {post.title}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <button className=" relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                View all articles
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
