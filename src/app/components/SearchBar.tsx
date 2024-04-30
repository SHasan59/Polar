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
      <h1 className="text-3xl font-bold mb-4 ">Discover Your Next Adventure</h1>
      <p className="text-white text-lg mb-8">
        Dive into an endless array of gaming experiences. Search for any game
        you desire, from beloved classics to the latest releases, right here.
      </p>

      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search video games"
          value={query}
          onChange={handleInputChange}
          className="border rounded-3xl px-4 py-2 mr-2 w-64 text-black" 
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white rounded-3xl px-4 py-2 transition duration-300 transform hover:scale-110"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
