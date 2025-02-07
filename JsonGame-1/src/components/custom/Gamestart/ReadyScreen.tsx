import React from "react";
import { ScreenProps } from "../../../types/quiz.types";
import Button from "./Button";

const ReadyScreen: React.FC<ScreenProps> = ({ onNext, onPrev, quizData }) => (
  <div className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-r from-[#0F172A] to-[#1E293B]">
    {/* Background Image */}
    <img
      src={quizData.images.readyScreen}
      alt="Ready Screen"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />

    {/* Glassmorphism Container */}
    <div className="relative z-10 backdrop-blur-lg bg-white/10 shadow-lg border border-white/20 px-10 py-12 rounded-2xl text-center max-w-lg">
      {/* Title */}
      <h2 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg animate-fade-in">
        ARE YOU READY?
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-white/80">
        Get ready to test your knowledge in an exciting quiz journey!
      </p>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-center gap-6">
        <Button
          onClick={onPrev!}
          className="px-6 py-3 text-lg font-semibold text-white bg-gray-700 hover:bg-gray-600 rounded-xl transition-transform transform hover:scale-105 shadow-md"
        >
          Previous
        </Button>
        <Button
          onClick={onNext!}
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#FBA834] to-[#ff8c00] hover:from-[#ff8c00] hover:to-[#FBA834] rounded-xl transition-transform transform hover:scale-110 shadow-md"
        >
          Next
        </Button>
      </div>
    </div>
  </div>
);

export default ReadyScreen;
