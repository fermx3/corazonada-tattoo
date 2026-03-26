'use client';

import { useState } from 'react';
import Button from '../button/button';
import Image from 'next/image';

export default function PostLikes({ likes, slug, handleClick, hasLiked }) {
  const [displayedLikes, setDisplayedLikes] = useState(likes);
  const [liked, setLiked] = useState(hasLiked);

  return (
    <div className='flex flex-wrap justify-center md:justify-start shadow-md p-2 rounded-lg w-full bg-soft-pink items-center h-fit'>
      {liked ? (
        <div className='flex items-center gap-2 px-5 py-2.5'>
          <Image src='/icons/heart-filled.svg' alt='heart' width={20} height={20} />
          <span className='text-sm text-pink-accent font-medium'>Ya te gusta!</span>
        </div>
      ) : (
        <Button
          handleClick={() => {
            handleClick(slug);
            setDisplayedLikes(displayedLikes + 1);
            setLiked(true);
          }}
        >
          <Image src='/icons/heart.svg' alt='heart' width={20} height={20} />
        </Button>
      )}
      <p className='ml-2 text-center w-full md:text-left md:w-fit'>
        {displayedLikes} me gusta
      </p>
    </div>
  );
}
