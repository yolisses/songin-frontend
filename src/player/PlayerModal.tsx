import { useMusics } from '../music/MusicsContext';
import { GradientBackground } from './GradientBackground';
import { NextMusics } from './NextMusics';

export function PlayerModal() {
  const { music } = useMusics();

  if (!music) return null;

  return (
    <div className="flex flex-row overflow-y-hidden h-screen">
      <GradientBackground />
      <img
        alt={music.name}
        src={music.image}
        className="h-full aspect-square p-32"
      />
      <div className="mb-16 overflow-auto flex-1">
        <NextMusics />
      </div>
    </div>
  );
}
