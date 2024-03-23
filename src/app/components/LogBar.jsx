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
    <div className="top-0 sticky px-10 py-5 flex items-center justify-between bg-blue-200 rounded-xl">
      <Link href="/chats">
        <img src="/polar.png" alt="logo" className=" w-20 h-auto" />
      </Link>

      <div className="flex items-center gap-8 max-sm:hidden">
        <Link
          href="/chats"
          className={`${
            pathname === '/chats' ? 'text-red-900' : ''
          } text-heading4-bold`}
        >
          Chats
        </Link>
        <Link
          href="/contacts"
          className={`${
            pathname === '/contacts' ? 'text-blue-900' : ''
          } text-heading4-bold`}
        >
          Contacts
        </Link>

        <Logout
          sx={{ color: '#737373', cursor: 'pointer' }}
          onClick={handleLogout}
        />

        <Link href="/profile">
          <img
            src={user?.profileImage || '/person.jpg'}
            alt="profile"
            className=" w-11 h-11 rounded-full object-cover object-center"
          />
        </Link>
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
