
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import Modal from '../components/Modal';
import '../css/styles.css';
import Link from 'next/link';
import { Button } from './ui/moving-border';
import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from './ui/text-generate-effect';
import TabsDemo from './feature';

const HomeMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const words = ` Welcome to our Home page. We are a passionate team dedicated to
  providing an innovative way to organize and creating a positive
  impact in our community.

  Our mission is to make organization easier. We strive for excellence
  in everything we do, and our commitment to quality is unwavering.

  Feel free to explore our website and learn more about what makes us
  unique. If you have any questions or would like to get in touch,
  please don't hesitate to contact us.
  `;


  return (
    <main>
      <div className="h-[40rem] relative w-full bg-blue-900 flex flex-col items-center justify-center overflow-hidden ">
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
         
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.9 }} 
          >
            <Link href="/polarbearwalking">
              <img
                src="polarbear.webp"
                alt="Polar Bear"
                className="max-w-80 max-h-80 mx-auto mb-4 rounded-full cursor-pointer"
              />
            </Link>
          </motion.div>
          <p className="text-center ">
            Welcome to our Home page. We are a passionate team dedicated to
            providing an innovative way to organize and creating a positive
            impact in our community. Our mission is to make organization easier.
            We strive for excellence in everything we do, and our commitment to
            quality is unwavering. Feel free to explore our website and learn
            more about what makes us unique. If you have any questions or would
            like to get in touch, please don't hesitate to contact us.
          </p>


          <div className="flex justify-center mt-4">
            <Button className="bg-slate-900 text-white  border-slate-800">
              <Link href="/search">Search Games</Link>
            </Button>
            <Link href="/features">
              <Button
                borderRadius="1.75rem"
                className="bg-slate-900 text-white  border-slate-800"
              >
                Features
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleToggleModal}>Content of the modal</Modal>
      )}
    </main>
  );
};

export default HomeMain;
