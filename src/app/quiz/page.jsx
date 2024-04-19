'use client';

import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useState } from "react";

const Quiz = () => {
  const quizQuestions = [
    {
      question: "What is your favorite season?",
      answers: ["Winter", "Spring", "Summer", "Autumn"],
    },
    {
      question: "What is your favorite activity?",
      answers: ["Hiking", "Swimming", "Reading", "Sleeping"],
    },
  ];

  const bearTypes = {
    Winter: "Polar Bear",
    Spring: "Panda Bear",
    Summer: "Grizzly Bear",
    Autumn: "Sun Bear",
  };

  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerChange = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    });
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const firstQuestionAnswer = answers[0];
    const bearType = bearTypes[firstQuestionAnswer] || "Unknown Bear";
    alert(`You are a ${bearType}!`);
  };

  const renderQuestion = (questionData, index) => (
    <form onSubmit={handleNextQuestion} key={index} className="quiz-form bg-white p-8 rounded-lg shadow-lg">
      <h2 className="question-title text-2xl text-blue-800 mb-4 font-bold">{questionData.question}</h2>
      {questionData.answers.map((answer) => (
        <div key={answer} className="answer-option mt-4">
          <label className="flex items-center cursor-pointer text-blue-600 hover:text-blue-900">
            <input
              type="radio"
              name={`question${index}`}
              value={answer}
              checked={answers[index] === answer}
              onChange={() => handleAnswerChange(answer)}
              className="radio-button mr-3 w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-600 rounded-full"
            />
            <span className="answer-text text-lg">{answer}</span>
          </label>
        </div>
      ))}
      <button
        type="submit"
        className="submit-button w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors mt-6 font-bold"
      >
        {currentQuestion < quizQuestions.length - 1 ? 'Next' : 'Submit'}
      </button>
    </form>
  );

  return (
    
    <>
      <Navigation />
      <main className=" " > 
      <div
        className="quiz-container bg-cover bg-center bg-no-repeat p-10 rounded-lg max-w-md mx-auto border-4 border-blue-300"
        style={{ backgroundImage: 'url("/")', backgroundSize: 'cover', backgroundBlendMode: 'overlay' }}
      >
        <h1 className="quiz-title text-center text-4xl font-bold text-blue-900 mb-8">Fun Bear Quiz!</h1>
        {renderQuestion(quizQuestions[currentQuestion], currentQuestion)}
      </div>
      </main> 
      <Footer />
    </>
  );
};