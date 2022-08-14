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
      className="flex-shrink-0 max-w-[46%] flex flex-col relative"
    >
      <div className="snap-start absolute -left-2" />
      <button type="button" className="rounded-lg" onClick={handleClick}>
        <img
          key={music.id}
          alt={music.name}
          src={music.image}
          className="bg-gray-300 aspect-square w-44 rounded-lg"
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
