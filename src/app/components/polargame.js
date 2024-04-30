'use client';
import React, { useState, useEffect } from 'react';
import '../css/styles.css';


const Polargame = () => {
  const [playerY, setPlayerY] = useState(200);
  const [playerX, setPlayerX] = useState(20);
  const [obstacles, setObstacles] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [keysPressed, setKeysPressed] = useState({});

  const movePlayerUp = () => {
    setPlayerY((prevY) => prevY - 10);
  };

  const movePlayerDown = () => {
    setPlayerY((prevY) => prevY + 10);
  };

  const movePlayerLeft = () => {
    setPlayerX((prevX) => prevX - 10);
  };

  const movePlayerRight = () => {
    setPlayerX((prevX) => prevX + 10);
  };

  const handleKeyPress = (event) => {
    if (gameOver && event.key === 'Enter') {
      restartGame();
    } else if (gameStarted && !gameOver && !keysPressed[event.key]) {
      const keys = { ...keysPressed };
      keys[event.key] = true;
      setKeysPressed(keys);
    }
  };

  const handleKeyUp = (event) => {
    const keys = { ...keysPressed };
    delete keys[event.key];
    setKeysPressed(keys);
  };

  const handleKeys = () => {
    if (keysPressed['w']) movePlayerUp();
    if (keysPressed['s']) movePlayerDown();
    if (keysPressed['a']) movePlayerLeft();
    if (keysPressed['d']) movePlayerRight();
  };

  const generateObstacle = () => {
    const newObstacle = {
      id: Math.random(),
      x: 800,
      y: Math.random() * 400,
    };
    setObstacles((prevObstacles) => [...prevObstacles, newObstacle]);
  };

  const updateObstacles = () => {
    setObstacles((prevObstacles) =>
      prevObstacles.map((obstacle) => ({
        ...obstacle,
        x: obstacle.x - 5,
      }))
    );
  };

  const checkCollisions = () => {
    const playerTop = playerY;
    const playerBottom = playerY + 100; //  player height 
    const playerLeft = 20; // player width 

    obstacles.forEach((obstacle) => {
      const obstacleTop = obstacle.y;
      const obstacleBottom = obstacle.y + 100; //  obstacle height 100px
      const obstacleLeft = obstacle.x;

      // Check if the player's  box intersects with the obstacle's  box
      if (
        playerBottom >= obstacleTop &&
        playerTop <= obstacleBottom &&
        playerLeft + 20 >= obstacleLeft && // Adding player width for left side
        obstacle.x < 150
      ) {
        endGame();
      }
    });
  };

  const endGame = () => {
    setGameOver(true);
  };

  const restartGame = () => {
    setPlayerY(200);
    setPlayerX(20);
    setObstacles([]);
    setScore(0);
    setGameOver(false);
  };

  const gameLoop = () => {
    if (gameOver) return;

    if (Math.random() < 0.05) {
      generateObstacle();
    }

    updateObstacles();
    checkCollisions();
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    const gameInterval = setInterval(gameLoop, 50);
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      clearInterval(gameInterval);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [obstacles, playerX, playerY, score, gameOver, gameStarted, keysPressed]);

  useEffect(() => {
    handleKeys();
  }, [keysPressed]);

  return (
    <div>
      {!gameStarted && (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-500 rounded-lg">
          <div className="text-white text-3xl mb-8 font-pixelify-sans">
            Polar Bear Walking
          </div>
          <button
            onClick={() => setGameStarted(true)}
            className="text-white text-2xl px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none font-pixelify-sans"
          >
            Start Game
          </button>
        </div>
      )}
      {gameStarted && (
        <div
          className="flex flex-col items-center justify-between h-screen relative"
          style={{
            backgroundImage: 'url("/mountains.png")',
            backgroundPosition: 'center',
          }}
        >
          {/* Displaying the score on the top left corner */}
          <div className="absolute top-0 left-0 p-4 text-white text-xl z-10 font-pixelify-sans">
            Score: {score}
          </div>

          <div className="relative w-96 h-48">
            <img
              src="/peppapig.png"
              alt="Player"
              className="absolute left-8 top-[calc(50%-50px)] w-20 h-20"
              style={{ top: `${playerY}px`, left: `${playerX}px` }}
            />
            {obstacles.map((obstacle) => (
              <img
                key={obstacle.id}
                src="/dog.png"
                alt="Obstacle"
                className="absolute w-20 h-20"
                style={{ left: `${obstacle.x}px`, top: `${obstacle.y}px` }}
              />
            ))}
          </div>
          <div className="flex flex-col items-center mt-4">
            {!gameOver && (
              <>
                <button
                  onClick={movePlayerUp}
                  className="w-32 px-4 py-2 mb-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-auto font-pixelify-sans"
                >
                  Move Up (W)
                </button>
                <div className="flex justify-between mb-2 mx-8">
                  <button
                    onClick={movePlayerLeft}
                    className="w-32 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-pixelify-sans"
                  >
                    Move Left (A)
                  </button>
                  <button
                    onClick={movePlayerRight}
                    className="w-32 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-pixelify-sans"
                  >
                    Move Right (D)
                  </button>
                </div>
                <button
                  onClick={movePlayerDown}
                  className="w-32 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mx-auto font-pixelify-sans"
                >
                  Move Down (S)
                </button>
              </>
            )}
            {gameOver && (
              <>
                <p className="text-xl font-pixelify-sans">
                  Game Over! Press Enter to Replay.
                </p>
                <button
                  onClick={restartGame}
                  className="mt-4 w-32 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-pixelify-sans"
                >
                  Replay
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Polargame;
