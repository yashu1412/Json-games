import { useState } from "react";
import { questions } from "../../components/custom/Game/Questions"; 
import { images, sounds } from "../../components/custom/Game/Assets"; 

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [showResultImage, setShowResultImage] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Handle Answer Selection
  const handleAnswer = (option: string) => {
    setSelectedOption(option);
    setIsAnswered(false); 
  };

  // Check Answer & Move to Next Question
  const checkAnswer = () => {
    if (!selectedOption) return alert("Please select an answer first!");

    const correct = selectedOption === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    setIsAnswered(true);
    setShowResultImage(true);

    // Play sound
    if (correct) {
      sounds.correct.currentTime = 0;
      sounds.correct.play().catch((error) => console.log("Error playing sound:", error));
      setCorrectScore(correctScore + 1);
    } else {
      sounds.wrong.currentTime = 0;
      sounds.wrong.play().catch((error) => console.log("Error playing sound:", error));
      setWrongScore(wrongScore + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        resetSelection();
      }
    }, 4000); 
  };


  const resetSelection = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setShowResultImage(false);
  };

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: `url(${images.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-2 min-h-screen flex flex-col items-center">
        {/* Dynamic Character Image */}
        <div className="text-center mb-8">
          <img
            src={
              showResultImage
                ? isCorrect
                  ? images.correctAnswer 
                  : images.wrongAnswer 
                : images.babyCharacter 
            }
            alt="Character Reaction"
            className="w-40 h-60 mx-auto mix-blend-multiply"
          />
          <h1 className="text-4xl font-bold text-white">QUIZ GAME</h1>
        </div>

        {/* Score Board */}
        <div className="flex gap-6 mb-8">
          <div className="bg-green-500 px-6 py-3 rounded-xl shadow-lg">
            <p className="text-xl font-bold text-white">Correct: {correctScore}</p>
          </div>
          <div className="bg-red-500 px-6 py-3 rounded-xl shadow-lg">
            <p className="text-xl font-bold text-white">Wrong: {wrongScore}</p>
          </div>
        </div>

        {/* Question and Options */}
        <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">{questions[currentQuestion].question}</h2>

          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`px-6 py-3 text-lg font-semibold rounded-lg shadow-md transition-all 
                  ${
                    selectedOption === option
                      ? isAnswered
                        ? isCorrect
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-blue-300"
                      : "bg-gray-200"
                  }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Check Answer Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={checkAnswer}
              disabled={!selectedOption || isAnswered}
              className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md disabled:bg-gray-400"
            >
              Check Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
