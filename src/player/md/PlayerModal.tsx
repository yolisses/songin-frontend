import { useEffect, useState } from 'react';
import { Comments } from '../../comments/Comments';
import { image } from '../../common/image';
import { useMusics } from '../../music/MusicsContext';
import { TabButtons } from '../../tab/TabButtons';
import { TabsContainer } from '../../tab/TabsContainer';
import { NextMusics } from '../next/NextMusics';

export function PlayerModal() {
  const { music } = useMusics();
  const [tab, setTab] = useState(0);

  if (!music) return null;

  function setBodyScroll(value :string) {
    const body = document.querySelector('body');
    body!.style.overflow = value;
  }

  useEffect(() => {
    setBodyScroll('hidden');
    return () => {
      setBodyScroll('unset');
    };
  }, []);

  return (
    <div className="flex flex-row h-full w-full text-white overflow-hidden z-20">
      <div
        style={{ backgroundImage: `url("${image(music, 64)}")` }}
        className="w-full h-full absolute brightness-[0.3] -z-10 bg-zinc-800 bg-center bg-no-repeat bg-cover blur-[50px] scale-[1.6]"
      />
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          alt={music.name}
          src={image(music, 512)}
          style={{ boxShadow: '0px 15px 30px #0007' }}
          className="aspect-square flex-1 max-w-[450px] w-full rounded-lg shadow-2xl"
        />
      </div>
      <div className="flex flex-col mb-20 flex-1 max-w-md">
        <div className="flex flex-row items-center">
          <TabButtons
            tab={tab}
            setTab={setTab}
            labels={['Coming in', 'Comments']}
          />
        </div>
        <div className="overflow-auto flex-1 flex flex-col">
          <TabsContainer selected={tab}>
            <NextMusics />
            <Comments music={music} />
          </TabsContainer>
        </div>
      </div>
    </div>
  );
}
