'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import Image from 'next/image';

export default function Carousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay(),
  ]);

  return (
    <div className='embla__viewport -mx-10 lg:mx-0' ref={emblaRef}>
      <div className='embla__container p-10'>
        {images.map((image, index) => (
          <div
            className='embla__slide basis-[90%] mx-5 rounded-3xl'
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
