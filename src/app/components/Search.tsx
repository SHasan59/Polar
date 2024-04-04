'use client';
import { motion, Variants } from 'framer-motion';
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
    <motion.div
      key={game.id}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xs mx-auto bg-lightblue shadow-lg rounded-lg overflow-hidden m-4 h-96 overflow-y-auto"
      style={{ backgroundColor: 'lightblue', margin: '10px' }}
    >
      <img
        src={game.background_image || defaultImage}
        alt={game.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl text-black font-semibold mb-2">{game.name}</h3>
        <p className="text-sm text-black font-medium mb-2">
          Released: {game.released}
        </p>
        <p className="text-sm text-black font-medium  mb-2">
          Platforms: {game.platforms.join(', ')}
        </p>
        <p
          className="text-sm text-black font-medium "
          dangerouslySetInnerHTML={{ __html: game.about }}
        />
      </div>
    </motion.div>
  );
};

export default function Search() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const gamesVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

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
            className=" rounded-3xl px-2 py-1 text-black bg-gray-200"
          >
            <option value="">All Platforms</option>
            <option value="PC">PC</option>
            <option value="Web">Web</option>
            <option value="Xbox One">Xbox One</option>
            <option value="Xbox 360">Xbox 360</option>
            <option value="Nintendo Switch">Nintendo Switch</option>
            <option value="Wii U">Wii U</option>
            <option value="Nintendo 3DS">Nintendo 3DS</option>
            <option value="Wii">Wii</option>
            <option value="Nintendo DS">Nintendo DS</option>
            <option value="GameCube">GameCube</option>
            <option value="Game Boy Advance">Game Boy Advance</option>
            <option value="Nintendo 64">Nintendo 64</option>
            <option value="SNES">SNES</option>
            <option value="NES">NES</option>
            <option value="PlayStation 5">PlayStation 5</option>
            <option value="PlayStation 4">PlayStation 4</option>
            <option value="PlayStation 3">PlayStation 3</option>
            <option value="PlayStation 2">PlayStation 2</option>
            <option value="PlayStation 1">PlayStation 1</option>
            <option value="PS Vita">PS Vita</option>
            <option value="PSP">PSP</option>
          </select>
        </div>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center overflow-y-auto max-h-screen"
          >
            {filteredGames.map((game) => (
              <motion.div key={game.id} variants={gamesVariants}>
                <GameCard game={game} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </main>
  );
}
