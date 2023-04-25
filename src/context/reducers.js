import { questions } from '../data';
import {
  NEXT_QUESTION,
  PREV_QUESTION,
  RESET_GAME,
  SELECT_ANSWER,
  UPDATE_SCORE,
} from '../utils/constants';

export const reducers = (state, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      const { answer } = state.answers?.find(
        (item) => item.question === state.currentQuestionIndex
      );
      console.log(answer, questions[state.currentQuestionIndex].answer);
      return {
        ...state,
        score:
          answer === questions[state.currentQuestionIndex].answer
            ? state.score + 1
            : state.score,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };
    case PREV_QUESTION:
      if (state.currentQuestionIndex == 0) {
        return {
          ...state,
          currentQuestionIndex: 0,
        };
      } else {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex - 1,
        };
      }
    case SELECT_ANSWER:
      // console.log(action.payload);

      return {
        ...state,
        answers: [
          ...state.answers,
          {
            question: action.payload.question,
            answer: action.payload.answer,
          },
        ],
      };
    case RESET_GAME:
      return {
        ...state,
        score: 0,
        currentQuestionIndex: 0,
        answers: [],
      };
    default:
      return state;
  }
};
