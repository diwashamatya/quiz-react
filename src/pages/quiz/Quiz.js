import React from "react";
import { useState } from "react";

const quiz = [
  {
    id: 1,
    question: "What does 'happy' mean?",
    answers: [
      { answer: "Üzgün", trueAnswer: false },
      { answer: "Sinirli", trueAnswer: false },
      { answer: "Mutlu", trueAnswer: true },
      { answer: "Sıkıcı", trueAnswer: false },
    ],
  },
  {
    id: 2,
    question: "What does 'book' mean?",
    answers: [
      { answer: "Telefon", trueAnswer: false },
      { answer: "Anahtar", trueAnswer: false },
      { answer: "Kitap", trueAnswer: true },
      { answer: "Kalem", trueAnswer: false },
    ],
  },
  {
    id: 3,
    question: "What does 'hot' mean?",
    answers: [
      { answer: "Soğuk", trueAnswer: false },
      { answer: "Sıcak", trueAnswer: true },
      { answer: "Nemli", trueAnswer: false },
      { answer: "Kuru", trueAnswer: false },
    ],
  },
  {
    id: 4,
    question: "What does 'red' mean?",
    answers: [
      { answer: "Kırmızı", trueAnswer: true },
      { answer: "Yeşil", trueAnswer: false },
      { answer: "Mavi", trueAnswer: false },
      { answer: "Sarı", trueAnswer: false },
    ],
  },
  {
    id: 5,
    question: "What does 'cold' mean?",
    answers: [
      { answer: "Sıcak", trueAnswer: false },
      { answer: "Nemli", trueAnswer: false },
      { answer: "Kuru", trueAnswer: false },
      { answer: "Soğuk", trueAnswer: true },
    ],
  },
  {
    id: 6,
    question: "What does 'small' mean?",
    answers: [
      { answer: "Büyük", trueAnswer: false },
      { answer: "Küçük", trueAnswer: true },
      { answer: "Yüksek", trueAnswer: false },
      { answer: "Ağır", trueAnswer: false },
    ],
  },
  {
    id: 7,
    question: "What does 'fast' mean?",
    answers: [
      { answer: "Yavaş", trueAnswer: false },
      { answer: "Hızlı", trueAnswer: true },
      { answer: "Uzun", trueAnswer: false },
      { answer: "Kısa", trueAnswer: false },
    ],
  },
  {
    id: 8,
    question: "What does 'big' mean?",
    answers: [
      { answer: "Küçük", trueAnswer: false },
      { answer: "Düşük", trueAnswer: false },
      { answer: "Büyük", trueAnswer: true },
      { answer: "Yüksek", trueAnswer: false },
    ],
  },
  {
    id: 9,
    question: "What does 'long' mean?",
    answers: [
      { answer: "Kısa", trueAnswer: false },
      { answer: "Hızlı", trueAnswer: false },
      { answer: "Yavaş", trueAnswer: false },
      { answer: "Uzun", trueAnswer: true },
    ],
  },
  {
    id: 10,
    question: "What does 'old' mean?",
    answers: [
      { answer: "Genç", trueAnswer: false },
      { answer: "Güzel", trueAnswer: false },
      { answer: "Yaşlı", trueAnswer: true },
      { answer: "Çirkin", trueAnswer: false },
    ],
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (trueAnswer) => {
    if (trueAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion + 1 < quiz.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      // Quiz is finished
      // You can display the score or perform any other action
      console.log("Quiz finished. Score:", score);
    }
  };

  const currentQuizQuestion = quiz[currentQuestion];

  return (
    <div>
      <h3>{currentQuizQuestion.question}</h3>
      <select>
        {currentQuizQuestion.answers.map((answer, index) => (
          <option
            key={index}
            onClick={() => handleAnswerClick(answer.trueAnswer)}
          >
            {answer.answer}
          </option>
        ))}
      </select>
    </div>
  );
}
