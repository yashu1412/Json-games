// import { useState } from "react";
// // Import the background image from your local assets folder
// import bgImage from '../../assets/Background.png'; // Ensure the path is correct

// // Other imports
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// // Import images from assets
// import correctImage from '../../assets/correct.jpg';
// import wrongImage from '../../assets/Wrong.jpg';
// import babyCharacter from '../../assets/baby.jpg'; // Update path as needed

// // Import sounds from assets
// import correctSound from '../../assets/laugh.mp3';
// import wrongSound from '../../assets/crying.mp3';

// // Image URLs from JSON
// const images = {
//   background: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e",
//   logo: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ft.png?alt=media&token=34a0ae17-cd24-4f88-aad3-125babce0cae",
//   categoryBg: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__2_-removebg-preview.png?alt=media&token=151043ab-d0c1-4373-a6e3-b6fb760f86d9",
//   navigationPrev: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
//   navigationNext: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
//   // Use local images for correct/wrong answers
//   correctAnswer: correctImage,
//   wrongAnswer: wrongImage,
//   dialogBox: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2F1-dialogbox.png?alt=media&token=4e64e3c0-56aa-41f6-9413-07afdeb51f96"
// };

// interface Question {
//   id: number;
//   question: string;
//   category: string;
//   options: string[];
//   correctAnswer: string;
// }

// // Questions array based on the JSON data categories and options
// const questions: Question[] = [
//     {
//       id: 1,
//       question: "Which artist is known for their country music?",
//       category: "MUSIC",
//       options: ["Carrie Underwood", "Alan Jackson", "Kelly Clarkson", "Kanye West"],
//       correctAnswer: "Carrie Underwood",
//     },
//     {
//       id: 2,
//       question: "Which city is known for its technological advancements?",
//       category: "TECHNOLOGY",
//       options: ["SenseCity", "New York City", "Cense", "New Haven"],
//       correctAnswer: "SenseCity",
//     },
//     {
//       id: 3,
//       question: "Who was a famous historical figure?",
//       category: "HISTORY",
//       options: ["Julius Caesar", "Hannibal Barca", "Augustus", "Joan of Arc"],
//       correctAnswer: "Julius Caesar",
//     },
//     {
//       id: 4,
//       question: "Which is a famous sci-fi movie?",
//       category: "MOVIES",
//       options: ["Blade Runner 2049", "The Matrix", "Dune", "The Godfather"],
//       correctAnswer: "Blade Runner 2049",
//     },
//     {
//       id: 5,
//       question: "Which instrument is commonly used in jazz music?",
//       category: "MUSIC",
//       options: ["Saxophone", "Flute", "Piano", "Trumpet"],
//       correctAnswer: "Saxophone",
//     },
//     {
//       id: 6,
//       question: "What is the capital city of France?",
//       category: "GEOGRAPHY",
//       options: ["Paris", "Berlin", "Rome", "Madrid"],
//       correctAnswer: "Paris",
//     },
//     {
//       id: 7,
//       question: "Who developed the theory of relativity?",
//       category: "SCIENCE",
//       options: ["Albert Einstein", "Isaac Newton", "Marie Curie", "Nikola Tesla"],
//       correctAnswer: "Albert Einstein",
//     },
//     {
//       id: 8,
//       question: "Which sport is known as 'the beautiful game'?",
//       category: "SPORTS",
//       options: ["Soccer", "Basketball", "Tennis", "Rugby"],
//       correctAnswer: "Soccer",
//     },
//     {
//       id: 9,
//       question: "Which planet is known as the Red Planet?",
//       category: "SCIENCE",
//       options: ["Mars", "Venus", "Jupiter", "Mercury"],
//       correctAnswer: "Mars",
//     },
//     {
//       id: 10,
//       question: "What is the largest mammal in the world?",
//       category: "NATURE",
//       options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
//       correctAnswer: "Blue Whale",
//     },
//     {
//       id: 11,
//       question: "Which author wrote 'To Kill a Mockingbird'?",
//       category: "LITERATURE",
//       options: ["Harper Lee", "Jane Austen", "Mark Twain", "George Orwell"],
//       correctAnswer: "Harper Lee",
//     },
//     {
//       id: 12,
//       question: "Which is the smallest continent by land area?",
//       category: "GEOGRAPHY",
//       options: ["Australia", "Europe", "Antarctica", "South America"],
//       correctAnswer: "Australia",
//     },
//     {
//       id: 13,
//       question: "Which programming language is used for iOS development?",
//       category: "TECHNOLOGY",
//       options: ["Swift", "Kotlin", "JavaScript", "Python"],
//       correctAnswer: "Swift",
//     },
//     {
//       id: 14,
//       question: "Who painted the Mona Lisa?",
//       category: "ART",
//       options: ["Leonardo da Vinci", "Michelangelo", "Vincent van Gogh", "Claude Monet"],
//       correctAnswer: "Leonardo da Vinci",
//     },
//     {
//       id: 15,
//       question: "Which game is played on a board with 64 squares?",
//       category: "SPORTS",
//       options: ["Chess", "Checkers", "Backgammon", "Scrabble"],
//       correctAnswer: "Chess",
//     },
//     {
//       id: 16,
//       question: "Which natural satellite orbits Earth?",
//       category: "SCIENCE",
//       options: ["The Moon", "Phobos", "Europa", "Titan"],
//       correctAnswer: "The Moon",
//     },
//     {
//       id: 17,
//       question: "Which novel features the character 'Elizabeth Bennet'?",
//       category: "LITERATURE",
//       options: ["Pride and Prejudice", "Jane Eyre", "Wuthering Heights", "Great Expectations"],
//       correctAnswer: "Pride and Prejudice",
//     },
//     {
//       id: 18,
//       question: "What is the freezing point of water in Celsius?",
//       category: "SCIENCE",
//       options: ["0°C", "100°C", "32°C", "-1°C"],
//       correctAnswer: "0°C",
//     },
//     {
//       id: 19,
//       question: "Who is known as the 'Father of Computers'?",
//       category: "TECHNOLOGY",
//       options: ["Charles Babbage", "Alan Turing", "John von Neumann", "Ada Lovelace"],
//       correctAnswer: "Charles Babbage",
//     },
//     {
//       id: 20,
//       question: "Which movie won the Oscar for Best Picture in 2020?",
//       category: "MOVIES",
//       options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
//       correctAnswer: "Parasite",
//     }
//   ];
  
