'use client';

import Loader from '../../components/Loader';
import { PersonOutline } from '@mui/icons-material';
import { useSession, SessionProvider } from 'next-auth/react';
import { CldUploadButton } from 'next-cloudinary';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const Profile = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        profileImage: user?.profileImage,
      });
    }
    setLoading(false);
  }, [user]);

  const {
    register,
    watch,
    setValue,
    reset,
    handleSubmit,
    formState: { error },
  } = useForm();

  const uploadPhoto = (result) => {
    setValue('profileImage', result?.info?.secure_url);
  };

  const updateUser = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${user._id}/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navigation />
      <div className="mt-16 flex flex-col gap-11 items-center justify-center">
        <h1 className="text-heading3-bold">Edit Your Profile</h1>

        <form
          className="flex flex-col gap-9"
          onSubmit={handleSubmit(updateUser)}
        >
          <div className=" flex items-center justify-between px-5 py-3 rounded-2xl cursor-pointer shadow-2xl bg-blue-300">
            <input
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
              className="w-[300px] max-sm:w-full bg-transparent outline-none placeholder-white"
            />
            <PersonOutline sx={{ color: '#737373' }} />
          </div>
          {error?.username && (
            <p className="text-red-500">{error.username.message}</p>
          )}

          <div className="flex items-center justify-between">
            <img
              src={
                watch('profileImage') || user?.profileImage || '/polarpfp2.png'
              }
              alt="profile"
              className="w-40 h-40 rounded-full"
            />
            <CldUploadButton
              options={{ maxFiles: 1 }}
              onUpload={uploadPhoto}
              uploadPreset="upecg01j"
            >
              <p className="text-body-bold">Upload new photo</p>
            </CldUploadButton>
          </div>

          <button
            className="flex items-center justify-center rounded-xl p-3 bg-blue-300 text-body-bold text-white mb-20"
            type="submit"
          >
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

const ProfileWrapper = () => {
  return (
    <SessionProvider>
      <Profile />
    </SessionProvider>
  );
};

export default ProfileWrapper;
