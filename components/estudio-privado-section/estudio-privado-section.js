import BigCard from '../cards/big-card';

export default function EstudioPrivadoSection() {
  return (
    <section className='min-h-dvh bg-estudio-privado bg-no-repeat bg-cover flex items-center justify-center'>
      <BigCard>
        <h2 className='text-6xl mb-3 text-pink-accent'>
          ¿Qué es un estudio privado?
        </h2>
        <p className='text-lg'>
          Es un estudio que se maneja mediante citas previamente acordadas, es
          un ambiente privado con un espacio para que el cliente y el
          profesional puedan construir el diseño que quieran plasmar, un espacio
          seguro en el cual el cliente y el tatuador pueden dedicarle el tiempo
          necesario a cada pieza.
        </p>
      </BigCard>
    </section>
  );
}
