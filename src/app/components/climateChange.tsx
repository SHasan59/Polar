'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import GlobeDemo from './GlobeDemo';

export default function ClimateChangePage() {
  const [quizCompleted, setQuizCompleted] = useState(false);

  return (
    <div className="climate-change-page">
      <Head>
        <title>Save the Polar Bears - Climate Change Game</title>
        <meta
          name="description"
          content="Learn about climate change and its impacts on polar bears in this interactive game-themed website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="page-header">
        <h1>Save the Polar Bears: The Climate Change Quest</h1>
      </header>

      <main className="content">
        <section className="intro">
          <p>
            Welcome to the Arctic! Embark on a journey to learn about climate
            change and its impacts on polar bears.
          </p>
        </section>

        <section className="understanding-climate-change">
          <h2>Understanding Climate Change</h2>

          <p>
            Climate change, primarily caused by human activities such as burning
            fossil fuels and deforestation, poses a significant threat to our
            planet.
          </p>

          <ul>
            <li>Accelerated melting of polar ice caps and glaciers</li>
            <li>Rising sea levels, threatening coastal communities</li>
            <li>Increased frequency and intensity of extreme weather events</li>
            <li>Disruption of ecosystems and loss of biodiversity</li>
          </ul>

          <p>
            It's crucial to act now to mitigate these effects and protect
            vulnerable species like polar bears.
          </p>
        </section>

        <section className="help-protect-polar-bears">
          <h2>Help Protect Polar Bears</h2>

          <p>
            Polar bears, the magnificent creatures of the Arctic, are among the
            most affected by climate change. The melting of sea ice, their
            primary habitat, jeopardizes their survival.
          </p>
          <ul>
            <li>Adopt eco-friendly practices to reduce carbon emissions</li>
            <li>
              Support organizations working to preserve polar bear habitats
            </li>

            <li>Advocate for policies that combat climate change</li>
            <li>Reduce, reuse, and recycle to minimize waste</li>
            <li>Support renewable energy initiatives</li>
            <li>Participate in conservation efforts in your community</li>
            <li>Educate others about climate change and sustainable living</li>

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

        <section className="climate-change-quiz">
          <h2>Take the bear Quiz</h2>
          <p>find out what bear you are!!</p>
          <button className="bg-slate-900 text-white  border-slate-800">
            <Link href="/quiz">Quiz</Link>
          </button>
          {quizCompleted && (
            <p>
              Well done! You've completed the quiz. Let's work together to save
              polar bears!
            </p>
          )}
        </section>

        <section className="polar-bear-facts">
          <h2>Explore Polar Bear Habitats</h2>

          <p>
            Discover the Arctic regions where polar bears roam using our
            interactive map. Learn about the effects of climate change on their
            habitats and the importance of preserving these delicate ecosystems.
          </p>
        </section>

        <section className="interesting-facts">
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

        <section className="resources">
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
        <GlobeDemo sampleArcs={[]} />
      </main>

      <footer className="page-footer">
        <p>Join the quest to save our planet and its majestic polar bears!</p>
      </footer>

      <style jsx>{`
        /* Page Styles */
        .climate-change-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Background */
        .climate-change-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          background-image: url('/aurora2.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          filter: brightness(0.5);
          z-index: -1;
        }

        /* Header */
        .page-header h1 {
          color: #fff;
          text-align: center;
          margin: 20px;
          font-size: 2.5rem;
        }

        /* Main Content */
        .content {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          color: white;
        }

        /* Section */
        section {
          margin-bottom: 40px;
        }

        /* Headings */
        h2 {
          color: #fff;
          font-size: 2rem;
          margin-bottom: 10px;
        }

        /* Paragraphs and Lists */

        p,
        ul {
          color: white;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }

        /* Button */
        button {
          background-color: #0072ff;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0056b3;
        }

        /* Links */
        a {
          color: white;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        /* Footer */
        .page-footer {
          text-align: center;
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
