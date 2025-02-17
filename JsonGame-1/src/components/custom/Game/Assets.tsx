// Import local images
import correctImage from '../../../assets/correct.jpg';
import wrongImage from '../../../assets/Wrong.jpg';
import babyCharacter from '../../../assets/baby.jpg';

// Import local sounds
import correctSound from '../../../assets/laugh.mp3';
import wrongSound from '../../../assets/crying.mp3';

export const images = {
  background: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbackgroundimage.png?alt=media&token=1f432ba8-ddc0-4dda-910c-3f8861c57e4e",
  logo: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Ft.png?alt=media&token=34a0ae17-cd24-4f88-aad3-125babce0cae",
  categoryBg: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2FBlue_and_Green_Modern_Gradient_Trivia_Night_Game_Presentation__2_-removebg-preview.png?alt=media&token=151043ab-d0c1-4373-a6e3-b6fb760f86d9",
  navigationPrev: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_prev.svg?alt=media&token=811ebf77-dd80-4025-ba8a-f862a9550291",
  navigationNext: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2Fbutton_next.svg?alt=media&token=e40a5d10-a663-4461-9cb1-b29bd93dde0b",
  correctAnswer: correctImage,
  wrongAnswer: wrongImage,
  babyCharacter: babyCharacter,
  dialogBox: "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/assets%2F1-dialogbox.png?alt=media&token=4e64e3c0-56aa-41f6-9413-07afdeb51f96"
};

export const sounds = {
  correct: new Audio(correctSound),
  wrong: new Audio(wrongSound),
};
