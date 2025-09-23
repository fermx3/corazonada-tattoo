import PostContent from '@/components/blog-post/post-content';
import SideBar from '@/components/blog-post/sidebar';
import { getBlogPost, getBlogPosts } from '@/lib/actions';

// const blogPosts = await getBlogPosts();

export async function generateMetadata({ params }, parent) {
  // read route params
  const post = params.slug;
  const postData = await getBlogPost(post);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${(await parent).title?.absolute} | Blog | ${postData.title}`,
    description: postData.excerpt,
    openGraph: {
      images: [`/images/blog/${post}.jpg`, ...previousImages],
    },
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  const paths = blogPosts.map((post) => ({
    slug: post.slug,
  }));
  return paths;
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
    return;
  }

  return (
    <div className='m-auto flex flex-col pb-20 bg-white w-screen'>
      <div className='md:mx-10 mx-2 py-10 md:pt-16 pt-10 px-5 w-fill'>
        <div className='max-w-screen-lg mx-auto'>
          <h1 className='text-5xl blog-title'>{post.title}</h1>
          <p className='text-sm mb-16'>by {post.author}</p>
        </div>
        <div className='grid grid-cols-responsive-sm gap-10'>
          <PostContent post={post} />
          <SideBar post={post} postSlug={params.slug} />
        </div>
      </div>
    </div>
  );
}
