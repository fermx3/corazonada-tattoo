import Image from 'next/image';

export default function QuienesSomosSection() {
  return (
    <section className='min-h-dvh bg-green-secondary p-10 flex items-center justify-center flex-wrap gap-20'>
      <div className='max-w-lg'>
        <Image src='/logo.png' alt='Logo' width={200} height={200} />
      </div>
      <div className='max-w-lg'>
        <h2 className='text-3xl font-bold text-white lg:mb-0 mb-3'>
          ¿Quiénes somos?
        </h2>
        <p className='text-white'>
          Somos un estudio de tatuajes en Playa del Carmen, México. Nos
          especializamos en tatuajes personalizados y de calidad. Nuestro equipo
          de tatuadores profesionales está listo para ayudarte a plasmar tus
          ideas en tu piel.
        </p>
      </div>
    </section>
  );
}
