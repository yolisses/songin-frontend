import { useState } from 'react';
import { Comments } from '../comments/Comments';
import { useMusics } from '../music/MusicsContext';
import { TabButtons } from '../tab/TabButtons';
import { TabsContainer } from '../tab/TabsContainer';
import { NextMusics } from './NextMusics';

export function PlayerModal() {
  const { music } = useMusics();
  const [tab, setTab] = useState(0);

  if (!music) return null;

  return (
    <div className="flex flex-row h-full w-full text-white overflow-hidden">
      <div
        style={{ backgroundImage: `url("${music.image}")` }}
        className="w-full h-full absolute brightness-50 -z-10 bg-[#1b1c29] bg-center bg-no-repeat bg-cover blur-[50px] scale-[1.6]"
      />
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          alt={music.name}
          src={music.image}
          className="bg-gray-200 aspect-square flex-1 max-w-[450px] rounded-lg"
        />
      </div>
      <div className="flex flex-col mb-20 flex-1 max-w-md">
        <div className="flex flex-row items-center">
          <TabButtons
            tab={tab}
            setTab={setTab}
            labels={['Sequência', 'Comentários']}
          />
        </div>
        <div className="p-2 overflow-auto flex-1">
          <TabsContainer selected={tab}>
            <NextMusics />
            <Comments />
          </TabsContainer>
        </div>
      </div>
    </div>
  );
}
