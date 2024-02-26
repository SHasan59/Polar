'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
      style={{ backgroundColor: 'lightblue' }}
    >
      <img
        src={game.background_image || defaultImage}
        alt={game.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl text-black font-medium mb-2">{game.name}</h3>
        <p className="text-sm text-black mb-2">Released: {game.released}</p>
        <p className="text-sm text-black mb-2">
          Platforms: {game.platforms.join(', ')}
        </p>
        <p
          className="text-sm text-black"
          dangerouslySetInnerHTML={{ __html: game.about }}
        />
      </div>
    </div>
  );
};

export default function Search() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=6f8bc6b721774d8cbbd30e53acf01e4f&search=${query}`
      );

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
            platforms: gameDetails.platforms.map(
              (platform: any) => platform.platform.name
            ),
            about: gameDetails.description || 'No information available',
          };
        })
      );

      setGames(gamesWithDetails);
    } catch (error) {
      console.error('Error fetching games:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePlatformFilterChange = (selectedPlatform: string | null) => {
    setPlatformFilter(selectedPlatform);
  };

  const filteredGames = platformFilter
    ? games.filter((game) => game.platforms.includes(platformFilter))
    : games;

  useEffect(() => {
    handleSearch('Zelda');
  }, []);

  return (
    <main>
      <div className="flex flex-col bg-blue-900 ">
        <SearchBar onSearch={handleSearch} />

        {/* Platform filter dropdown */}
        <div className="mb-4 text-right">
          <label className="text-lg font-semibold mr-2">
            Filter by Platform:
          </label>
          <select
            onChange={(e) => handlePlatformFilterChange(e.target.value)}
            value={platformFilter || ''}
            className="border rounded px-2 py-1 text-black"
          >
            <option value="">All Platforms</option>
            <option value="PC">PC</option>
            <option value="Xbox">Xbox</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center overflow-y-auto max-h-screen">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
