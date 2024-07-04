import Image from 'next/image';
import Link from 'next/link';
import Button from '../button/button';
import CardsContainer from '../cards/cards-container';
import Card from '../cards/card';

const tatuadoresInvitados = [
  {
    name: 'Tatuador 1',
    desc: 'Tatuador de renombre invitado este mes especializado en tatuajes de estilo japonés y realismo. No te pierdas la oportunidad de tatuarte con él.',
    url: '#',
    image: 'https://picsum.photos/300/250',
  },
  {
    name: 'Tatuador 2',
    desc: 'Tatuador de renombre invitado este mes especializado en tatuajes de estilo japonés y realismo. No te pierdas la oportunidad de tatuarte con él.',
    url: '#',
    image: 'https://picsum.photos/300/400',
  },
  {
    name: 'Tatuador 3',
    desc: 'Tatuador de renombre invitado este mes especializado en tatuajes de estilo japonés y realismo. No te pierdas la oportunidad de tatuarte con él.',
    url: '#',
    image: 'https://picsum.photos/300/400',
  },
  // {
  //   name: 'Tatuador 4',
  //   desc: 'Tatuador de renombre invitado este mes especializado en tatuajes de estilo japonés y realismo. No te pierdas la oportunidad de tatuarte con él.',
  //   url: '#',
  //   image: 'https://picsum.photos/300/400',
  // },
];

export default function TatuadoresInvitadosSection() {
  return (
    <section className='min-h-dvh bg-soft-pink p-10' id='tatuadores-invitados'>
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
          <h3 className='text-2xl mb-3'>Tatuadores invitados</h3>
          <h2 className='text-6xl font-bold mb-3 text-pink-accent'>
            Tatuadores de todo el mundo
          </h2>
          <p>
            Cada mes, invitamos a un tatuador de renombre para que trabaje en
            nuestro estudio. Así, nuestros clientes pueden disfrutar de la
            experiencia de un tatuaje único y de calidad.
          </p>
        </div>
      </div>
      <CardsContainer>
        {tatuadoresInvitados.map((tatuador, index) => (
          <Card
            key={index}
            title={tatuador.name}
            desc={tatuador.desc}
            image={tatuador.image}
            url={tatuador.url}
          />
        ))}
      </CardsContainer>
    </section>
  );
}
