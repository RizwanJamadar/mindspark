import React, { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import Landing from "../components/Landing";
import QuizHistory from "./QuizHistory";
import QuizResults from "./QuizResults";

import { quizData } from "../utils/index";
import QuizQuestion from "../components/QuizQuestion";
import saveToIndexedDB from "../utils/db.js"

const QuizPage = () => {
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [history, setQuizHistory] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isQuizStarted && timeLeft > 0 && !showResults) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isQuizStarted, showResults]);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setTimeLeft(30);
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption == quizData[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1); 
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      const finalScore = score < 1 ? score : score + 1;
      const newHistory = { date: new Date().toLocaleDateString(), finalScore, name };
      setQuizHistory([...history, newHistory]);
      saveToIndexedDB(newHistory);
      setShowResults(true);
      setIsQuizStarted(false);
    }
  };

  console.log(history);

  if (!isQuizStarted && !showResults) {
    return <Landing startQuiz={startQuiz} setName={setName} />;
  }

  console.log(name);

  return (
    <div className="space-y-6">
      {!showResults ? (
        <div className="p-6 text-center bg-[#f7f7f7] shadow-lg rounded-2xl border border-gray-20">
          {!quizData[currentQuestion].options ? (
            <div className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit mb-3">
              Section: Integer-Based
            </div>
          ) : (
            <div className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full w-fit mb-3">
              Section: Multiple-Choice
            </div>
          )}

          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Question {currentQuestion + 1} of {quizData.length}
            </div>
            <div
              className={`flex items-center gap-2 text-sm font-medium ${
                timeLeft < 10 ? "text-red-600 animate-pulse" : "text-gray-900"
              }`}
            >
              <Timer className="h-4 w-4" />
              {timeLeft} seconds
            </div>
          </div>
          <QuizQuestion
            question={quizData[currentQuestion]?.question}
            options={quizData[currentQuestion]?.options}
            onAnswer={handleAnswer}
            questionIndex={currentQuestion}
          />
        </div>
      ) : (
        <>
          <QuizResults
            score={score}
            totalQuestions={quizData.length}
            onRetry={startQuiz}
          />
          <QuizHistory history={history} />
        </>
      )}
    </div>
  );
};

export default QuizPage;
