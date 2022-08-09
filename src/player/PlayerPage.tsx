import { useColors } from '../dev/utils/useColors';
import { GradientBackground } from './GradientBackground';
import { PlayerRange } from './PlayerRange';

export function PlayerPage() {
  const colors = useColors(10);

  return (
    <>
      <GradientBackground />
      <div className="flex flex-col h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory">
        {colors.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="h-screen snap-start flex-shrink-0"
          >
            {color}
            <PlayerRange />
          </div>
        ))}
      </div>
    </>
  );
}
