import { IconType } from 'react-icons';
import { FaBars, FaPause, FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router';
import { usePlayer } from '../player/PlayerContext';
import { NavButton } from './NavButton';

export function PlayButton() {
  const { isPlaying, pause, play } = usePlayer();
  const { pathname } = useLocation();
  const playerPage = pathname === '/player';

  let icon:IconType;
  if (playerPage) {
    icon = isPlaying ? FaPause : FaPlay;
  } else {
    icon = FaBars;
  }

  function handleOnClick() {
    if (playerPage) {
      if (isPlaying) {
        pause();
      } else {
        play();
      }
    }
  }

  return (
    <NavButton
      to="/player"
      Icon={icon}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleOnClick}
      text={playerPage ? undefined : 'Música'}
    />
  );
}
