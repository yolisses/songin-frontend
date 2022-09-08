import { Group } from '../group/Group';
import { MusicCarrouselItem } from './MusicCarrouselItem';

interface MusicCarrouselProps{
  group:Group
}

export function MusicCarrousel({ group }:MusicCarrouselProps) {
  return (
    <div>
      {group.name && (
      <h3 className="text-xl md:text-2xl pb-2 pl-2">
        {group.name}
      </h3>
      )}
      <div
        className="flex flex-row gap-2 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {group.items.map((music) => (
          <MusicCarrouselItem music={music} key={music.id} />
        ))}
      </div>
    </div>

  );
}
