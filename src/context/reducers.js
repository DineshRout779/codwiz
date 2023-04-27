import { questions } from '../data';
import {
  NEXT_QUESTION,
  PREV_QUESTION,
  RESET_GAME,
  SELECT_ANSWER,
  UPDATE_SCORE,
} from '../utils/constants';

export const reducers = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case UPDATE_SCORE:
      const item = state.answers?.find(
        (item) => item.question === state.currentQuestionIndex
      );
      // console.log(
      //   'ans: ',
      //   item?.answer,
      //   questions[state.currentQuestionIndex].answer,
      //   state.currentQuestionIndex
      // );

      console.log('item: ', item);

      let isCorrect =
        item?.answer === questions[state.currentQuestionIndex].answer
          ? true
          : false;

      return {
        ...state,
        score: state.score.map((s, i) => {
          if (i === state.currentQuestionIndex) {
            console.log('here', i);
            return isCorrect ? 1 : 0;
          } else {
            console.log('there', i);
            return s;
          }
        }),
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
      // if already answered then dont add, just update it
      const isAnswered = state.answers.find(
        (item) => item?.question === state.currentQuestionIndex
      );
      if (isAnswered) {
        return {
          ...state,
          answers: state.answers.map((item) => {
            if (item.question === state.currentQuestionIndex) {
              return {
                ...item,
                answer: action.payload.answer,
              };
            }
            return item;
          }),
        };
      } else {
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
      }

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
