import { ChangeEvent, FormEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props{
    getMusics:(q:string)=>Promise<void>
}

export function SearchInput({ getMusics }:Props) {
  const [q, setQ] = useState('');

  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    getMusics(q);
  }

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setQ(e.target.value);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex flex-row items-center"
    >
      <input
        value={q}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        className="p-2 px-4 bg-transparent flex-1 rounded-full border-2 border-white border-opacity-50"
      />
      <button
        type="submit"
        className="p-2 text-lg group"
      >
        <FaSearch
          size={22}
          className="group-active:scale-50 transition-transform"
        />
      </button>
    </form>
  );
}
