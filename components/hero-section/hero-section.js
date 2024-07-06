import Button from '../button/button';

export default function HeroSection() {
  return (
    <section className='flex lg:flex-col items-center justify-center relative overflow-hidden flex-col-reverse'>
      <div className='flex flex-col items-center w-screen lg:absolute lg:text-white lg:p-0 py-20'>
        <h2 className='text-3xl text-center w-full drop-shadow'>
          Corazonada Tattoo
        </h2>
        <h1 className='text-5xl text-center w-full text-pink-accent mb-5 drop-shadow-white'>
          Estudio privado en Playa del Carmen
        </h1>
        <Button href='/#contacto'>Reserva ahora</Button>
      </div>
      <div className='shadow-xl max-h-dvh w-full'>
        <video
          playsInline
          autoPlay
          loop
          muted
          className='h-full w-full object-cover'
        >
          <source src='/videos/main.mp4' type='video/mp4' />
        </video>
      </div>
    </section>
  );
}
