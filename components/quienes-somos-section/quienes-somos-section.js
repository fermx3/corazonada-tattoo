import Image from 'next/image';

export default function QuienesSomosSection() {
  return (
    <section
      className='min-h-dvh bg-green-secondary p-10 py-20 flex items-center justify-center flex-wrap gap-20'
      id='quienes-somos'
    >
      <div className='max-w-lg rounded-3xl shadow-xl'>
        <Image
          src='https://picsum.photos/300/400'
          alt='Logo'
          width={400}
          height={300}
          className='rounded-3xl'
        />
      </div>
      <div className='max-w-lg text-white'>
        <h3 className='text-2xl mb-3'>¿Quiénes somos?</h3>
        <h2 className='text-6xl font-bold mb-3 text-soft-pink'>
          El mejor estudio privado
        </h2>
        <p>
          Somos un estudio de tatuajes en Playa del Carmen, México. Nos
          especializamos en tatuajes personalizados y de calidad. Nuestro equipo
          de tatuadores profesionales está listo para ayudarte a plasmar tus
          ideas en tu piel.
        </p>
      </div>
    </section>
  );
}
