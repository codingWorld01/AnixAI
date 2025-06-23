import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CTASection } from "@/components/home/cta-section";
import { blogPosts, BlogPost } from "@/data/blogPosts";

export default async function BlogPage() {
  return (
    <section className="pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8 pt-20 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          Insights from Anix AI
        </h1>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post: BlogPost) => (
            <Link href={`/blog/${post.slug}`} key={post.id}>
              <Card className="group border-border/40 bg-card/60 overflow-hidden hover:shadow-lg transition-shadow">
                {post.imageSrc && (
                  <div className="relative w-full h-60 overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.alt}
                      fill
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs inline-block rounded-full px-2.5 py-0.5 bg-anixai-blue/10 text-anixai-blue font-medium">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <CTASection />
    </section>
  );
}
