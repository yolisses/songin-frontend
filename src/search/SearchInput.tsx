import { FormEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

export function SearchInput() {
  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    alert('foi');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex flex-row items-center"
    >
      <input
        type="text"
        placeholder="Search"
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
