import { useState } from 'react';

export function useTab(initial = 0) {
  const [tab, setTab] = useState(initial);

  function tabClick(newTab:number) {
    return function handleClick() {
      setTab(newTab);
    };
  }

  return { tab, tabClick };
}
