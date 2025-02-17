export interface Question {
  id: number;
  question: string;
  category: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which artist is known for their country music?",
    category: "MUSIC",
    options: ["Carrie Underwood", "Alan Jackson", "Kelly Clarkson", "Kanye West"],
    correctAnswer: "Carrie Underwood",
  },
  {
    id: 2,
    question: "Which city is known for its technological advancements?",
    category: "TECHNOLOGY",
    options: ["SenseCity", "New York City", "Cense", "New Haven"],
    correctAnswer: "SenseCity",
  },
  {
    id: 3,
    question: "Who was a famous historical figure?",
    category: "HISTORY",
    options: ["Julius Caesar", "Hannibal Barca", "Augustus", "Joan of Arc"],
    correctAnswer: "Julius Caesar",
  },
  {
    id: 4,
    question: "Which is a famous sci-fi movie?",
    category: "MOVIES",
    options: ["Blade Runner 2049", "The Matrix", "Dune", "The Godfather"],
    correctAnswer: "Blade Runner 2049",
  },
  // Add the rest of the questions here...
];
