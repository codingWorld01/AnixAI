import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

export function BlogPreview() {
  // Show only the first 4 blog posts for the preview
  const previewPosts = blogPosts.slice(0, 4);

  return (
    <section className="py-5 sm:py-20 bg-background">
      <div className="container px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Point of View</h2>
          <p className="text-muted-foreground text-lg">
            Our thought leadership provides an inclusive platform for exploring
            insights and technological perspectives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewPosts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="block group"
            >
              <Card className="border-border/40 bg-card/60 overflow-hidden h-full transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.alt}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs inline-block rounded-full px-2.5 py-0.5 bg-anixai-blue/80 text-white font-medium">
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

        <div className="text-center sm:mt-12">
          <Link href="/blog">
            <button className="relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                View All Articles
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
