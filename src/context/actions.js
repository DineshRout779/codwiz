import {
  NEXT_QUESTION,
  PREV_QUESTION,
  RESET_GAME,
  SELECT_ANSWER,
  UPDATE_SCORE,
} from '../utils/constants';

export const selectAnswer = (question, answer) => {
  return {
    type: SELECT_ANSWER,
    payload: { question, answer },
  };
};

export const updateScore = () => {
  return {
    type: UPDATE_SCORE,
  };
};

export const prevQuestion = () => {
  return {
    type: PREV_QUESTION,
  };
};

export const nextQuestion = () => {
  return {
    type: NEXT_QUESTION,
  };
};

export const resetScore = () => {
  return {
    type: RESET_GAME,
  };
};