// // Add this after your other const declarations
// const sounds = {
//   correct: new Audio(correctSound),
//   wrong: new Audio(wrongSound),
// };

// export default function QuizApp() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState<string | null>(null);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [correctScore, setCorrectScore] = useState(0);
//   const [wrongScore, setWrongScore] = useState(0);
//   const [showResultImage, setShowResultImage] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);

//   // Modify handleAnswer to include sound
//   const handleAnswer = (option: string) => {
//     if (!isAnswered) {
//       setSelectedOption(option);
//       setIsAnswered(true);
//       const correct = option === questions[currentQuestion].correctAnswer;
//       setIsCorrect(correct);
      
//       // Play sound
//       if (correct) {
//         sounds.correct.currentTime = 0;
//         sounds.correct.play().catch(error => console.log('Error playing sound:', error));
//         setCorrectScore(correctScore + 1);
//       } else {
//         sounds.wrong.currentTime = 0;
//         sounds.wrong.play().catch(error => console.log('Error playing sound:', error));
//         setWrongScore(wrongScore + 1);
//       }
//       setShowResultImage(true);
//       setIsChecked(true);
//     }
//   };

//   // Move to Next Question
//   const nextQuestion = () => {
//     if (!isAnswered || !isChecked) {
//       // Show warning if trying to proceed without selecting and checking answer
//       alert("Please select and check your answer first!");
//       return;
//     }

//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       resetSelection();
//     }
//   };

//   // Move to Previous Question
//   const prevQuestion = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       resetSelection();
//     }
//   };

//   // Reset Selection on New Question
//   const resetSelection = () => {
//     setSelectedOption(null);
//     setIsAnswered(false);
//     setIsChecked(false);
//     setShowResultImage(false);
//   };

