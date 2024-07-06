'use client';

import { useState } from 'react';
import Button from '../button/button';
import Image from 'next/image';

export default function PostLikes({ likes, slug, handleClick }) {
  const [displayedLikes, setDisplayedLikes] = useState(likes);

  return (
    <div className='flex gap-3 items-center'>
      <Button
        handleClick={() => {
          handleClick(slug);
          setDisplayedLikes(displayedLikes + 1);
        }}
      >
        <Image src='/icons/heart.svg' alt='heart' width={20} height={20} />
      </Button>
      <p>
        {displayedLikes} {displayedLikes === 1 ? 'like' : 'likes'}
      </p>
    </div>
  );
}
