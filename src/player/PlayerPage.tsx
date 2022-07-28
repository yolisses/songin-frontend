import { FaComment, FaHeart, FaShare } from 'react-icons/fa';
import { Music } from '../music/Music';
import { Nav } from '../nav/Nav';

interface PlayerPageProps{
  music:Music
}
export function PlayerPage({ music = {} as Music }:PlayerPageProps) {
  const iconsSize = 22;
  return (
    <div className="text-white h-0">
      <div
        className="fixed -z-50 bg-gradient-to-tr bg-[#090542] from-[#0f5477] via-[#06032c] to-[#0d5a3b] w-screen h-screen"
      />
      <div
        className="fixed -z-40 w-screen h-screen bg-cover bg-center bg-no-repeat blur-lg scale-110"
        style={{ backgroundImage: `url("${music.image}")` }}
      />
      <img
        src={music.image}
        alt={music.name}
        className="mask fixed -z-30 w-screen aspect-square max-w-[100vh]
        -translate-y-1/2 top-1/2 translate-x-1/2 right-1/2 "
      />
      <div
        className="fixed bottom-0 w-screen bg-gradient-to-t from-[#000a] via-[#000a] to-transparent] pt-10"
      >
        <div className="px-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="text-xl">
              {music.name}
            </div>
            <div className="">
              {music.artist?.name}
            </div>
          </div>
          <div className="flex flex-row gap-6">
            <button type="button">
              <FaHeart size={iconsSize} />
            </button>
            <button type="button">
              <FaComment size={iconsSize} />
            </button>
            <button type="button">
              <FaShare size={iconsSize} />
            </button>
          </div>
          <input type="range" className="w-full cursor-pointer" />
        </div>
        <div className="h-16" />
      </div>
      <Nav />
    </div>
  );
}
