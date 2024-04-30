'use client';

import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const Form = ({ type }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    if (type === 'register') {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push('/login');
      }

      if (res.error) {
        toast.error('Something went wrong');
      }
    }

    if (type === 'login') {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });

      if (res.ok) {
        router.push('/chats');
      }

      if (res.error) {
        toast.error('Invalid email or password');
      }
    }
  };

  return (
    <div className="bg-gray-900">
      <div className="w-full h-lvh flex items-center justify-center">
        <div className="w-1/3 py-7 px-4 max-sm:w-5/6 max-lg:w-2/3 max-xl:w-1/2 flex flex-col items-center justify-center gap-6 bg-gray-200 rounded-3xl">
          <img src="/polar.png" alt="logo" className="w-52 h-auto" />

          <form
            className="flex flex-col items-center gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {type === 'register' && (
              <div>
                <div className="flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl text-black bg-sky-200 text-black">
                  <input
                    defaultValue=""
                    {...register('username', {
                      required: 'Username is required',
                      validate: (value) => {
                        if (value.length < 3) {
                          return 'Username must be at least 3 characters';
                        }
                      },
                    })}
                    type="text"
                    placeholder="Username"
                    className="w-[300px] max-sm:w-full bg-transparent outline-none"
                  />
                  <PersonOutline sx={{ color: '#737373' }} />
                </div>
                {errors.username && (
                  <p className="text-red-500">{errors.username.message}</p>
                )}
              </div>
            )}

            <div>
              <div className="flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl text-black bg-sky-200 text-black">
                <input
                  defaultValue=""
                  {...register('email', { required: 'Email is required' })}
                  type="email"
                  placeholder="Email"
                  className="w-[300px] max-sm:w-full bg-transparent outline-none"
                />
                <EmailOutlined sx={{ color: '#737373' }} />
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl text-black bg-sky-200 ">
                <input
                  defaultValue=""
                  {...register('password', {
                    required: 'Password is required',
                    validate: (value) => {
                      if (
                        value.length < 5 ||
                        !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)
                      ) {
                        return 'Must be 5 characters and one special character';
                      }
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-[300px] max-sm:w-full bg-transparent outline-none"
                />
                <LockOutlined sx={{ color: '#737373' }} />
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <button
              className="w-full px-5 py-3 mt-5 mb-7 rounded-xl cursor-pointer bg-blue-800 hover:bg-blue-500 text-white"
              type="submit"
            >
              {type === 'register' ? 'Join Polar' : 'Dive Into Chats'}
            </button>
          </form>

          {type === 'register' ? (
            <Link href="/login" className="link">
              <p className="text-center text-black">
                Already have an account? Login //add strong here
              </p>
            </Link>
          ) : (
            <Link href="/register" className="link">
              <p className="text-center text-black">
                Don't have an account? Sign Up
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
