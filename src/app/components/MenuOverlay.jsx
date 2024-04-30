import NavigationLink from './NavigationLink';
import React from 'react';

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 text-center text-xl">
      {links.map((link, index) => (
        <li key={index}>
          <NavigationLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
