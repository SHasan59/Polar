'use client';

import Image from 'next/image';
import { Tabs } from './ui/tab';

export default function TabsDemo() {
  const tabs = [
    {
      title: 'About',
      value: 'about',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">About Us</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            Learn about the developers and their inspiration for making the
            website here
          </p>
          <About />
        </div>
      ),
    },
    {
      title: 'Blog',
      value: 'blog',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Blog</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            The blog page allows you to learn about the current events of
            videogames
          </p>
          <Blog />
        </div>
      ),
    },

    {
      title: 'Chat',
      value: 'chat',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Chat</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            Chatrooms allow you to message others on polar, whether its a solo
            or group chat.
          </p>
          <Chat />
        </div>
      ),
    },

    {
      title: 'Climate',
      value: 'climate',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Climate</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            Learn about climate change and the population of polar bears here
          </p>
          <Climate />
        </div>
      ),
    },
    {
      title: 'Gamelog',
      value: 'gamelog',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Gamelog</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            The gamelog allows you to keep track of all your games, regardless
            of the platform
          </p>
          <Gamelog />
        </div>
      ),
    },
    {
      title: 'Navi',
      value: 'Navi',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Navi</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            Our chatbot Navi had information on every console and game
            available. Ask and your questions will be answered!
          </p>
          <Navi />
        </div>
      ),
    },
    {
      title: 'Search',
      value: 'search',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Search</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            You can search every game on any platform here, find your next game
            here
          </p>
          <Search />
        </div>
      ),
    },
    {
      title: 'Task',
      value: 'task',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Tasklist</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            Add all your tasks and organize them to efficently tackle missions
          </p>
          <Task />
        </div>
      ),
    },
    {
      title: 'Timelog',
      value: 'timelog',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-blue-200">
          <p className="text-center text-3xl">Timelog</p>
          <p className="text-lg text-center  font-normal mt-2 mb-2">
            The timelog allows you to keep track of the total hours you spend
            playing all your games
          </p>
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

const Search = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/search.png"
        alt="search"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const Navi = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/navi.png"
        alt="Navi"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const Task = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/task.png"
        alt="task"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const Blog = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/blog.png"
        alt="blog"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const Gamelog = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/gamelog.png"
        alt="gamelog"
        width={750}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const Chat = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/chat.png"
        alt="chat"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const About = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/about.png"
        alt="about"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};

const Climate = () => {
  return (
    <div className="flex justify-center">
      <Image
        src="/climate.png"
        alt="climate"
        width={800}
        height={800}
        className="rounded-3xl"
      />
    </div>
  );
};
