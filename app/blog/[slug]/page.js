import Button from '@/components/button/button';
import { addLikeToPost, getBlogPost } from '@/lib/actions';
import { revalidatePath } from 'next/cache';
import Image from 'next/image';

const handleLike = async (slug) => {
  'use server';
  await addLikeToPost(slug);
  revalidatePath(`/blog/${slug}`);
};

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug);
  return (
    <div className='text-black min-h-dvh m-auto flex flex-col pb-20 bg-green-primary'>
      <div className='max-w-screen-lg mx-auto py-10 pt-16 px-5 text-white w-fill'>
        <h1 className='text-5xl'>{post.title}</h1>
        <p className='text-sm mb-16'>by {post.author}</p>
        <div className='h-72 w-full relative flex items-center justify-center'>
          <Image
            src='https://picsum.photos/1200/800'
            alt=''
            fill
            className='object-cover'
          />
        </div>
        <div
          className='mt-10 w-fill post-content'
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <div className='mt-20 flex flex-wrap justify-between'>
          {/* <div className='flex gap-3 items-center'>
            <Button handleClick={handleLike(post.slug)}>
              <Image
                src='/icons/heart.svg'
                alt='heart'
                width={20}
                height={20}
              />
            </Button>
            <p>{post.likes} likes</p>
          </div> */}
          <Button href='/blog' buttonType='secondary'>
            Ver otros posts
          </Button>
        </div>
      </div>
    </div>
  );
}
