'use client';

import Button from '@/components/button/button';

export default function TatuadorNotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h1 className='text-4xl'>
        Desafortunadamente, no encontramos el tatuador que buscas.
      </h1>
      <Button href='/tatuadores'>Ver todos los tatuadores</Button>
    </div>
  );
}
