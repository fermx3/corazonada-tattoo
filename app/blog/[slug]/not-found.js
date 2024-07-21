'use client';

import Button from '@/components/button/button';

export default function PostNotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h1 className='text-4xl'>
        Desafortunadamente, no encontramos el post que buscas.
      </h1>
      <Button href='/blog'>Ver todos los posts</Button>
    </div>
  );
}
