'use client';
import { Logout } from '@mui/icons-material';
import { signOut, useSession, SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LogBar = () => {
  const pathname = usePathname();

  // Function to handle logout
  const handleLogout = async () => {
    signOut({ callbackUrl: '/' });
  };

  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="top-0  px-10 py-5 flex items-center justify-between bg-blue-300 rounded-xl">
      <Link href="/profile">
        <img
          src={user?.profileImage || '/polarpfp.png'}
          alt="profile"
          className=" w-11 h-11 rounded-full object-cover object-center"
        />
      </Link>

      <div className="flex items-center gap-8 max-sm:hidden">
        <Link
          href="/chats"
          className={`${
            pathname === '/chats' ? 'text-white' : ''
          } text-heading4-bold`}
        >
          Chats
        </Link>
        <Link
          href="/contacts"
          className={`${
            pathname === '/contacts' ? 'text-white' : ''
          } text-heading4-bold`}
        >
          Contacts
        </Link>

        <Logout
          sx={{ color: '#737373', cursor: 'pointer' }}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};

const LogBarWrapper = () => {
  return (
    <SessionProvider>
      <LogBar />
    </SessionProvider>
  );
};

export default LogBarWrapper;
