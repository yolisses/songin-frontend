import { Music } from '../music/Music';

interface PlayerPageProps{
  music:Music
}

export function PlayerPage({ music }:PlayerPageProps) {
  return (
    <div className="text-white">
      <div
        className="fixed -z-50 w-screen h-screen bg-cover bg-center bg-no-repeat blur-lg scale-110"
        style={{ backgroundImage: `url("${music.image}")` }}
      />
      <img
        src={music.image}
        alt={music.name}
        className="fixed -z-40 w-screen aspect-square -translate-y-1/2 top-1/2 max-w-[100vh] "
      />
      <div
        className="fixed h-screen -z-30 w-screen"
        style={{
          background: 'linear-gradient(to bottom, #000a 0%, transparent 20%, transparent 80%, #000a 100%',
        }}
      />
      <div className="fixed bottom-0">
        <div className="text-lg">
          {music.name}
        </div>
        <div className="">
          {music.artist.name}
        </div>
      </div>
    </div>
  );
}
