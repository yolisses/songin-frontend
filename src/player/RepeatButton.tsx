import { useState } from 'react';
import { FaRedo } from 'react-icons/fa';

export function RepeatButton() {
  const options = ['none', 'all', 'one'];
  const [index, setIndex] = useState(0);
  const option = options[index];

  function handleClick() {
    setIndex((value) => (value + 1) % options.length);
  }

  return (
    <button onClick={handleClick} className="p-2 relative flex items-center justify-center group">
      {(option === 'one')
       && <div className="text-sm absolute font-bold">1</div>}
      <FaRedo
        className="group-active:scale-50 transition"
        style={{ opacity: option === 'none' ? 0.5 : undefined }}
      />
    </button>
  );
}
