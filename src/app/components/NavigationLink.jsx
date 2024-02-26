import Link from 'next/link';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#fdfdfd] sm:text-2xl rounded md:p-0  hover:text-blue-600 font-pixelify-sans"
    >
      {title}
    </Link>
  );
};

export default NavLink;
