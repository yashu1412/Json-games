import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Category } from "../../types/quiz.types";
import { quizData } from "../../components/custom/Gamestart/QuizData";
import Background from "../../components/custom/Gamestart/Background";
import WelcomeScreen from "../../components/custom/Gamestart/WelcomeScreen";
import ReadyScreen from "../../components/custom/Gamestart/ReadyScreen";
import QuizScreen from "../../components/custom/Gamestart/QuizScreen";

const StartPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate(); 

  const handleNext = () => {
    if (currentSlide === 2) {
      
      navigate("/quiz");
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => setCurrentSlide((prev) => prev - 1);

  return (
    <div className="quiz-container h-screen w-screen flex flex-col items-center justify-center relative">
      <Background imageUrl={quizData.images.background} />

      {currentSlide === 0 && (
        <WelcomeScreen onStart={handleNext} quizData={quizData} />
      )}

      {currentSlide === 1 && (
        <ReadyScreen onNext={handleNext} onPrev={handlePrev} quizData={quizData} />
      )}

      {currentSlide === 2 && (
        <QuizScreen
          quizData={quizData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          score={score}
          setScore={setScore}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default StartPage;
