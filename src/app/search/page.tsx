
"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  platforms: string[];
  about: string;
}

interface GameCardProps {
  game: Game;
}



const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const defaultImage = '/beargame.png'; 

  return (
    <div
      key={game.id}
      className="max-w-xs mx-auto bg-lightblue shadow-lg rounded-lg overflow-hidden m-4 h-96 overflow-y-auto"
      style={{ backgroundColor: 'lightblue' }} // Set background color
    >
      <img src={game.background_image || defaultImage} alt={game.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl text-black font-medium mb-2">{game.name}</h3>
        <p className="text-sm text-black mb-2">Released: {game.released}</p>
        <p className="text-sm text-black mb-2">Platforms: {game.platforms.join(', ')}</p>
        <p className="text-sm text-black" dangerouslySetInnerHTML={{ __html: game.about }} />
      </div>
    </div>
  );
};


// Import statements...

export default function Search() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const handleSearch = async (query: string, page: number = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=6f8bc6b721774d8cbbd30e53acf01e4f&search=${query}&page=${page}`
      );

      setTotalPages(Math.ceil(response.data.count / 10));
      

      const gamesWithDetails = await Promise.all(
        response.data.results.map(async (game: any) => {
          const detailsResponse = await axios.get(
            `https://api.rawg.io/api/games/${game.id}?key=6f8bc6b721774d8cbbd30e53acf01e4f`
          );
          const gameDetails = detailsResponse.data;

          return {
            id: gameDetails.id,
            name: gameDetails.name,
            background_image: gameDetails.background_image,
            released: gameDetails.released,
            platforms: gameDetails.platforms.map((platform: any) => platform.platform.name),
            about: gameDetails.description || 'No information available',
          };
        })
      );

      setGames(gamesWithDetails);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlatformFilterChange = (selectedPlatform: string | null) => {
    setPlatformFilter(selectedPlatform);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handleSearch('', currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handleSearch('', currentPage - 1);
    }
  };

  useEffect(() => {
    handleSearch('Fortnite');
  }, []);

  return (
    <main>
      <Navigation />
      <div className="flex flex-col items-center">
        <SearchBar onSearch={handleSearch} />

        {/* Platform filter dropdown */}
        <div className="mb-4">
          <label className="text-lg font-semibold mr-2">Filter by Platform:</label>
          <select
            onChange={(e) => handlePlatformFilterChange(e.target.value)}
            value={platformFilter || ''}
            className="border rounded px-2 py-1"
          >
            <option value="">All Platforms</option>
            <option value="PC">PC</option>
            <option value="Xbox">Xbox</option>
            <option value="PlayStation 1">PlayStation 1</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="Wii">Wii</option>
            <option value="Wii U">Wii U</option>
            <option value="NES">NES</option>
            <option value="Nintendo 64">Nintendo 64</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            {/* Add more options for other platforms as needed */}
          </select>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center overflow-y-auto max-h-screen">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-4">
          <p className="text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex mt-2">
            <button
              onClick={handlePrevPage}
              className="bg-gray-200 text-gray-700 rounded px-2 py-1 mr-2"
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <button
              onClick={handleNextPage}
              className="bg-gray-200 text-gray-700 rounded px-2 py-1"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
