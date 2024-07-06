import BlogGrid from './blog-grid';

export default function BlogSection() {
  return (
    <section className='min-h-dvh bg-green-primary px-5 py-20' id='blog'>
      <h2 className='text-center text-5xl text-white'>Blog</h2>
      <div className='max-w-screen-lg m-auto'>
        <BlogGrid />
      </div>
    </section>
  );
}
