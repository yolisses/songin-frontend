import { useState } from 'react';
import { PlayerModal } from './PlayerModal';
import { PlayerRange } from '../PlayerRange';
import { useMd } from '../../responsive/useMd';
import { RepeatButton } from '../RepeatButton';
import { PlayerBarCenter } from './PlayerBarCenter';
import { useMusics } from '../../music/MusicsContext';
import { PlayerBarControls } from './PlayerBarControls';

export function PlayerBar() {
  const md = useMd();
  const { music } = useMusics();
  const [modalActive, setModalActive] = useState(false);

  function handleClick() {
    setModalActive((value) => !value);
  }

  if (!md || !music) return null;

  return (
    <div className="h-16 mt-2 z-30">
      {modalActive && (
      <div className="fixed right-0 bottom-0 w-full h-full animate-appear">
        <PlayerModal />
      </div>
      )}
      <div className="fixed right-0 bottom-16 translate-y-1/2 w-full z-[11]">
        <PlayerRange />
      </div>
      <div
        style={{ backgroundColor: modalActive ? undefined : '#18181b' }}
        className="fixed w-full z-10 right-0 bottom-0 h-16 duration-[0.4s] transition-colors flex flex-row justify-between items-center px-2 gap-2"
      >
        <PlayerBarControls />
        <button
          onClick={handleClick}
          className="w-full pr-48 flex center"
        >
          <PlayerBarCenter
            music={music}
            modalActive={modalActive}
          />
        </button>
        <RepeatButton />
      </div>
    </div>
  );
}
