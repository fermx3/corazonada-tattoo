'use client';

import { useState } from 'react';
import Button from '../button/button';
import Image from 'next/image';

export default function PostLikes({ likes, slug, handleClick }) {
  const [displayedLikes, setDisplayedLikes] = useState(likes);

  return (
    <div className='flex flex-wrap items-between shadow-md p-2 rounded-lg w-full bg-soft-pink items-center h-fit'>
      <Button
        handleClick={() => {
          handleClick(slug);
          setDisplayedLikes(displayedLikes + 1);
        }}
      >
        <Image src='/icons/heart.svg' alt='heart' width={20} height={20} />
      </Button>
      <p className='ml-2 text-center md:text-left w-full md:w-fit'>
        {displayedLikes} {displayedLikes === 1 ? 'like' : 'likes'}
      </p>
    </div>
  );
}
