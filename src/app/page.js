"use client"; // Menandakan bahwa ini adalah Client Component

import { useState } from 'react';

const questions = [
  {
    question: "Apa ibu kota Indonesia?",
    options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
    answer: "Jakarta",
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    options: ["Soekarno", "Suharto", "Habibie", "Jokowi"],
    answer: "Soekarno",
  },
  {
    question: "Apa warna bendera Indonesia?",
    options: ["Merah Putih", "Biru Putih", "Merah", "Hitam"],
    answer: "Merah Putih",
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <h1>Skor Anda: {score} dari {questions.length}</h1>
          <button onClick={handleRestartQuiz}>Ulang Kuis</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={option === selectedOption ? 'selected' : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
}
