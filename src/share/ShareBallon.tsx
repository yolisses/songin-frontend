import { Music } from '../music/Music';
import { Ballon } from '../player/Ballon';
import { ShareButtons } from './ShareButtons';

interface ShareBallonProps{
    music:Music
    close:()=>void
}

export function ShareBallon({ music, close }:ShareBallonProps) {
  return (
    <Ballon close={close}>
      <ShareButtons
        size={40}
        url={`https://musiks.com/music/${music.id}`}
      />
    </Ballon>
  );
}
