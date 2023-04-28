import { data } from '../data';
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

export const reducers = (state, action) => {
  switch (action.type) {
    // set user
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    // remove user
    case REMOVE_USER:
      return {
        ...state,
        user: null,
      };

    // set language
    case SELECT_LANGUAGE:
      return {
        ...state,
        selectedLanguage: action.payload,
      };

    // get questions
    case GET_QUESTIONS:
      return {
        ...state,
        score: new Array(
          data[state.selectedLanguage.title.toLowerCase()].length
        ).fill(null),
        questions: data[state.selectedLanguage.title.toLowerCase()],
      };

    // update score
    case UPDATE_SCORE:
      const item = state.answers?.find(
        (item) => item.question === state.currentQuestionIndex
      );

      let isCorrect =
        item?.answer === state.questions[state.currentQuestionIndex].answer
          ? true
          : false;

      return {
        ...state,
        score: state.score.map((s, i) => {
          if (i === state.currentQuestionIndex) {
            return isCorrect ? 1 : 0;
          } else {
            return s;
          }
        }),
      };

    // get next question
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
      };

    // get previous question
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

    // select answer
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

    // reset game
    case RESET_GAME:
      return {
        ...state,
        score: [],
        questions: [],
        currentQuestionIndex: 0,
        answers: [],
        user: null,
        selectedLanguage: null,
      };

    default:
      return state;
  }
};
