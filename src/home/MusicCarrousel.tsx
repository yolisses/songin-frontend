import { Music } from '../music/Music';
import { MusicCarrouselItem } from './MusicCarrouselItem';

interface MusicCarrouselProps{
  title?:string
  musics:Music[]
}

export function MusicCarrousel({ musics, title }:MusicCarrouselProps) {
  return (
    <div>
      {title && (
      <h3 className="text-2xl pb-2 pl-2">
        {title}
      </h3>
      )}
      <div className="flex flex-row gap-2 px-4 overflow-x-auto no-scrollbar">
        {musics.map((music) => (
          <MusicCarrouselItem music={music} />
        ))}
      </div>
    </div>

  );
}
