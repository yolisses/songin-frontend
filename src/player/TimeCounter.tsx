import { formatMusicTime } from '../common/formatMusicTime';
import { usePlayer } from './PlayerContext';

export function TimeCounter() {
  const { elapsed, duration } = usePlayer();

  return (
    <div>
      {formatMusicTime(elapsed) }
      {' '}
      /
      {' '}
      {duration ? formatMusicTime(duration) : '0:00' }
    </div>
  );
}
