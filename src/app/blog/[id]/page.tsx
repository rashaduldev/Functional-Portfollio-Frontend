import { notFound } from "next/navigation";
import Image from "next/image";
import { getTranslations } from "@/lib/i18n";
import BlogPostInteractive from "@/components/BlogPostInteractive";

type Params = Promise<{ id: string }>;

export default async function BlogDetails({ params }: { params: Params }) {
  const { id } = await params;
  const { t } = await getTranslations();
  const post = t.blog.find((b) => b.id === Number(id));

  if (!post) notFound();

  return (
    <section className="max-w-3xl mx-auto px-4 py-10 bg-surface-page text-text-primary">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-text-muted-3 mb-6">
        {post.category} | {post.date} — Posted by {post.author}
      </p>

      <Image
        width={500}
        height={500}
        src={post.image}
        alt={post.title}
        className="w-full rounded-md mb-6"
      />

      <p className="mb-8 text-text-muted">{post.description}</p>

      <BlogPostInteractive
        postId={post.id}
        postTitle={post.title}
        postDescription={post.description}
      />
    </section>
  );
}
