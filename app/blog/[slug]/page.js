import PostContent from '@/components/blog-post/post-content';
import PostLikes from '@/components/blog-post/post-likes';
import SideBar from '@/components/blog-post/sidebar';
import Button from '@/components/button/button';
import { addLikeToPost, getBlogPost } from '@/lib/actions';

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

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);
  return (
    <div className='m-auto flex flex-col pb-20 bg-white'>
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
