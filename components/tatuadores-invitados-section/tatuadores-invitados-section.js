import Image from 'next/image';
import TatuadoresInvitadosGrid from './tatuadores-invitados-grid';
import ImageContainer from '../images/image-container';
import TatuadoresInvitadosTexto from './tatuadores-invitados-texto';
import { Suspense } from 'react';
import LoaderWithContainer from '../ui/loader-with-container';

export default function TatuadoresInvitadosSection() {
  return (
    <section className='bg-soft-pink px-5 py-10' id='tatuadores-invitados'>
      <div className='flex items-center justify-center flex-wrap lg:flex-row flex-col-reverse gap-20 my-20 max-w-screen overflow-hidden	'>
        <ImageContainer>
          <Image
            src='/images/home/tatuadores-invitados.png'
            alt=''
            width={400}
            height={300}
            className='rounded-3xl'
          />
        </ImageContainer>
        <TatuadoresInvitadosTexto />
      </div>
      <Suspense fallback={<LoaderWithContainer />}>
        <TatuadoresInvitadosGrid />
      </Suspense>
    </section>
  );
}
