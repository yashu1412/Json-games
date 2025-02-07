import correctSound from '../../assets/laugh.mp3';
import wrongSound from '../../assets/crying.mp3';

export const sounds = {
  correct: new Audio(correctSound),
  wrong: new Audio(wrongSound),
};
