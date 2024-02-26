import { useState, ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold mb-4">SEARCH GAMES HERE</h1>
      <p className="text-gray-500 text-lg mb-8">HERE U CAN SEARCH ANY GAME YOU WANT AND I MEAN ANY GAME</p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search video games..."
          value={query}
          onChange={handleInputChange}
          className="border rounded px-4 py-2 mr-2 w-64 text-black" // Set text color to black
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
