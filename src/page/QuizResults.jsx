import { Trophy } from "lucide-react";
import React, { useEffect } from "react";
import { runFireworks } from "../utils/runFireworks";
import { Howl } from "howler"; // ✅ Import Howler for sound

const QuizResults = ({ score, totalQuestions, onRetry }) => {
  const percentage = Math.round((score / totalQuestions) * 100); // ✅ Move this before useEffect

  useEffect(() => {
    if (percentage >= 80) {
      runFireworks(); // 🎉 Trigger confetti
      playSound("/sounds/quiz-end.mp3"); // 🎶 Play success sound
    }
  }, [percentage]); // ✅ Add `percentage` as a dependency to avoid stale value

  const playSound = (soundFile) => {
    const sound = new Howl({
      src: [soundFile], 
      volume: 0.5, 
    });
    sound.play();
  };

  // 🎖️ Determine badge style & encouragement message based on performance
  let badgeStyle, message;
  if (percentage === 100) {
    badgeStyle = "bg-green-100 text-green-700 border border-green-400";
    message = "🏆 Perfect! You're a Quiz Master!";
  } else if (percentage >= 80) {
    badgeStyle = "bg-blue-100 text-blue-700 border border-blue-400";
    message = "💪 Great job! You're on fire!";
  } else if (percentage >= 50) {
    badgeStyle = "bg-yellow-100 text-yellow-700 border border-yellow-400";
    message = "👍 Not bad! Keep practicing!";
  } else {
    badgeStyle = "bg-red-100 text-red-700 border border-red-400";
    message = "😓 Keep trying! You’ll get better!";
  }

  return (
    <div className="p-10 text-center bg-[#f7f7f7] shadow-lg rounded-2xl border border-gray-200 flex flex-col items-center">
      <div className="mb-4 flex justify-center text-center">
        <Trophy className="h-12 w-12 text-yellow-500" />
      </div>
      <h2 className="mb-2 text-2xl font-bold">Quiz Complete!</h2>
      <p className="mb-4 text-lg">
        Your score: <span className="font-semibold">{score}</span> out of{" "}
        <span className="font-semibold">{totalQuestions}</span> (
        <span className="font-semibold">{percentage}%</span>)
      </p>

      {/* Badge for encouragement */}
      <div className={`px-4 py-2 rounded-full text-sm font-medium ${badgeStyle} mb-4`}>
        {message}
      </div>

      <button
        className="px-4 py-2 bg-[#1F1F22] text-white rounded-lg shadow-md hover:bg-[#2A2A2D] transition w-fit"
        onClick={onRetry}
      >
        Try Again
      </button>
    </div>
  );
};

export default QuizResults;
