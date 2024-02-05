'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavigationLink from './NavigationLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: 'Search',
    path: '/search',
  },
  {
    title: 'About Us',
    path: '/aboutus',
  },
  {
    title: 'Contact',
    path: '/contact',
  },

  {
    title: 'Backlog',
    path: '/mock',
  },
];

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='"fixed top-0 left-0 right-0 z-10 bg-black-500 bg-opacity-100'>
      <div className="flex flex-wrap items-center justify-between mx-auto px-4py-2 ">
      <Link href={'/'}>
          <img
            src="/polar-logo.png"
            alt="Polar Logo"
            className="cursor-pointer w-80 h-40" // Adjust size here also change logo to something else
          />

        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
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
