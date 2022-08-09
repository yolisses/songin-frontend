import { useColors } from '../dev/utils/useColors';

export function PlayerPage() {
  const colors = useColors(10);

  return (
    <div className="flex flex-col h-screen overflow-y-scroll bg-red-500 no-scrollbar snap-y snap-mandatory">
      {colors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color }}
          className="h-screen snap-start flex-shrink-0"
        >
          {color}
        </div>
      ))}
    </div>
  );
}
