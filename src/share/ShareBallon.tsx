import { Music } from '../music/Music';
import { Ballon } from '../player/Ballon';
import { ShareButtons } from './ShareButtons';

interface ShareBallonProps{
    music:Music
}

export function ShareBallon({ music }:ShareBallonProps) {
  return (
    <Ballon>
      <ShareButtons
        size={40}
        url={`https://musiks.com/music/${music.id}`}
      />
    </Ballon>
  );
}
