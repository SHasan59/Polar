//npm install i openai
'use client';
import { useState, useEffect } from 'react';
import OpenAi from 'openai';

const openai = new OpenAi({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function ChatBot() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = async () => {
    setIsLoading(true);

    // Use the functional form of setChatHistory to correctly update the state
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'user', content: userInput },
    ]);

    const chatCompletion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: 'assistant', content: userInput }],
      model: 'gpt-3.5-turbo',
    });

    setChatHistory((prevChat) => [
      ...prevChat,
      { role: 'assistant', content: chatCompletion.choices[0].message.content },
    ]);

    setUserInput('');
    setIsLoading(false);
  };

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-md bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="text-4xl font-bold text-blue-800 mb-2">NAVi</div>
        </div>
        <p className="text-gray-600 text-lg">ASK ANYTHING</p>

        <div className="mb-4" style={{ height: '400px', overflow: 'auto' }}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={`${
                message.role === 'user' ? 'text-right' : 'text-left'
              } mb-2`}
            >
              <div
                className={`rounded-full p-2 max-w-md mx-4 inline-block ${
                  message.role === 'user'
                    ? 'bg-blue-300 text-blue-800'
                    : 'bg-green-300 text-green-800'
                }`}
              >
                {message.role === 'user' ? 'User' : '<Navi/>'}
              </div>
              <div
                className={`max-w-md mx-4 my-2 inline-block ${
                  message.role === 'user'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-green-100 text-green-800'
                } p-2 rounded-md`}
              >
                {message.content}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="ask me anything"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-black" // Add border style here
          />

          {isLoading ? (
            <div className="bg-blue-500 text-white p-2 rounded-r-lg animate-pulse">
              Loading..
            </div>
          ) : (
            <button
              onClick={handleUserInput}
              className="bg-blue-500 text-white p-2 rounded-r-lg border border-black hover:bg-blue-600" // Add border style here
            >
              Ask
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
