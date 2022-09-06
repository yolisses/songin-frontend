import { Link } from 'react-router-dom';
import { Music } from '../music/Music';
import { useMusics } from '../music/MusicsContext';

interface MusicCarrouselItemProps{
    music:Music
}

export function MusicCarrouselItem({ music }:MusicCarrouselItemProps) {
  const { setMusic } = useMusics();

  function handleClick() {
    setMusic(music);
  }

  return (
    <div
      className="flex-shrink-0 max-w-[44vw] flex flex-col relative"
    >
      <div className="snap-start absolute -left-2" />
      <button className="rounded-lg" onClick={handleClick}>
        <img
          key={music.id}
          alt={music.name}
          src={music.image}
          className="aspect-square w-44 rounded-lg"
        />
      </button>
      <button onClick={handleClick} className="hover:underline">
        {music.name}
      </button>
      <Link to={`/@${music.artist?.name}`} className="text-center hover:underline opacity-50">
        {music.artist?.name}
      </Link>
    </div>
  );
}
