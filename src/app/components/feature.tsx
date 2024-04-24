'use client';

import Image from 'next/image';
import { Tabs } from './ui/tab';

export default function TabsDemo() {
  const tabs = [
    {
      title: 'Chatbot',
      value: 'chatbot',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Chatbot</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            Our chatbot Navi had information on every console and game
            available. Ask and your questions will be answered!
          </p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'TaskList',
      value: 'tasklist',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>TaskList</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Search',
      value: 'search',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Search</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Blog',
      value: 'blog',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Blog</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Backlog',
      value: 'backlog',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Backlog</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center flex-col my-20">
        <h2 className="text-5xl font-bold mb-8">Features</h2>
        <p className="mt-4 text-lg text-center mx-auto px-40">
          Welcome to our feature page, where excitement meets exploration! This
          is the place to discover the details about Polar, There are many
          features to explore. Click on the titles to go through each card and
          look at each unique component.
        </p>

        <br></br>
        <br></br>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-20">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/home.png"
      alt="dummy image"
      width="1000"
      height="900"
      className="rounded-3xl"
    />
  );
};
