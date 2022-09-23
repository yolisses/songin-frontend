import { FaPaperPlane } from 'react-icons/fa';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useComment } from './CommentContext';
import { Music } from '../music/Music';

interface Props{
  music:Music
}

export function CommentInput({ music }:Props) {
  const [text, setText] = useState('');
  const { addComment } = useComment();

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    addComment(text, music);
    setText('');
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setText(text);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-row gap-2 p-2 items-center"
    >
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="So, what do think?"
        className="p-2 bg-transparent flex-1 rounded-full border-2 border-opacity-50"
      />
      <button className="p-2 text-lg group">
        <FaPaperPlane className="group-active:scale-50 transition-transform" />
      </button>
    </form>
  );
}
