import { notFound } from "next/navigation";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// Generate static params for pre-rendering all blog post pages
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return {
      title: "Blog Post Not Found | Anix AI",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | Anix AI`,
    description: post.description,
  };
}

export default function BlogPostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post: BlogPost | undefined = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound(); // Returns a 404 page if the blog post doesn't exist
  }

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Blog Post Details */}
        <div className="max-w-4xl mx-auto">
          <Image
            src={post.imageSrc}
            alt={post.alt}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
          <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-foreground mb-8">{post.description}</p>

          {/* Add more content if needed */}
          <div className="prose prose-invert max-w-none mb-12">
            <h2>Key Insights</h2>
            <p>
              This section can include the full content of the blog post, such
              as detailed insights, examples, or additional information. For
              now, it’s a placeholder to demonstrate how you can expand the
              content.
            </p>
          </div>

          {/* Back to Blog Page Button */}
          <div className="text-center">
            <Button
              asChild
              className="bg-gradient rounded-full text-white hover:opacity-90"
            >
              <Link href="/blog">Back to All Blogs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
