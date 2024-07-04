import BigCard from '../cards/big-card';

export default function EstudioPrivadoSection() {
  return (
    <section className='min-h-dvh bg-estudio-privado bg-no-repeat bg-cover flex items-center justify-center'>
      <BigCard>
        <h2 className='text-6xl mb-3 text-pink-accent'>
          ¿Por qué elegir un estudio privado?
        </h2>
        <p className='text-lg'>
          En un estudio privado, la atención es personalizada. No hay
          interrupciones, ni ruido, ni esperas. Te sentirás cómodo y seguro en
          todo momento y podrás disfrutar de una experiencia única.
        </p>
      </BigCard>
    </section>
  );
}
