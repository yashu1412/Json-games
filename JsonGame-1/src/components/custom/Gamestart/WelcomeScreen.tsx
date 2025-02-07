import React from "react";
import { QuizData } from "../../../types/quiz.types";
import Button from "./Button";

interface WelcomeScreenProps {
  quizData: QuizData;
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ quizData, onStart }) => (
  <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 bg-black/50 z-10" />
    <img
      src={quizData.images.background}
      alt="Background"
      className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
    />

    {/* Main Container */}
    <div className="relative z-20 w-full max-w-4xl mx-auto px-6 py-12 text-center bg-white/10 backdrop-blur-md shadow-xl rounded-3xl border border-white/20">
      <img
        src={quizData.images.logo}
        alt="Logo"
        className="w-28 h-28 mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform duration-300"
      />
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg tracking-wide">
        {quizData.title}
      </h1>
      
      <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
        {quizData.description}
      </p>
      
      {/* Author Section */}
      <div className="flex items-center justify-center gap-3 mb-8">
        {/* <img src={quizData.images.squareIcon} alt="Author Icon" className="w-8 h-8 object-contain" /> */}
        <span className="text-gray-300 text-lg font-medium">By: {quizData.author}</span>
      </div>
      
      {/* Start Button */}
      <div className="relative inline-block group">
        <Button
          onClick={onStart}
          className="relative z-20 text-black font-bold text-xl text-center transform hover:scale-105 transition-all duration-300
                     bg-gradient-to-r from-yellow-500 to-orange-500
                     shadow-lg hover:shadow-xl rounded-xl px-12 py-4 flex items-center justify-center gap-3"
        >
          <span>START GAME</span>
          {/* <img src={quizData.images.startButton} alt="Start" className="w-10 h-10" /> */}
        </Button>
      </div>

      {/* Stats Section */}
      <div className="mt-8 flex justify-center gap-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-sm mx-auto border border-white/20">
        <div className="flex items-center gap-2">
          {/* <img src={quizData.images.squareIcon} alt="Date Icon" className="w-4 h-4 opacity-75" /> */}
          <span className="text-gray-300">Added: {quizData.date_added}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* <img src={quizData.images.squareIcon} alt="Views Icon" className="w-4 h-4 opacity-75" /> */}
          <span className="text-gray-300">Views: {quizData.views}</span>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeScreen;
