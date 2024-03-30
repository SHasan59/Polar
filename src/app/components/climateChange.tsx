'use client';

import Head from 'next/head';
import { useState } from 'react';

export default function ClimateChangePage() {
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleQuizSubmit = () => {
    // Redirecting to an external quiz site
    window.location.href = 'https://example.com/quiz';
  };

  return (
    <div className="parallax">
      <Head>
        <title>Save the Polar Bears - Climate Change Game</title>
        <meta
          name="description"
          content="Learn about climate change and its impacts on polar bears in this interactive game-themed website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content">
          <h1>Save the Polar Bears: The Climate Change Quest</h1>
          <p>
            Welcome to the Arctic! Embark on a journey to learn about climate
            change and its impacts on polar bears.
          </p>

          <section>
            <h2>Understanding Climate Change</h2>
            <p>
              Climate change, primarily caused by human activities such as
              burning fossil fuels and deforestation, poses a significant threat
              to our planet. The release of greenhouse gases, including carbon
              dioxide and methane, leads to a rise in global temperatures,
              resulting in various environmental changes.
            </p>
            <p>Some consequences of climate change include:</p>
            <ul>
              <li>Accelerated melting of polar ice caps and glaciers</li>
              <li>Rising sea levels, threatening coastal communities</li>
              <li>
                Increased frequency and intensity of extreme weather events
              </li>
              <li>Disruption of ecosystems and loss of biodiversity</li>
            </ul>
            <p>
              It's crucial to act now to mitigate these effects and protect
              vulnerable species like the polar bears.
            </p>
          </section>

          <section>
            <h2>Help Protect Polar Bears</h2>
            <p>
              Polar bears, the magnificent creatures of the Arctic, are among
              the most affected by climate change. The melting of sea ice, their
              primary habitat, jeopardizes their survival.
            </p>
            <p>Here's how you can contribute to their protection:</p>
            <ul>
              <li>Adopt eco-friendly practices to reduce carbon emissions</li>
              <li>
                Support organizations working to preserve polar bear habitats
              </li>
              <li>Advocate for policies that combat climate change</li>
              <li>Reduce, reuse, and recycle to minimize waste</li>
              <li>Support renewable energy initiatives</li>
              <li>Participate in conservation efforts in your community</li>
              <li>
                Educate others about climate change and sustainable living
              </li>
              <li>
                Reduce your carbon footprint by using public transportation,
                biking, or carpooling
              </li>
              <li>Plant trees to absorb carbon dioxide from the atmosphere</li>
            </ul>
            <p>
              Every action, no matter how small, contributes to the collective
              effort to safeguard the Arctic ecosystem for future generations.
            </p>
          </section>

          <section>
            <h2>Take the Climate Change Quiz</h2>
            <p>
              Test your knowledge with our interactive quiz and learn more about
              climate change and its impacts on polar bears.
            </p>
            <button onClick={handleQuizSubmit}>Start Quiz</button>
            {quizCompleted && (
              <p>
                Well done! You've completed the quiz. Let's work together to
                save polar bears!
              </p>
            )}
          </section>

          <section>
            <h2>Explore Polar Bear Habitats</h2>
            <p>
              Discover the Arctic regions where polar bears roam using our
              interactive map. Learn about the effects of climate change on
              their habitats and the importance of preserving these delicate
              ecosystems.
            </p>
            {/* Include interactive map component here */}
          </section>

          <section>
            <h2>Fascinating Facts About Polar Bears</h2>
            <p>Expand your knowledge with these interesting facts:</p>
            <ul>
              <li>
                Polar bears are the largest land carnivores, with males weighing
                up to 1,500 pounds.
              </li>
              <li>
                They possess a thick layer of blubber and dense fur for
                insulation.
              </li>
              <li>
                Sea ice serves as a vital platform for hunting seals, their
                primary prey.
              </li>
            </ul>
          </section>

          <section>
            <h2>Learn More</h2>
            <p>
              For further information and resources on climate change and polar
              bears, visit these websites:
            </p>
            <ul>
              <li>
                <a
                  href="https://www.worldwildlife.org/species/polar-bear"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WWF - Polar Bears
                </a>
              </li>
              <li>
                <a
                  href="https://www.climate.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NOAA Climate.gov
                </a>
              </li>
              <li>
                <a
                  href="https://www.nationalgeographic.com/environment/article/climate-change-effects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Geographic - Climate Change Effects
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <footer>
        <p>Join the quest to save our planet and its majestic polar bears!</p>
      </footer>

      <style jsx>{`
        .parallax {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        .parallax::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-image: url('/pole.jpg'); /* Specify the path to your image */
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          filter: brightness(0.5); /* Darken the background */
          transform: translateZ(0);
        }
        main {
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
          background-color: rgba(0, 0, 0, 0.7); /* Dark background color */
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
        .content {
          padding-top: 40px;
        }
        h1 {
          color: #fff;
          text-align: center;
          font-size: 36px;
          margin-bottom: 20px;
        }
        section {
          margin-bottom: 40px;
          color: #fff;
        }
        h2 {
          font-size: 24px;
          color: #fff;
        }
        ul {
          padding-left: 20px;
        }
        li {
          margin-bottom: 5px;
        }
        footer {
          text-align: center;
          margin-top: 40px;
          padding: 20px;
          background-color: rgba(
            0,
            0,
            0,
            0.7
          ); /* Dark footer background color */
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }
        footer p {
          color: #fff;
          margin: 0;
        }
        button {
          background-color: #0072ff; /* Blue button color */
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        button:hover {
          background-color: #0056b3; /* Darker blue on hover */
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        a:hover {
          background-color: #0056b3; /* Darker blue on hover for links */
          padding: 2px 5px; /* Add padding to links on hover for better clickability */
          border-radius: 3px; /* Add border-radius to links on hover for a button-like effect */
        }
      `}</style>
    </div>
  );
}
