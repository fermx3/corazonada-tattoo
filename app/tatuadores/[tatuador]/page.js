import Button from '@/components/button/button';
import Card from '@/components/cards/card';
import { getTatuadoresInvitados } from '@/lib/actions';
import Image from 'next/image';

const tatuadoresInvitados = await getTatuadoresInvitados();

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
    <div className='text-black min-h-dvh m-auto flex flex-col pb-20'>
      <div className='h-72 w-full relative'>
        <Image
          src='https://picsum.photos/1200/800'
          alt=''
          fill
          className='object-cover'
        />
      </div>
      <div className='-mt-40 relative max-w-screen-xl grid grid-cols-responsive justify-items-center gap-8 p-5 m-auto'>
        <div className='w-80'>
          <Card>
            <div className='relative w-80 h-52'>
              <Image
                src={image}
                alt={name}
                fill
                className='object-cover rounded-t-3xl'
              />
            </div>
            <div className='w-80 p-5'>
              <h1 className='text-3xl mb-3'>{name}</h1>
              <p>{desc}</p>
            </div>
          </Card>
          <div className='mt-10 flex flex-wrap justify-center'>
            <Button href='/#contacto' className='mt-5'>
              Agenda tu cita
            </Button>
            <Button href='/tatuadores' className='mt-5' buttonType='secondary'>
              Ver otros tatuadores
            </Button>
          </div>
        </div>
        <div className='lg:mt-48 mt-0 col-span-2'>
          <div className='p-5'>
            <div className='flex flex-wrap gap-5 justify-center'>
              <div className='h-52 w-52 bg-gray-300 rounded-3xl'></div>
              <div className='h-52 w-52 bg-gray-300 rounded-3xl'></div>
              <div className='h-52 w-52 bg-gray-300 rounded-3xl'></div>
              <div className='h-52 w-52 bg-gray-300 rounded-3xl'></div>
              <div className='h-52 w-52 bg-gray-300 rounded-3xl'></div>
              <div className='h-52 w-52 bg-gray-300 rounded-3xl'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
