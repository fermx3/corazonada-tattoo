import Image from 'next/image';
import TatuadoresInvitadosGrid from './tatuadores-invitados-grid';

export default function TatuadoresInvitadosSection() {
  return (
    <section
      className='min-h-dvh bg-soft-pink px-5 py-10'
      id='tatuadores-invitados'
    >
      <div className='flex items-center justify-center flex-wrap gap-20 my-20'>
        <div className='max-w-lg rounded-3xl shadow-xl'>
          <Image
            src='https://picsum.photos/300/400'
            alt=''
            width={400}
            height={300}
            className='rounded-3xl'
          />
        </div>
        <div className='max-w-lg text-black'>
          <h3 className='text-2xl'>Tatuadores invitados</h3>
          <h2 className='text-6xl mb-3 text-pink-accent'>
            Tatuadores de todo el mundo
          </h2>
          <p>
            Contamos con espacio para que diferentes artistas visiten nuestro
            estudio. Puedes chequear los próximos invitados con anticipación y
            acordar una cita previamente .
          </p>
        </div>
      </div>
      <TatuadoresInvitadosGrid />
    </section>
  );
}
