import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { questions } from "../../components/custom/Game/Questions";
import { images } from "../../components/custom/Game/images";
import { sounds } from "../../components/custom/Game/Sound";

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [correctScore, setCorrectScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [showResultImage, setShowResultImage] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);


  const handleAnswer = (option: string) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setIsAnswered(true);
      const correct = option === questions[currentQuestion].correctAnswer;
      setIsCorrect(correct);

     
      if (correct) {
        sounds.correct.currentTime = 0;
        sounds.correct.play().catch(error => console.log('Error playing sound:', error));
        setCorrectScore(correctScore + 1);
      } else {
        sounds.wrong.currentTime = 0;
        sounds.wrong.play().catch(error => console.log('Error playing sound:', error));
        setWrongScore(wrongScore + 1);
      }
      setShowResultImage(true);
      setIsChecked(true);
    }
  };


  const nextQuestion = () => {
    if (!isAnswered || !isChecked) {
      alert("Please select and check your answer first!");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsChecked(false);
      setShowResultImage(false);
    } else {
      alert("Quiz Completed!");
    }
  };

  return (
    <div style={{ backgroundImage: `url(${images.background})`, backgroundSize: "cover", height: "100vh", padding: "20px" }}>
      <h1 className="text-3xl font-bold text-white text-center mb-5">Quiz Game</h1>
      <div className="text-white text-center text-lg mb-5">
        <p>Question {currentQuestion + 1} of {questions.length}</p>
        <p>{questions[currentQuestion].question}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={`p-2 rounded-lg ${selectedOption === option ? "bg-blue-500 text-white" : "bg-white text-black"}`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {showResultImage && (
        <div className="text-center mt-4">
          <img src={isCorrect ? images.correctAnswer : images.wrongAnswer} alt="Result" className="w-24 mx-auto" />
        </div>
      )}
      <div className="flex justify-between mt-5">
        <button className="p-2 bg-gray-500 text-white rounded-lg flex items-center">
          <FaArrowLeft className="mr-2" /> Previous
        </button>
        <button onClick={nextQuestion} className="p-2 bg-green-500 text-white rounded-lg flex items-center">
          Next <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
}
