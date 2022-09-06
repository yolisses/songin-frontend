import { FaSearch } from 'react-icons/fa';

export function SearchPage() {
  return (
    <div className="w-full flex flex-col items-center p-6">
      <div className="w-full max-w-3xl flex flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Pesquisar"
          className="p-2 bg-transparent flex-1 rounded-full border-2 border-white border-opacity-50"
        />
        <button className="p-2 text-lg group">
          <FaSearch className="group-active:scale-50 transition-transform" />
        </button>
      </div>
    </div>
  );
}
