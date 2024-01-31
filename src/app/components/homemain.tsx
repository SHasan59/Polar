import React from "react";
import "../css/styles.css";



export default function HomeMain() {
  return (
    <main className="bg-gray-700">
      <title>Home</title>
      <div className="text-center">
        <h1 className="text-blue-500 text-5xl font-bold font-rubik-glitch-pop">
          Polar Bear Walking
        </h1>

        <br />

        {/* Image */}
        <img
          src="polarbear.webp"
          alt="Polar Bear"
          className="max-w-full max-h-64 mx-auto mb-4 rounded-lg"
        />

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

        <p>Add cards that might go to different pages</p>

        {/* Rounded Buttons */}
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full mr-4">
            Button 1
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Button 2
          </button>
        
         
        </div>
      </div>
    </main>
  );
}
