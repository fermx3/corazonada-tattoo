import Image from 'next/image';

export default function PostContent({ post }) {
  return (
    <div className='md:col-span-4 col-span-2'>
      <div className='h-96 w-full relative flex items-center justify-center rounded-3xl shadow-md'>
        <Image
          src={post.image}
          alt={`
          imagen de ${post.title}
          `}
          fill
          className='object-cover rounded-3xl'
        />
      </div>
      <div
        className='mt-10 max-w-screen-md post-content mx-auto'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
