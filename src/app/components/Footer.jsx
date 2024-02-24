import React from 'react';
import Link from 'next/link';
import "../css/styles.css";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white text-2xl">
      <div className="container p-12 flex flex-col sm:flex-row justify-between items-center font-pixelify-sans mx-auto">
        <span className="text-lg sm:text-2xl lg:text-3xl">Polar</span>
        <div className="justify-center">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
            <Link href="/termsofservice" className="text-slate-600 font-pixelify-sans hover:text-red-500 text-md sm:text-lg lg:text-3xl">
              Terms of Service
            </Link>
            <Link href="/privacypolicy" className="text-slate-600 font-pixelify-sans hover:text-red-500 text-md sm:text-lg lg:text-3xl">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="text-white-600 font-pixelify-sans text-md sm:text-xs lg:text-3xl">© 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
