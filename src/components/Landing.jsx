import React from "react";

const Landing = ({startQuiz, setName}) => {
  return (
    <div className="p-10 text-center bg-[#f7f7f7] shadow-lg rounded-2xl border border-gray-20 flex flex-col items-center">
      <h2 className="mb-4 text-2xl font-bold">Welcome to the Quiz!</h2>
      <p className="mb-6 text-gray-600">
        You will have 30 seconds to answer each question. <br /> Good luck!!
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
        className="w-full sm:w-1/2 px-4 py-2 mb-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
      />
      <button
        className="px-4 py-2 bg-[#1F1F22] text-white rounded-lg shadow-md hover:bg-[#2A2A2D] transition w-fit"
        onClick={startQuiz}
      >
        Take a Quiz
      </button>
    </div>
  );
};

export default Landing;
