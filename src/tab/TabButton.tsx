import { Dispatch, SetStateAction } from 'react';

interface TabButtonProps{
    tab:number
    label:string
    selected:boolean
    setTab:Dispatch<SetStateAction<number>>
}

export function TabButton({
  label, selected, setTab, tab,
}:TabButtonProps) {
  function handleClick() {
    setTab(tab);
  }
  return (
    <button
      type="button"
      onClick={handleClick}
      className="border-b-2 px-2 transition-colors"
      style={{
        borderColor: selected ? 'rgb(59,130,246)' : undefined,
      }}
    >
      {label}
    </button>
  );
}
