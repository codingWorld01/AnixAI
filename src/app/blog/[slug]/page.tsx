import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { blogPosts, BlogPost, Block } from "@/data/blogPosts";

// Generate static params for pre-rendering
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Anix AI",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | Anix AI`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: post.imageSrc,
          width: 800,
          height: 400,
          alt: post.alt,
        },
      ],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post: BlogPost | undefined = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Render content blocks
  const renderBlock = (block: Block) => {
    switch (block.type) {
      case "header":
        const HeaderTag = `h${block.data.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeaderTag
            className={`${
              block.data.level === 2
                ? "text-3xl md:text-4xl font-bold mt-12 mb-6"
                : "text-2xl md:text-3xl font-semibold mt-10 mb-4"
            } text-foreground`}
          >
            {block.data.text}
          </HeaderTag>
        );
      case "paragraph":
        return (
          <p className="text-lg text-foreground leading-relaxed mb-6">
            {block.data.text}
          </p>
        );
      case "image":
        return (
          <div className="my-10">
            <center>
              <Image
                src={block.data.file.url}
                alt={block.data.caption || "Blog image"}
                width={800}
                height={400}
                className="w-1/2 rounded-lg shadow-md"
              />
              {block.data.caption && (
                <p className="text-sm text-muted-foreground mt-3 text-center italic">
                  {block.data.caption}
                </p>
              )}
            </center>
          </div>
        );
      case "list":
        const ListTag = block.data.style === "ordered" ? "ol" : "ul";
        return (
          <ListTag
            className={`${
              block.data.style === "ordered" ? "list-decimal" : "list-disc"
            } pl-6 space-y-2 mb-6`}
          >
            {block.data.items.map((item: string, index: number) => (
              <li key={index} className="text-lg text-foreground">
                {item}
              </li>
            ))}
          </ListTag>
        );
      default:
        return null;
    }
  };

  return (
    <section className="pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Blog Post Details */}
        <div className="max-w-4xl mx-auto">
          <center>
            {post.imageSrc && (
              <Image
                src={post.imageSrc}
                alt={post.alt}
                width={800}
                height={400}
                className="w-1/2 h-1/2 object-cover rounded-lg shadow-lg mb-10"
              />
            )}
          </center>
          <div className="flex items-center gap-4 mb-4">
            <p className="text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <span className="text-sm text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">By {post.author}</p>
            <span className="text-sm text-muted-foreground">•</span>
            <p className="text-sm text-muted-foreground">{post.category}</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-foreground leading-relaxed mb-10">
            {post.description}
          </p>

          {/* Render dynamic content */}
          <div className="prose prose-invert max-w-none mb-12">
            {post.content.blocks.map((block: Block, index: number) => (
              <div key={index}>{renderBlock(block)}</div>
            ))}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

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
