import { IconType } from 'react-icons';
import { useLocation } from 'react-router';
import { ReactNode } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { NavItem } from './NavItem';
import { usePlayer } from '../player/PlayerContext';
import { PlayingIndicator } from './PlayingIndicator';

export function NavPlayButton() {
  const { isPlaying, setIsPlaying } = usePlayer();
  const { pathname } = useLocation();
  const playerPage = pathname === '/player';

  let icon:IconType|undefined;
  let iconNode:ReactNode|undefined;
  if (playerPage) {
    icon = isPlaying ? FaPause : FaPlay;
  } else {
    iconNode = <PlayingIndicator playing={isPlaying} />;
  }

  function handleOnClick() {
    if (playerPage) { setIsPlaying((old) => !old); }
  }

  return (
    <NavItem
      to="/player"
      Icon={icon}
      iconNode={iconNode}
      // eslint-disable-next-line react/jsx-no-bind
      onClick={handleOnClick}
      text={playerPage ? undefined : 'Music'}
    />
  );
}
