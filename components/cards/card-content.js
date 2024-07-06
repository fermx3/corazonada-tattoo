import Image from 'next/image';
import Button from '../button/button';
import Card from './card';

export default function CardContent({ image, title, desc, url }) {
  return (
    <Card>
      <div className='w-full h-56 relative mb-3'>
        <Image
          src={image}
          alt={`foto de ${title}`}
          fill
          className='object-cover rounded-3xl p-2'
        />
      </div>
      <div className='px-7 pb-5 flex flex-col flex-none gap-5'>
        <p className='font-bold text-2xl p-0'>{title}</p>
        <p>{desc}</p>
        <Button href={url}>Ver más</Button>
      </div>
    </Card>
  );
}
