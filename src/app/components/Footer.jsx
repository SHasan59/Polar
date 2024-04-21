import Link from 'next/link';
import React from 'react';
import '../css/styles.css';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#ffffff] border-l-transparent border-r-transparent text-white text-2xl">
      <div className="container p-12 flex flex-col sm:flex-row justify-between items-center font-pixelify-sans mx-auto">
        <span className="text-2xl">Polar</span>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 items-center">
          <Link
            href="/termsofservice"
            className="text-slate-600 font-pixelify-sans hover:text-blue-600 text-2xl"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacypolicy"
            className="text-slate-600 font-pixelify-sans hover:text-blue-600 text-2xl"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-white-600 font-pixelify-sans text-2xl">© 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
