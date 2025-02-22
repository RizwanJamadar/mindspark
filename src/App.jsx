import React from "react";
import QuizPage from "./page/QuizPage"

const App = () => {
  return (
    <main className="min-h-[90vh] bg-gray-50 p-4 flex items-center justify-center">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          MindSpark
        </h1>
        <QuizPage/>
      </div>
    </main>
  );
};

export default App;
