'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TracingBeam } from './ui/tracing-beam';
import { EvervaultCard, Icon } from './ui/evervault-card';

const TeamMembers = [
  {
    name: 'Samith Hasan',
    role: 'Lead Developer',
    image: 'samith.jpg',
    linkedin: 'https://www.linkedin.com/in/samith-hasan/',
    github: 'https://github.com/shasan59',
  },
  {
    name: 'Muhammad Amir',
    role: 'Developer',
    image: 'muhammad.jpg',
    linkedin: 'https://www.linkedin.com/in/muhammad-amir-105a52294/',
    github: 'https://github.com/Mamir21',
  },
  {
    name: 'Gamal Fares',
    role: 'Developer',
    image: 'gamal.jpg',
    linkedin: 'https://www.linkedin.com/in/gamal-fares-982a26248/',
    github: 'https://github.com/gamalfares',
  },
];

const AboutUsMain = () => {
  return (
    <>
      <main className="bg-gray-900 text-white min-h-screen">
        <TracingBeam>
          <div className="container mx-auto py-12">
            <div className="text-center">
              <section className="border border-black/[0.0] dark:border-white/[0.2] flex items-start w-full h-[10rem]">
                <EvervaultCard text="About Us" />
              </section>

              <div className="max-w-3xl mx-auto">
                <p className="text-white text-lg mb-6">
                  Welcome to our About Us page. We are a passionate team
                  dedicated to providing an innovative way to organize and
                  creating a positive impact in our community. Our mission is to
                  make organization easier. We strive for excellence in
                  everything we do, and our commitment to quality is unwavering.
                </p>
              </div>

              <div className="mt-8 bg-gray-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>

                {TeamMembers.map((member, index) => (
                  <motion.div
                    className="flex items-center mb-6"
                    key={index}
                    initial={{ opacity: 0, y: 20 }} // Initial animation properties
                    animate={{ opacity: 1, y: 0 }} // Animation properties when component appears
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Transition properties
                  >
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {member.name}
                      </h3>
                      <p
                        className="text-gray-400"
                        style={{ textAlign: 'left' }}
                      >
                        {member.role}
                      </p>
                      <div className="flex mt-2">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/linkedin-icon.svg"
                            alt="LinkedIn"
                            className="w-6 h-6 mr-2"
                          />
                        </a>
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/github-icon.svg"
                            alt="GitHub"
                            className="w-6 h-6"
                          />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <section className="my-8 bg-blue-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">About The Team</h2>
                <p className="text-gray-400"></p>
                <p className="text-white text-m mb-6">
                  The team built out of unique members who met on the Brooklyn
                  College experience. There is something about a team that comes
                  together to work in perfect harmony. Each member of the team
                  has their own set of skills that allow them to tackle hard
                  tasks in quick ways.
                </p>
              </section>

              <section className="my-8 bg-blue-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Inspiration</h2>
                <p className="text-gray-400"></p>
                <div className="flex justify-center">
                  {' '}
                  {/* Added flex container */}
                  <div className="max-w-2xl rounded-lg overflow-hidden mb-4">
                    {' '}
                    {/* Added max-width container and rounded corners */}
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/M0a_68xnboc?si=IRZh2oPeobYvyJTS"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <p className="text-white- text-m mb-6">
                  This video had inspired us to create this website andx notify
                  users of the dangers that polar bears are facing while
                  creating a fucntional website for videogames.{' '}
                </p>
              </section>

              <section className="my-8 bg-gray-800 p-6 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
                <p>
                  Email:{' '}
                  <a href="mailto:polarteam@gmail.com">polarteam@gmail.com</a>
                </p>
                <p>
                  Instagram:{' '}
                  <a href="https://www.instagram.com/ProjectPolar">
                    @ProjectPolar
                  </a>
                </p>
                <p>
                  Facebook:{' '}
                  <a href="https://www.facebook.com/ProjectPolar">
                    ProjectPolar
                  </a>
                </p>
                <p>
                  Twitter:{' '}
                  <a href="https://twitter.com/PolarTeam7">PolarTeam</a>
                </p>
                <p>
                  Have any questions, comments, or ideas to share? We'd love to
                  hear from you! Feel free to reach out with any feedback or
                  suggestions.
                </p>
              </section>
            </div>
          </div>
        </TracingBeam>
      </main>
    </>
  );
};

export default AboutUsMain;
