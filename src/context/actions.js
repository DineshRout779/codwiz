import {
  GET_QUESTIONS,
  NEXT_QUESTION,
  PREV_QUESTION,
  REMOVE_USER,
  RESET_GAME,
  SELECT_ANSWER,
  SELECT_LANGUAGE,
  SET_USER,
  UPDATE_SCORE,
} from '../utils/constants';

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const setLanguage = (selectedLanguage) => {
  return {
    type: SELECT_LANGUAGE,
    payload: selectedLanguage,
  };
};

export const setQuestions = () => {
  return {
    type: GET_QUESTIONS,
  };
};

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
