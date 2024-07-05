import Image from 'next/image';
import Button from '../button/button';
import Card from './card';

export default function CardContent({ image, title, desc, url }) {
  return (
    <Card>
      <div className='w-full h-64 relative mb-3'>
        <Image
          src={image}
          alt={`foto de ${title}`}
          fill
          className='object-cover rounded-t-3xl'
        />
      </div>
      <div className='p-10 pb-7 flex flex-col justify-between gap-5'>
        <h3 className='font-bold text-2xl'>{title}</h3>
        <p className='mb-10'>{desc}</p>
        <Button href={url}>Ver más</Button>
      </div>
    </Card>
  );
}
