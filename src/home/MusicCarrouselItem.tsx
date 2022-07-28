import { Music } from '../music/Music';
import { usePlayer } from '../player/PlayerContext';

interface MusicCarrouselItemProps{
    music:Music
}

export function MusicCarrouselItem({ music }:MusicCarrouselItemProps) {
  const { setMusic } = usePlayer();

  function handleClick() {
    setMusic(music);
  }

  return (
    <div className="flex-shrink-0 max-w-[46%] flex flex-col">
      <button type="button" className="rounded-lg" onClick={handleClick}>
        <img
          alt=""
          className="bg-gray-300 aspect-square w-44 rounded-lg"
          src={music.image}
          key={music.id}
        />
      </button>
      <button type="button" onClick={handleClick} className="hover:underline">
        {music.name}
      </button>
      <button type="button" className="text-gray-700 hover:underline">
        {music.artist.name}
      </button>
    </div>
  );
}