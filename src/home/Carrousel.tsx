import { LoadingLine } from '../common/LoadingLine';
import { range } from '../common/range';
import { repeat } from '../common/repeat';
import { Group } from '../group/Group';
import { CarrouselItem } from './CarrouselItem';

interface MusicCarrouselProps{
  group?:Group
}

export function Carrousel({ group }:MusicCarrouselProps) {
  const loading = group === undefined;

  if (!loading && group.items.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="text-xl md:text-2xl pb-2 pl-2">
        {loading
          ? <LoadingLine w={32} />
          : <h3>{group.name}</h3>}
      </div>
      <div
        className="flex flex-row gap-2 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {loading
          ? repeat(<CarrouselItem />, 8)
          : group.items.map((music) => (
            <CarrouselItem
              music={music}
              key={music.id}
            />
          ))}
      </div>
    </div>

  );
}
