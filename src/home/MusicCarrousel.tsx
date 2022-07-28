import { Music } from '../music/Music';

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
          <div className="flex-shrink-0 max-w-[46%]">
            <img
              alt=""
              className="bg-gray-300 aspect-square w-44 rounded-lg"
              src={music.image}
              key={music.id}
            />
            <div>
              {music.name}
            </div>
            <div className="text-gray-700">
              {music.artist.name}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
