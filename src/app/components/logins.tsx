'use client';
import React from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Logins = () => {
  const { data: session }: any = useSession();
  console.log('Session:', session);
  return (
    <div className="flex justify-end">
      <ul>
        <div className="flex gap-10 ">
          {!session ? (
            <>
              <div className="flex gap-10">
                <Link href="/login">
                  <li>Login</li>
                </Link>
                <Link href="/register">
                  <li>Register</li>
                </Link>
              </div>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Logins;
