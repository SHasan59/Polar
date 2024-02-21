'use client';
import React from 'react';
import { Helmet } from 'react-helmet';
import { TracingBeam } from './ui/tracing-beam';

const TeamMembers = [
  {
    name: 'Samith Hasan',
    role: 'Project Manager',
    image: 'samith.jpg',
    linkedin: 'https://www.linkedin.com/in/samith-hasan/',
    github: 'https://github.com/shasan59',
  },
  {
    name: 'Muhammad Amir',
    role: 'Resource Manager',
    image: 'muhammad.jpg',
    linkedin: 'https://www.linkedin.com/in/muhammad-amir-105a52294/',
    github: 'https://github.com/Mamir21',
  },
  {
    name: 'Gamal Fares',
    role: 'Business Analyst',
    image: 'gamal.jpg',
    linkedin: 'https://www.linkedin.com/in/gamal-fares-982a26248/',
    github: 'https://github.com/gamalfares',
  },
];

const AboutUsMain = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Polar</title>
        <meta
          name="description"
          content="Learn more about our passionate team and mission to make organization easier."
        />
      </Helmet>

      <main className="bg-gray-900 text-white min-h-screen">
        <TracingBeam>
          <div className="container mx-auto py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white-500 mb-6">
                About Us
              </h1>

              <div className="max-w-3xl mx-auto">
                <p className="text-gray-400 text-lg mb-6">
                  Welcome to our About Us page. We are a passionate team
                  dedicated to providing an innovative way to organize and
                  creating a positive impact in our community. Our mission is to
                  make organization easier. We strive for excellence in
                  everything we do, and our commitment to quality is unwavering.
                </p>
              </div>

              <div className="mt-8 bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Our Team</h2>

                {TeamMembers.map((member, index) => (
                  <div className="flex items-center mb-6" key={index}>
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {member.name}
                      </h3>
                      <p className="text-gray-400">{member.role}</p>
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
                  </div>
                ))}
              </div>


              <section className="my-8 bg-blue-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
                <p className="text-gray-400">PUT</p>

                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400 text-lg mb-6">
                  Welcome to our About Us page. We are a passionate team
                  dedicated to providing an innovative way to organize and
                  creating a positive impact in our community. Our mission is to
                  make organization easier. We strive for excellence in
                  everything we do, and our commitment to quality is unwavering.
                </p>
                {/* Add more information about achievements */}
              </section>

              <section className="my-8 bg-green-800 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400">ADD EMAIL</p>
                <p className="text-gray-400 text-lg mb-6">
                  Welcome to our About Us page. We are a passionate team
                  dedicated to providing an innovative way to organize and
                  creating a positive impact in our community. Our mission is to
                  make organization easier. We strive for excellence in
                  everything we do, and our commitment to quality is unwavering.
                </p>
                {/* Add your contact form here */}
              </section>
            </div>

          </div>
        </TracingBeam>
      </main>
    </>
  );
};

export default AboutUsMain;
