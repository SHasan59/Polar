'use client';

import React, { useState } from 'react';

const platforms = ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'];
const gameTypes = ['Single Player', 'Multiplayer'];

export default function GameCollection() {
    const [gameCollection, setGameCollection] = useState({});
    const [newGame, setNewGame] = useState('');
    const [newGenre, setNewGenre] = useState('');
    const [newPlatform, setNewPlatform] = useState('');
    const [newType, setNewType] = useState('');
    const [newImage, setNewImage] = useState(null);

    const addGame = () => {
        if (newGame.trim() && newGenre.trim() && newPlatform.trim() && newType.trim()) {
            setGameCollection((prevCollection) => {
                const updatedCollection = { ...prevCollection };

                if (!updatedCollection[newGenre]) {
                    updatedCollection[newGenre] = new Set();
                }

                const newGameDetails = {
                    name: newGame,
                    platform: newPlatform,
                    type: newType,
                    imageUrl: newImage ? URL.createObjectURL(newImage) : ''
                };

                const genreSet = updatedCollection[newGenre];
                const gameExists = [...genreSet].some(
                    (game) => game.name === newGameDetails.name && game.platform === newGameDetails.platform
                );

                if (!gameExists) {
                    genreSet.add(newGameDetails);
                }

                return updatedCollection;
            });

            setNewGame('');
            setNewGenre('');
            setNewPlatform('');
            setNewType('');
            setNewImage(null);
        }
    };

    const removeGame = (genre, game) => {
        setGameCollection((prevCollection) => {
            const updatedCollection = { ...prevCollection };
            updatedCollection[genre].delete(game);

            if (updatedCollection[genre].size === 0) {
                delete updatedCollection[genre];
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

    return (
        <div className="max-w-lg mx-auto p-6 bg-black rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center text-white">Game Collection</h1>
            <AddGameForm
                newGame={newGame}
                newGenre={newGenre}
                newPlatform={newPlatform}
                newType={newType}
                newImage={newImage}
                setNewGame={setNewGame}
                setNewGenre={setNewGenre}
                setNewPlatform={setNewPlatform}
                setNewType={setNewType}
                setNewImage={setNewImage}
                onAddGame={addGame}
            />
            <div className="mb-6">
                <button
                    onClick={exportCollection}
                    className="w-full bg-green-500 text-white p-2 rounded"
                >
                    Export Collection
                </button>
            </div>
            <GameList
                gameCollection={gameCollection}
                onRemoveGame={removeGame}
            />
        </div>
    );
}

function AddGameForm({
    newGame,
    newGenre,
    newPlatform,
    newType,
    setNewGame,
    setNewGenre,
    setNewPlatform,
    setNewType,
    setNewImage,
    onAddGame,
}) {
    return (
        <div className="mb-6">
            <div className="mb-2">
                <input
                    type="text"
                    value={newGame}
                    onChange={(e) => setNewGame(e.target.value)}
                    placeholder="New Game"
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{ color: 'black' }}
                />
            </div>
            <div className="mb-2">
                <input
                    type="text"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                    placeholder="Genre"
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{ color: 'black' }}
                />
            </div>
            <div className="mb-2">
                <select
                    value={newPlatform}
                    onChange={(e) => setNewPlatform(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{ color: 'black' }}
                >
                    <option value="" disabled>
                        Select Platform
                    </option>
                    {platforms.map((platform) => (
                        <option key={platform} value={platform}>
                            {platform}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                    style={{ color: 'black' }}
                >
                    <option value="" disabled>
                        Select Game Type
                    </option>
                    {gameTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                        const file = e.target.files ? e.target.files[0] : null;
                        setNewImage(file);
                    }}
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </div>
            <button
                onClick={onAddGame}
                className="w-full bg-blue-500 text-white p-2 rounded"
            >
                Add Game
            </button>
        </div>
    );
}

function GameList({ gameCollection, onRemoveGame }) {
    return (
        <div>
            {Object.keys(gameCollection).length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-white">Genres</h2>
                    {Object.keys(gameCollection).map((genre) => (
                        <div key={genre} className="mb-6">
                            <h3 className="text-lg font-medium text-white">{genre}</h3>
                            <ul className="list-disc pl-6 mt-2">
                                {[...gameCollection[genre]].map((game) => (
                                    <li key={game.name} className="flex items-center space-x-2">
                                        <GameDetails game={game} onRemoveGame={onRemoveGame} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

function GameDetails({ game, onRemoveGame }) {
    return (
        <div className="flex items-center space-x-2">
            <div className="text-white">
                <span>{game.name}</span> - {game.platform} - {game.type}
            </div>
            {game.imageUrl && (
                <img
                    src={game.imageUrl}
                    alt={game.name}
                    className="w-20 h-20 object-cover rounded"
                />
            )}
            <button
                onClick={() => onRemoveGame(game)}
                className="bg-red-500 text-white p-1 rounded"
            >
                Remove
            </button>
        </div>
    );
}