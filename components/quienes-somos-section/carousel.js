'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import Image from 'next/image';

export default function Carousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay(),
  ]);

  return (
    <div className='embla__viewport' ref={emblaRef}>
      <div className='embla__container py-10 '>
        {images.map((image, index) => (
          <div
            className='embla__slide rounded-3xl basis-[80%!important]'
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
