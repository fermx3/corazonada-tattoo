import PostLikes from '@/components/blog-post/post-likes';
import Button from '@/components/button/button';
import { addLikeToPost, getBlogPost } from '@/lib/actions';
import Image from 'next/image';

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

const handleLike = async (slug) => {
  'use server';
  await addLikeToPost(slug);
};

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);
  return (
    <div className='min-h-dvh m-auto flex flex-col pb-20 bg-white'>
      <div className='md:mx-10 mx-2 py-10 md:pt-16 pt-10 px-5 w-fill'>
        <div className='max-w-screen-lg mx-auto'>
          <h1 className='text-5xl blog-title'>{post.title}</h1>
          <p className='text-sm mb-16'>by {post.author}</p>
        </div>
        <div className='grid grid-cols-responsive-sm gap-10'>
          <div className='col-span-4'>
            <div className='h-96 w-full relative flex items-center justify-center rounded-3xl shadow-md'>
              <Image
                src='https://picsum.photos/1200/800'
                alt=''
                fill
                className='object-cover rounded-3xl'
              />
            </div>
            <div
              className='mt-10 w-fill post-content'
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
          <div>
            <div className='flex flex-wrap justify-between'>
              <PostLikes
                likes={post.likes}
                slug={post.slug}
                handleClick={handleLike}
              />
              <Button href='/blog' buttonType='secondary'>
                Ver otros posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
