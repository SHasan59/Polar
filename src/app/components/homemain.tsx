'use client';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../css/styles.css';
import Link from 'next/link';

const HomeMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main
      className="bg-gray-700"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <title>Home</title>
      <div className="text-center">
        <h1 className="text-blue-500 text-5xl font-bold font-orbitron">
          Polar
        </h1>

        <br />

        {/* Image */}

        <Link href="/polarbearwalking">
          <img
            src="polarbear.webp"
            alt="Polar Bear"
            className="max-w-80 max-h-80 mx-auto mb-4 rounded-full"
          />
        </Link>

        <p>
          Welcome to our Home page. We are a passionate team dedicated to
          providing an innovative way to organize and creating a positive impact
          in our community.
        </p>

        <br />

        <p>
          Our mission is to make organization easier. We strive for excellence
          in everything we do, and our commitment to quality is unwavering.
        </p>

        <br />

        <p>
          Feel free to explore our website and learn more about what makes us
          unique. If you have any questions or would like to get in touch,
          please don't hesitate to contact us.
        </p>

        {/* Rounded Buttons */}
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4"
            onClick={handleToggleModal}
          >
            Search Games
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            About Us
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={handleToggleModal}>Content of the modal</Modal>
      )}
    </main>
  );
};

export default HomeMain;
