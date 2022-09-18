import { PlayButton } from '../PlayButton';
import { TimeCounter } from '../TimeCounter';
import { JumpButton } from './JumpButton';

export function PlayerBarControls() {
  return (
    <div className="flex flex-row items-center text-lg gap-4 ">
      <JumpButton foward={false} />
      <PlayButton />
      <JumpButton foward />
      <div className="text-sm opacity-60">
        <TimeCounter />
      </div>
    </div>
  );
}
