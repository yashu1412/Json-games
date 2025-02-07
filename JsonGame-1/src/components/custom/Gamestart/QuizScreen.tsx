import React, { useState } from "react";
import { Category, ScreenProps, QuizQuestion } from "../../../types/quiz.types";
import Button from "./Button";

interface QuizScreenProps extends ScreenProps {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category) => void;
  score: number;
  setScore: (score: number) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  quizData,
  selectedCategory = null,
  setSelectedCategory,
  score,
  setScore,
  onNext,
  onPrev,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion: QuizQuestion | null =
    selectedCategory ? quizData.questions[selectedCategory][currentQuestionIndex] : null;

  const categoryDisplay = selectedCategory
    ? `${selectedCategory} - Selected Category`
    : "Select a Category";

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);

    if (currentQuestion && option === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (selectedCategory && currentQuestionIndex < (quizData.questions[selectedCategory]?.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else if (onNext) {
      onNext();
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E293B] px-6">
      {/* Background Image */}
      <img
        src={quizData.images.quizScreen}
        alt="Quiz Screen"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Score Display */}
      <div className="relative z-10 text-2xl font-bold text-white drop-shadow-md bg-white/10 px-6 py-3 rounded-lg shadow-lg backdrop-blur-md">
        Score: {score}
      </div>

      {/* Result Popup */}
      {showResult && (
        <div className={`relative z-20 fixed inset-0 flex items-center justify-center bg-black/50`}>
          <div className={`p-8 rounded-2xl shadow-2xl transform scale-100 transition-transform duration-300 
            ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
            <img
              src={isCorrect ? "path/to/correct-image.png" : "path/to/wrong-image.png"}
              alt={isCorrect ? "Correct!" : "Wrong!"}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              {isCorrect ? "Correct!" : "Wrong!"}
            </h3>
            {!isCorrect && (
              <p className="text-white text-center mb-4">
                Correct answer: {currentQuestion?.correctAnswer}
              </p>
            )}
            <Button
              onClick={() => setShowResult(false)}
              className="w-full bg-white text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-gray-100"
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      {/* Category Display */}
      <div className="relative z-10 text-3xl font-semibold text-white text-center mt-6 tracking-wide">
        {categoryDisplay}
      </div>

      {/* Category Selection */}
      {!selectedCategory && (
        <div className="relative z-10 flex flex-wrap gap-4 justify-center max-w-2xl mt-6">
          {quizData.categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentQuestionIndex(0);
              }}
              className={`px-6 py-3 text-lg font-semibold rounded-xl transition-transform duration-300 hover:scale-105 shadow-md ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-[#FBA834] hover:bg-[#FBA834]/80 text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* Quiz Question */}
      {currentQuestion && (
        <div className="relative z-10 text-center bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl shadow-lg mt-8 max-w-3xl">
          <h2 className="text-2xl font-bold text-white">{currentQuestion.question}</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-lg font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md ${
                  selectedOption === option
                    ? "bg-green-500 text-white"
                    : "bg-[#FBA834] hover:bg-[#FBA834]/80 text-white"
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="relative z-10 flex gap-4 mt-6">
        {onPrev && (
          <Button
            onClick={onPrev}
            className="bg-gray-700 text-white hover:bg-gray-600 px-6 py-3 text-lg font-semibold rounded-xl transition-transform duration-300 hover:scale-105 shadow-md"
          >
            Previous
          </Button>
        )}
        {selectedOption && !showResult && (
          <Button
            onClick={handleNextQuestion}
            className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 text-lg font-semibold rounded-xl transition-transform duration-300 hover:scale-110 shadow-md"
          >
            {selectedCategory && currentQuestionIndex < quizData.questions[selectedCategory].length - 1
              ? "Next Question"
              : "Finish"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;
