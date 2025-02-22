import React, { useEffect, useState } from "react";

const QuizQuestion = ({ question, options, onAnswer, questionIndex }) => {
  const [inputAnswer, setInputAnswer] = useState(""); // State for input-based answers
  const [selectedOption, setSelectedOption] = useState(null); // State for selected option


  useEffect(() => {
    setSelectedOption(null); // ✅ Reset selected option on question change
    setInputAnswer(""); // ✅ Also clear input field for integer-based questions
  }, [questionIndex]);

  // Handle integer input change
  const handleInputChange = (e) => {
    setInputAnswer(e.target.value);
  };

  // Handle selection of options
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    onAnswer(options[index]); // ✅ Pass actual answer value
  };

  // Handle integer-based answer submission
  const handleInputSubmit = () => {
    onAnswer(Number(inputAnswer)); // ✅ Convert input to number
    setInputAnswer("");
  };

  return (
    <div className="space-y-4 rounded-lg w-full sm:w-[500px] mx-auto">
      <h3 className="text-xl font-semibold mb-2">{question}</h3>

      {/* Section: Integer-Based */}
      {!options ? (
        <div className="flex justify-center gap-2 flex-wrap">
          <input
            type="number"
            value={inputAnswer}
            onChange={handleInputChange}
            className="w-full px-4 py-2 mb-4 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
            placeholder="Enter your answer"
          />
          <button
            className="px-4 py-2 bg-[#1F1F22] text-white rounded-lg shadow-md hover:bg-[#2A2A2D] transition w-fit"
            onClick={handleInputSubmit}
          >
            Submit Answer
          </button>
        </div>
      ) : (
        <div className="grid gap-3">
          {/* Section: Multiple-Choice */}
          {options.map((option, index) => (
            <button
              key={index}
              className={`justify-start px-2 py-4 text-left text-base ${
                selectedOption === index
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
