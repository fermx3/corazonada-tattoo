import { Suspense } from 'react';
import BlogGrid from './blog-grid';
import LoaderWithContainer from '../ui/loader-with-container';

export default function BlogSection() {
  return (
    <section className='bg-green-primary px-5 py-20' id='blog'>
      <h2 className='text-center text-5xl text-white'>Blog</h2>
      <div className='max-w-screen-lg m-auto'>
        <Suspense fallback={<LoaderWithContainer />}>
          <BlogGrid />
        </Suspense>
      </div>
    </section>
  );
}
