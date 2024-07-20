'use client';

import Button from '@/components/button/button';

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h1 className='text-4xl'>Página no encontrada</h1>
      <Button href='/'>Volver al inicio</Button>
    </div>
  );
}
