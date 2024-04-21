'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavigationLink from './NavigationLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: 'About',
    path: '/aboutus',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Chat',
    path: '/chats',
  },
  {
    title: 'Climate',
    path: '/climatechange',
  },
  {
    title: 'Gamelog',
    path: '/Yourgames',
  },
  {
    title: 'Navi',
    path: '/chatbot',
  },
  {
    title: 'Search',
    path: '/search',
  },
  {
    title: 'Tasks',
    path: '/ToDo',
  },
  {
    title: 'Timelog',
    path: '/timelog',
  },
];

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='"fixed top-0 left-0 right-0 z-10 bg-black-500 bg-opacity-100'>
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
        <Link href={'/'}>
          <img
            src="/polar.png"
            alt="Polar Logo"
            className="cursor-pointer w-24 h-34"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-blue-300 hover:text-blue-300 hover:border-white "
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-blue-300 hover:text-blue-300 hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavigationLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};
export default Navigation;
