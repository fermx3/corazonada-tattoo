import { useState } from 'react';

export default function PostLikes({ likes }) {
  const [likesDisplayed, setLikesDisplayed] = useState(likes);

  return <p>{likesDisplayed} likes</p>;
}
