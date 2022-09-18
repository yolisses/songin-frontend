import { ChangeEvent, useState } from 'react';
import { usePlayer } from './PlayerContext';

export function PlayerRange() {
  const [handling, setHandling] = useState(false);
  const [playerElapsed, setPlayerElapsed] = useState(0);
  const { elapsed, duration, changeElapsed } = usePlayer();

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const value = Number.parseFloat(e.target.value);
    setPlayerElapsed(value);
    if (!handling) { setHandling(true); }
  }

  function handleChangeEnd(e:any) {
    let { value } = e.currentTarget;
    value = Number.parseFloat(value);
    setHandling(false);
    changeElapsed(value);
  }
  return (
    <input
      type="range"
      max={duration || 0}
      onInput={handleChange}
      onMouseUp={handleChangeEnd}
      onTouchEnd={handleChangeEnd}
      className="w-full cursor-pointer"
      value={handling ? playerElapsed : elapsed}
    />
  );
}
