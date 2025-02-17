export type Category = "MUSIC" | "TECHNOLOGY" | "HISTORY" | "MOVIES";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ScreenProps {
  onNext?: () => void;
  onPrev?: () => void;
  quizData: QuizData;
}

export type QuizImages = {
  background: string;
  logo: string;
  readyScreen: string;
  quizScreen: string;
  dialogBox: string;
  startButton: string;
  squareIcon: string;
  prevButton: string;
  nextButton: string;
  decButton: string;
  startedText: string;
};

export type QuizStyles = {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
  buttonStyles: {
    backgroundColor: string;
    color: string;
    fontWeight: string;
    padding: string;
    fontSize: string;
    border: string;
    borderRadius: string;
    cursor: string;
    fontFamily: string;
  };
  navbarStyles: {
    backgroundColor: string;
    height: string;
    width: string;
    display: string;
    justifyContent: string;
    alignItems: string;
    position: string;
    top: string;
    zIndex: string;
  };
};

export type QuizData = {
  title: string;
  author: string;
  category: string;
  description: string;
  date_added: string;
  date_modified: string;
  views: number;
  categories: Category[];
  questions: {
    [K in Category]: QuizQuestion[];
  };
  images: QuizImages;
  styles: QuizStyles;
};

export interface Question {
  id: number;
  question: string;
  category: string;
  options: string[];
  correctAnswer: string;
}

export interface ScoreBoardProps {
  correctScore: number;
  wrongScore: number;
}

export interface QuestionCardProps {
  question: Question;
  selectedOption: string | null;
  isChecked: boolean;
  onOptionSelect: (option: string) => void;
}

export interface ResultModalProps {
  isCorrect: boolean;
  correctAnswer: string;
  onContinue: () => void;
}

export interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}
