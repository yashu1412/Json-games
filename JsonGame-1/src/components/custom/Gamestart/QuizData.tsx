import { QuizData } from '../../../types/quiz.types';

export const quizData: QuizData = {
  title: "First Quiz Game",
  author: "Aditya Tripathi",
  category: "General Knowledge",
  description: "Few random quiz questions.",
  date_added: "2024-01-15",
  date_modified: "2024-01-20",
  views: 1500,
  categories: ["MUSIC", "TECHNOLOGY", "HISTORY", "MOVIES"],
  questions: {
    MUSIC: [
      {
        question: "Who won the first American Idol?",
        options: ["Carrie Underwood", "Kelly Clarkson", "Adam Lambert", "Jennifer Hudson"],
        correctAnswer: "Kelly Clarkson"
      }
    ],
    TECHNOLOGY: [
      {
        question: "Which company created React?",
        options: ["Google", "Facebook", "Amazon", "Microsoft"],
        correctAnswer: "Facebook"
      }
    ],
    HISTORY: [
      {
        question: "Who was the first Roman Emperor?",
        options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
        correctAnswer: "Augustus"
      }
    ],
    MOVIES: [
      {
        question: "Which movie won the Oscar for Best Picture in 2024?",
        options: ["Oppenheimer", "Barbie", "Killers of the Flower Moon", "Poor Things"],
        correctAnswer: "Oppenheimer"
      }
    ]
  },
  images: {
    background: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e",
    logo: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ft.png?alt=media&token=34a0ae17-cd24-4f88-aad3-125babce0cae",
    readyScreen: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__6_-removebg-preview.png?alt=media&token=fda5d540-50af-4cc3-8395-65a95b8aba07",
    quizScreen: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__9_-removebg-preview.png?alt=media&token=f7257399-b2c7-466f-a756-8fd81cd72c9d",
    dialogBox: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2F1-dialogbox.png?alt=media&token=4e64e3c0-56aa-41f6-9413-07afdeb51f96",
    startButton: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2F1-onbtn.png?alt=media&token=16aac7c6-57aa-4fa7-b279-0e704e44e658",
    squareIcon: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fsquare-icon.png?alt=media&token=5768c4ed-0ccd-4353-acca-2d46516be7f6",
    prevButton: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
    nextButton: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
    decButton: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fdec-btn.png?alt=media&token=c6319252-0462-4fb0-9a93-8643f22c758e",
    startedText: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2F1-startedtext.png?alt=media&token=0426e7ed-4f42-4ba9-8463-413994f2a864"
  },
  styles: {
    primary: "#FBA834",
    secondary: "#1a1a1a",
    accent: "#3498db",
    text: "#ffffff",
    background: "#f5f5f5",
    buttonStyles: {
      backgroundColor: "lightblue",
      color: "white",
      fontWeight: "bold",
      padding: "8px 16px",
      fontSize: "15px",
      border: "4px solid black",
      borderRadius: "10px",
      cursor: "pointer",
      fontFamily: "Verdana, Arial, Helvetica, sans-serif"
    },
    navbarStyles: {
      backgroundColor: "white",
      height: "20vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: "0%",
      zIndex: "-1"
    }
  }
};
