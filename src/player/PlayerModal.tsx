import { useState } from 'react';
import { CommentsPage } from '../comments/CommentsPage';
import { useMusics } from '../music/MusicsContext';
import { TabButtons } from '../tab/TabButtons';
import { TabsContainer } from '../tab/TabsContainer';
import { NextMusics } from './NextMusics';

export function PlayerModal() {
  const { music } = useMusics();
  const [tab, setTab] = useState(0);

  if (!music) return null;

  return (
    <div className="flex flex-row overflow-y-hidden h-full w-full text-white">
      <div className="absolute -z-10 w-full h-full overflow-hidden bg-[#1b1c29]">
        <div
          style={{ backgroundImage: `url("${music.image}")` }}
          className="w-full h-full brightness-50 bg-center bg-no-repeat bg-cover blur-[100px] scale-[2]"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          alt={music.name}
          src={music.image}
          className="bg-gray-200 aspect-square flex-1 max-w-[450px] rounded-lg"
        />
      </div>
      <div className="flex flex-col mb-20 flex-1 max-w-md pr-4">
        <div className="flex flex-row items-center">
          <TabButtons
            tab={tab}
            setTab={setTab}
            labels={['Sequência', 'Comentários']}
          />
        </div>
        <div className="p-2 overflow-auto">
          <TabsContainer selected={tab}>
            <NextMusics />
            <CommentsPage />
          </TabsContainer>
        </div>
      </div>
    </div>
  );
}
