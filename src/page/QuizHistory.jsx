import React from "react";
import { History } from "lucide-react"; // Correct import

const QuizHistory = ({ history }) => {
  if (history.length === 0) return null;

  return (
    <div className="p-6 text-center bg-[#f7f7f7] shadow-lg rounded-2xl border border-gray-20">
      <div className="mb-4 flex items-center gap-2">
        <History className="h-5 w-5" />
        <h2 className="text-xl font-semibold">Quiz History</h2>
      </div>
      <div className="divide-y">
        {history?.map((entry, index) => (
          <div key={index} className="flex items-center justify-between py-3">
            <span className="text-gray-600">
              {entry.name} | {entry.date}
            </span>
            <span className="font-medium">Score: {entry.finalScore}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizHistory;
