# MindSpark: Gamified Quiz with History & Rewards

## 🚀 Overview
MindSpark is an interactive and engaging quiz application built with React. It features multiple-choice and integer-based questions, real-time countdown timers, a scoring system, and a quiz history tracker. The application also includes gamification elements such as confetti effects, encouraging badges, and sound effects to enhance the user experience.

## [Live Link](https://mindspark-29534.web.app/)  

## ✨ Features
- 🧠 **Dynamic Questions**: Supports both multiple-choice and integer-based questions.
- ⏳ **Countdown Timer**: Ensures users answer within a given time limit.
- 🎯 **Score Tracking**: Calculates and displays user performance with accuracy.
- 🎖️ **Performance Badges**: Encouraging feedback based on quiz performance.
- 🔥 **Gamification**: Confetti animation and sound effects for high scores.
- 📜 **Quiz History**: Stores past quiz scores using IndexedDB.
- 🔄 **Retry Option**: Users can retake the quiz anytime.

## 🛠️ Tech Stack
- **Frontend**: React, Tailwind CSS
- **State Management**: React Hooks
- **Data Storage**: IndexedDB (via IndexedDB API)
- **Icons & Animations**: Lucide Icons, Howler.js (for sounds), Confetti.js

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mindspark.git
   cd mindspark
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## 🏆 Usage
1. Enter your name and start the quiz.
2. Answer each question before the timer runs out.
3. View your score and receive feedback based on performance.
4. Celebrate high scores with confetti and sound effects!
5. Check your past quiz history.
6. Retry the quiz to improve your score.

## 📁 Project Structure
```
mindspark/
│-- src/
│   │-- components/
│   │   │-- Landing.js
│   │   │-- QuizQuestion.js
│   │   │-- QuizResults.js
│   │   │-- QuizHistory.js
│   │-- utils/
│   │   │-- db.js (IndexedDB functions)
│   │   │-- runFireworks.js (Confetti effects)
│   │-- pages/
│   │   │-- QuizPage.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
│-- README.md
```

## 🔥 Future Improvements
- Add more question categories.
- Implement leaderboard feature.
- Integrate user authentication for personalized quiz tracking.
- Enhance UI with animations and themes.

## 🤝 Contributing
Contributions are welcome! If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. For any issues or feature requests, please open an issue in the repository.

## 📜 License
This project is open-source and available under the MIT License.

---
🚀 Enjoy playing MindSpark and improve your knowledge! 🎉
