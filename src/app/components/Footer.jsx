import React from 'react';
import Link from 'next/link';
import "../css/styles.css";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white text-2xl">
      <div className="container p-12 flex justify-between items-center font-pixelify-sans mx-auto">
        <span>Polar</span>
        <div className="justify-center">
          <div className="flex gap-10">
            <Link href="/terms-of-service" className="text-slate-600 font-pixelify-sans hover:text-red-500">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-slate-600 font-pixelify-sans hover:text-red-500">
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className="text-slate-600 font-pixelify-sans">© 2024</p>
      </div>
    </footer>
  );
};

export default Footer;


