import { formatMusicTime } from '../common/formatMusicTime';
import { Music } from '../music/Music';
import { usePlayer } from './PlayerContext';

export function TimeCounter() {
  const { elapsed, duration } = usePlayer();

  return (
    <div>
      {formatMusicTime(elapsed) }
      {' '}
      /
      {' '}
      {formatMusicTime(duration) }
    </div>
  );
}