//   return (
//     <div 
//       className="min-h-screen w-full relative overflow-hidden"
//       style={{
//         backgroundImage: `url(${images.background})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Main Content Container */}
//       <div className="max-w-6xl mx-auto px-4 py-2 min-h-screen flex flex-col items-center">
//         {/* Baby Character and Title */}
//         <div className="text-center mb-8">
//           <img 
//             src={babyCharacter}
//             alt="Baby Character" 
//             className="w-40 h-60 mx-auto mix-blend-multiply"
//             style={{ 
//               filter: 'brightness(1.1) contrast(1.1)',
//               imageRendering: 'crisp-edges'
//             }}
//           />
//           <h1 className="text-4xl font-bold text-white mb-2 font-cursive">
//             QUIZ GAME
//           </h1>
//         </div>

//         {/* Score Board */}
//         <div className="flex gap-6 mb-8">
//           <div className="bg-green-500/90 px-6 py-3 rounded-xl shadow-lg backdrop-blur">
//             <p className="text-xl font-bold text-white">
//               Correct: {correctScore}
//             </p>
//           </div>
//           <div className="bg-red-500/90 px-6 py-3 rounded-xl shadow-lg backdrop-blur">
//             <p className="text-xl font-bold text-white">
//               Wrong: {wrongScore}
//             </p>
//           </div>
//         </div>

//         {/* Quiz Container */}
//         <div className="w-full max-w-4xl relative">
//           {/* Category Banner */}
//           <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-full text-center">
//             <div 
//               className="inline-block bg-[#FBA834] text-black font-bold px-8 py-3 rounded-full border-4 border-black shadow-lg"
//               style={{ fontFamily: 'Monospace' }}
//             >
//               {questions[currentQuestion].category}
//             </div>
//           </div>

//           {/* Result Image */}
//           {showResultImage && (
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//               <div className="bg-white rounded-xl p-6 shadow-lg text-center">
//                 <img 
//                   src={isCorrect ? images.correctAnswer : images.wrongAnswer}
//                   alt={isCorrect ? "Correct!" : "Wrong!"}
//                   className="w-28 h-32 mt-1 mx-auto animate-bounce-gentle mix-blend-multiply"
//                   style={{ 
//                     filter: 'brightness(1.1) contrast(1.1)',
//                     imageRendering: 'crisp-edges'
//                   }}
//                 />
//                 <h3 className="text-2xl font-bold text-black mb-2">
//                   {isCorrect ? "Correct!" : "Wrong!"}
//                 </h3>
//                 <p className="text-black mb-4">
//                   {isCorrect 
//                     ? "Great job! Keep going!" 
//                     : `The correct answer was: ${questions[currentQuestion].correctAnswer}`
//                   }
//                 </p>
//                 <button
//                   onClick={() => {
//                     setShowResultImage(false);
//                     if (currentQuestion < questions.length - 1) {
//                       setCurrentQuestion(currentQuestion + 1);
//                       resetSelection();
//                     }
//                   }}
//                   className="px-6 py-2 bg-[#FBA834] text-black font-bold rounded-xl
//                            border-4 border-black shadow-lg hover:bg-[#fb9834]
//                            transition-all duration-300"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Question Card */}
//           <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mt-8">
//             {/* Question Text */}
//             <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
//               {questions[currentQuestion].question}
//             </h2>

//             {/* Options Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//               {questions[currentQuestion].options.map((option) => (
//                 <button
//                   key={option}
//                   onClick={() => handleAnswer(option)}
//                   disabled={isChecked}
//                   className={`
//                     relative overflow-hidden p-4 rounded-xl text-lg font-bold transition-all duration-300
//                     border-4 border-black shadow-lg transform hover:scale-105
//                     ${selectedOption === option 
//                       ? isChecked
//                         ? option === questions[currentQuestion].correctAnswer
//                           ? 'bg-green-500 text-white'
//                           : 'bg-red-500 text-white'
//                         : 'bg-[#FBA834] text-black'
//                       : 'bg-white text-black hover:bg-[#FBA834]'
//                     }
//                   `}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Progress Bar */}
//         <div className="w-full max-w-4xl mt-8 bg-gray-200 rounded-full h-2.5">
//           <div 
//             className="bg-[#FBA834] h-2.5 rounded-full transition-all duration-500"
//             style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'
import QuizApp from '../../view/GameView'

const index = () => {
  return (
    <div>
     <QuizApp/> 
    </div>
  )
}

export default index

