import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/data/blogs';
import { FaLongArrowAltLeft } from "react-icons/fa";
import Comments from '@/components/Comments';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPosts({ params }: PageProps) {
  const post = await getPostBySlug(params.slug as string);

  if (!post) {
    return notFound();
  }

  return (
    <main className="bg-white pt-20 px-4 sm:px-6 lg:px-40 pb-12">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:bg-transparent hover:scale-105 transition-transform duration-300 text-black bg-custom3 border border-black rounded-[10px] px-2 py-2 mb-10"
          >
            <FaLongArrowAltLeft />
            Back to Blogs
          </Link>
        </div>
        <article className="prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-left md:text-center mb-5">
            {post.title}
          </h1>
          

          <div>
            <Image src={post.image} alt={post.title} width={1200} height={600} />
          </div>
          <div className="prose prose-lg mt-8 lg:pr-8">
            <p className="font-medium">{post.content.p}</p>
            <h1 className="font-bold text-2xl mt-6">{post.content.h1}</h1>
            <p className="text-zinc-800">{post.content.p1}</p>
            <div
              className="mt-5 text-zinc-700"
              dangerouslySetInnerHTML={{ __html: post.content.List1 }}
            />
            <h2 className="mt-6 font-bold text-2xl">{post.content.h2}</h2>
            <p className="text-zinc-800">{post.content.p2}</p>
            <div
              className="mt-5 text-zinc-700"
              dangerouslySetInnerHTML={{ __html: post.content.List2 }}
            />
           
          </div>
          
        </article>
      </div>
      <Comments />
     
    </main>
  );
}
