import { Dispatch, SetStateAction } from 'react';
import { TabButton } from './TabButton';

interface TabButtonsProps{
    tab:number
    labels:string[]
    setTab:Dispatch<SetStateAction<number>>
}

export function TabButtons({ labels, setTab, tab }:TabButtonsProps) {
  return (
    <>
      {labels.map((label, i) => (
        <TabButton
          tab={i}
          key={label}
          label={label}
          setTab={setTab}
          selected={i === tab}
        />
      ))}
    </>
  );
}
