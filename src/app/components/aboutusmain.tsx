"use client";
import React from "react";
import { Helmet } from "react-helmet";

const TeamMembers = [
  { name: "Samith Hasan", role: "Project Manager", image: "team-member-2.jpg" },
  { name: "Muhammad Amir", role: "Resource Manager", image: "team-member-1.jpg" },
  { name: "Gamal Fares", role: "Business Analyst", image: "team-member-3.jpg" },
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
        <div className="container mx-auto py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white-500 mb-6">About Us</h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-400 text-lg mb-6">
                Welcome to our About Us page. We are a passionate team dedicated to providing an innovative way to organize and creating a positive impact in our community. 
                Our mission is to make organization easier. We strive for excellence in everything we do, and our commitment to quality is unwavering.
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
                    <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <section className="my-8 bg-blue-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Achievements</h2>
              <p className="text-gray-400">
                Over the years, we have successfully delivered innovative solutions to our clients, earning recognition for our commitment to excellence.
              </p>
              {/* Add more information about achievements */}
            </section>

            <section className="my-8 bg-green-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-400">
                If you have any inquiries or would like to collaborate, feel free to reach out to us through our contact form or the provided contact details.
              </p>
              {/* Add your contact form here */}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutUsMain;
