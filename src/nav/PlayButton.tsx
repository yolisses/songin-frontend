import { IconType } from 'react-icons';
import { useLocation } from 'react-router';
import { FaBars, FaPause, FaPlay } from 'react-icons/fa';
import { NavButton } from './NavButton';
import { usePlayer } from '../player/PlayerContext';

export function PlayButton() {
  const { isPlaying, setIsPlaying } = usePlayer();
  const { pathname } = useLocation();
  const playerPage = pathname === '/player';

  let icon:IconType;
  if (playerPage) {
    icon = isPlaying ? FaPause : FaPlay;
  } else {
    icon = FaBars;
  }

  function handleOnClick() {
    if (playerPage) { setIsPlaying((old) => !old); }
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
