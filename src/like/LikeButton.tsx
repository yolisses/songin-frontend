import { useEffect, useState } from 'react';
import { api } from '../common/api';
import { Music } from '../music/Music';
import { LikeButtonContent } from './LikeButtonContent';
import { FloatingCounter } from '../player/FloatingCounter';

interface LikeButtonProps{
  music?:Music
}

export function LikeButton({ music }:LikeButtonProps) {
  const alreadyLiked = music?.liked || false;
  const [active, setActive] = useState(alreadyLiked);

  async function handleClick() {
    console.log('here');
    setActive((old) => !old);
    const url = `/musics/${music?.id}/like`;
    console.log('vai teia');
    const method = active
      ? api.delete
      : api.post;
    const res = await method(url);
    console.log(res.data);
  }

  useEffect(() => {
    setActive(alreadyLiked);
  }, [alreadyLiked]);

  return (
    <FloatingCounter
      count={music?.likesCount}
    >
      <button
        onClick={handleClick}
        className="group relative p-2"
      >
        <LikeButtonContent active={active} />
        {`${active}`}
      </button>
    </FloatingCounter>
  );
}
