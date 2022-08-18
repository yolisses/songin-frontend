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
    <div className="flex flex-row overflow-y-hidden h-screen text-white">
      <div className="absolute -z-10 w-screen h-screen overflow-hidden bg-[#1b1c29]">
        <div
          style={{ backgroundImage: `url("${music.image}")` }}
          className="w-screen h-screen brightness-50 bg-center bg-no-repeat bg-cover blur-[100px] scale-[2] overflow-hidden"
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-10">
        <img
          alt={music.name}
          src={music.image}
          className="bg-gray-200 aspect-square w-full max-w-[450px] rounded-lg"
        />
      </div>
      <div className="mb-20 overflow-auto flex-1 max-w-md">
        <div className="sticky top-0 flex flex-row h-12 items-center">
          <TabButtons
            tab={tab}
            setTab={setTab}
            labels={['Sequência', 'Comentários']}
          />
        </div>
        <div className="w-full flex flex-col">
          <TabsContainer selected={tab}>
            <NextMusics />
            <CommentsPage />
          </TabsContainer>
        </div>
      </div>
    </div>
  );
}
