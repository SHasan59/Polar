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
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-blue-700"
      style={{
        backgroundImage: 'url("POLAR BEAR STANDING.png")',
        backgroundSize: '',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-screen-md bg-black p-5 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="text-4xl font-bold text-blue-200 mb-2">NAVi</div>
        </div>
        <p className="text-blue-600 text-lg">ASK ANYTHING</p>

        <div className="mb-4 overflow-auto" style={{ height: '400px' }}>
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

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask me anything"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1 p-2 rounded-lg  text-black bg-slate-500"
          />

          {isLoading ? (
            <div className="bg-blue-500 text-white p-2 rounded-lg animate-pulse">
              Loading..
            </div>
          ) : (
            <button
              onClick={handleUserInput}
              className="bg-blue-500 text-white p-2 rounded-lg   hover:bg-blue-600"
            >
              Ask
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
