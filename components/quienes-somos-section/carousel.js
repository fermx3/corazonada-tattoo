'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import Image from 'next/image';

export default function Carousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay(),
  ]);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex p-10'>
        {images.map((image, index) => (
          <div
            className='min-w-0 flex-[0_0_100%] max-w-fit mx-5 rounded-3xl'
            key={index}
          >
            <Image
              src={`/images/home/${image}`}
              alt=''
              width={400}
              height={300}
              className='rounded-3xl shadow-xl'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
