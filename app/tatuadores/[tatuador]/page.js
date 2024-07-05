import { tatuadoresInvitados } from '@/components/tatuadores-invitados-section/tatuadores-invitados-section';
import Image from 'next/image';

export const dynamicParams = false;

export async function generateStaticParams() {
  return tatuadoresInvitados.map((tatuador) => ({
    tatuador: tatuador.slug,
  }));
}

export default function ArtistPage({ params }) {
  const tatuadorData =
    tatuadoresInvitados.find((tatuador) => tatuador.slug === params.tatuador) ||
    {};

  const { name, desc, image } = tatuadorData;

  return (
    <div className='text-black min-h-dvh max-w-screen-xl m-auto py-20 px-5 flex flex-wrap'>
      <div className='max-w-screen-md'>
        <h1 className='text-6xl mb-6'>{name}</h1>
        <p>{desc}</p>
      </div>
      <Image src={image} alt={name} width={300} height={400} />
    </div>
  );
}
