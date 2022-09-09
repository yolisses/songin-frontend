import { Link } from 'react-router-dom';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';

interface MusicCarrouselItemProps{
    music:Music
}

export function CarrouselItem({ music }:MusicCarrouselItemProps) {
  const { setMusic } = useMusics();

  function handleClick() {
    setMusic(music);
  }

  return (
    <div
      className="flex-shrink-0 flex flex-col w-44 relative items-center"
    >
      <div className="snap-start absolute -left-2" />
      <button
        onClick={handleClick}
        className="rounded-lg"
      >
        <img
          key={music.id}
          alt={music.name}
          src={music.image}
          className="aspect-square rounded-lg w-44"
        />
      </button>
      <button
        onClick={handleClick}
        className="hover:underline"
      >
        {music.name}
      </button>
      <Link
        to={`/@${music.artist?.name}`}
        className="text-center hover:underline opacity-60 w-fit"
      >
        {music.artist?.name}
      </Link>
    </div>
  );
}
