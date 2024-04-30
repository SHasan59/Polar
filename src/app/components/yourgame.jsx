'use client';

import React, { useState } from 'react';

const PLATFORMS = ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'];
const GAME_TYPES = ['Single Player', 'Multiplayer'];
const GENRES = ['Action', 'Adventure', 'RPG', 'Shooter', 'Sports', 'Strategy', 'Simulation', 'Puzzle', 'Other'];

const platformColors = {
    'PC': '#1abc9c',         
    'PlayStation': '#3498db', 
    'Xbox': '#27ae60',       
    'Nintendo Switch': '#e74c3c' 
};

export default function GameCollection() {
    const [gameCollection, setGameCollection] = useState({});
    const [newGame, setNewGame] = useState({
        name: '',
        genre: '',
        platform: '',
        type: '',
        image: null
    });

    const addGame = () => {
        const { name, genre, platform, type, image } = newGame;

        if (name && genre && platform && type) {
            setGameCollection((prevCollection) => {
                const updatedCollection = { ...prevCollection };

                if (!updatedCollection[genre]) {
                    updatedCollection[genre] = new Set();
                }

                const newGameDetails = {
                    name,
                    platform,
                    type,
                    imageUrl: image ? URL.createObjectURL(image) : ''
                };

                const gameExists = [...updatedCollection[genre]].some(
                    (game) => game.name === name && game.platform === platform
                );

                if (!gameExists) {
                    updatedCollection[genre].add(newGameDetails);
                }

                return updatedCollection;
            });

            setNewGame({
                name: '',
                genre: '',
                platform: '',
                type: '',
                image: null
            });
        }
    };

    const removeGame = (genre, game) => {
        setGameCollection((prevCollection) => {
            const updatedCollection = { ...prevCollection };
            if (updatedCollection[genre] && updatedCollection[genre].has(game)) {
                updatedCollection[genre].delete(game);
                if (updatedCollection[genre].size === 0) {
                    delete updatedCollection[genre];
                }
            }

            return updatedCollection;
        });
    };

    const exportCollection = () => {
        const data = JSON.stringify(gameCollection, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'game_collection.json';
        link.click();
    };

    const importCollection = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;
            try {
                const importedData = JSON.parse(data);
                setGameCollection((prevCollection) => {
                    const updatedCollection = { ...prevCollection };

                    for (const genre in importedData) {
                        if (!updatedCollection[genre]) {
                            updatedCollection[genre] = new Set();
                        }

                        importedData[genre].forEach((game) => {
                            const gameExists = [...updatedCollection[genre]].some(
                                (existingGame) => existingGame.name === game.name && existingGame.platform === game.platform
                            );

                            if (!gameExists) {
                                updatedCollection[genre].add(game);
                            }
                        });
                    }

                    return updatedCollection;
                });
            } catch (error) {
                console.error('Failed to parse imported data:', error);
            }
        };

        if (file) {
            reader.readAsText(file);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setNewGame((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleImageImport = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewGame((prev) => ({
                ...prev,
                image: file
            }));
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center bg-auto" style={{ backgroundImage: "url('/images/gameshelf.png')" }}>
            <div className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg bg-opacity-90">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Game Collection</h1>

                {/* Game form */}
                <div className="mb-6">
                    {/* Game name input */}
                    <div className="mb-2">
                        <input
                            type="text"
                            name="name"
                            value={newGame.name}
                            onChange={handleChange}
                            placeholder="New Game"
                            className="w-full p-2 border border-gray-300 rounded"
                            style={{ color: 'black' }}
                        />
                    </div>

                    {/* Genre selection */}
                    <div className="mb-2">
                        <select
                            name="genre"
                            value={newGame.genre}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            style={{ color: 'black' }}
                        >
                            <option value="" disabled>Select Genre</option>
                            {GENRES.map((genre) => (
                                <option key={genre} value={genre}>{genre}</option>
                            ))}
                        </select>
                    </div>

                    {/* Platform selection */}
                    <div className="mb-2">
                        <select
                            name="platform"
                            value={newGame.platform}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            style={{ color: 'black' }}
                        >
                            <option value="" disabled>Select Platform</option>
                            {PLATFORMS.map((platform) => (
                                <option key={platform} value={platform}>{platform}</option>
                            ))}
                        </select>
                    </div>

                    {/* Game type selection */}
                    <div className="mb-2">
                        <select
                            name="type"
                            value={newGame.type}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            style={{ color: 'black' }}
                        >
                            <option value="" disabled>Select Game Type</option>
                            {GAME_TYPES.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Import game image button */}
                    <button
                        onClick={() => document.getElementById('image-import-input').click()}
                        className="w-full bg-blue-500 text-white p-2 rounded mb-2"
                    >
                        Import Game Image
                    </button>
                    <input
                        id="image-import-input"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageImport}
                        className="hidden"
                    />

                    {/* Add game button */}
                    <button
                        onClick={addGame}
                        className="w-full bg-blue-500 text-white p-2 rounded"
                    >
                        Add Game
                    </button>
                </div>

                {/* Export and import buttons */}
                <div className="mb-6">
                    {/* Export collection button */}
                    <button
                        onClick={exportCollection}
                        className="w-full bg-green-500 text-white p-2 rounded"
                    >
                        Export Collection
                    </button>

                    {/* Import collection button */}
                    <button
                        onClick={() => document.getElementById('import-input').click()}
                        className="w-full bg-yellow-500 text-white p-2 rounded mt-4"
                    >
                        Import Collection
                    </button>
                    <input
                        id="import-input"
                        type="file"
                        accept=".json"
                        onChange={importCollection}
                        className="hidden"
                    />
                </div>

                {/* Game collection display */}
                {Object.keys(gameCollection).length > 0 && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Genres</h2>
                        <table className="w-full text-white">
                            <thead>
                                <tr>
                                    <th className="border p-2">Game</th>
                                    <th className="border p-2">Platform</th>
                                    <th className="border p-2">Type</th>
                                    <th className="border p-2">Image</th>
                                    <th className="border p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(gameCollection).map((genre) => (
                                    <React.Fragment key={genre}>
                                        <tr className="bg-gray-700">
                                            <td colSpan={5} className="border p-2 font-semibold">{genre}</td>
                                        </tr>
                                        {[...gameCollection[genre]].map((game) => (
                                            <tr key={game.name}>
                                                <td className="border p-2">{game.name}</td>
                                                <td className="border p-2" style={{ color: platformColors[game.platform] }}>
                                                    {game.platform}
                                                </td>
                                                <td className="border p-2">{game.type}</td>
                                                <td className="border p-2">
                                                    {game.imageUrl && (
                                                        <img
                                                            src={game.imageUrl}
                                                            alt={game.name}
                                                            className="w-16 h-16 object-cover rounded"
                                                        />
                                                    )}
                                                </td>
                                                <td className="border p-2">
                                                    <button
                                                        onClick={() => removeGame(genre, game)}
                                                        className="bg-red-500 text-white p-2 rounded"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );

}
