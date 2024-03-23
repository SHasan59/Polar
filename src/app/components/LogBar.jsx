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
    <div className="topbar">
      <Link href="/chats">
        <img src="/polar.png" alt="logo" className="logo" />
      </Link>

      <div className="menu">
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
            className="profilePhoto"
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
