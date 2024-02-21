'use client';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import '../css/styles.css';
import Link from 'next/link';
import { Button } from './ui/moving-border';
import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from './ui/text-generate-effect';

const HomeMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const words = ` Welcome to our Home page. We are a passionate team dedicated to
  providing an innovative way to organize and creating a positive
  impact in our community.
  `;

  const words2 = `  Our mission is to make organization easier. We strive for excellence
  in everything we do, and our commitment to quality is unwavering.
  `;

  const words3 = `  Feel free to explore our website and learn more about what makes us
  unique. If you have any questions or would like to get in touch,
  please don't hesitate to contact us.
  `;

  return (
    <main>
      <div className="h-[40rem] relative w-full bg-blue-900 flex flex-col items-center justify-center overflow-hidden ">
        {/* Sparkles in the background */}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Content in front of sparkles */}
        <div className="relative z-10">
          <h1 className="text-blue-500 text-5xl font-bold font-orbitron text-center">
            Polar
          </h1>
          <br />
          {/* Image */}
          <Link href="/polarbearwalking">
            <img
              src="polarbear.webp"
              alt="Polar Bear"
              className="max-w-80 max-h-80 mx-auto mb-4 rounded-full cursor-pointer"
            />
          </Link>
          <TextGenerateEffect className="text-white" words={words} />
          <TextGenerateEffect words={words2} />
          <TextGenerateEffect words={words3} />
          {/* Rounded Buttons */}
          <div className="flex justify-center mt-4">
            <Button className="bg-slate-900 text-white  border-slate-800">
              <Link href="/search">Search Games</Link>
            </Button>
            <Link href="/aboutus">
              <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white  border-slate-800"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeMain;
