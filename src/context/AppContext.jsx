import { useContext, createContext, useReducer, useEffect } from 'react';
import { data } from '../data';
import { reducers } from './reducers';

const quizData = JSON.parse(localStorage.getItem('quizData'));

const INITIAL_STATE = {
  score: quizData?.score || [],
  questions: quizData?.questions || [],
  currentQuestionIndex: quizData?.currentQuestionIndex || 0,
  answers: quizData?.answers || [],
  user: quizData?.user || null,
  selectedLanguage: quizData?.selectedLanguage || null,
};

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('quizData', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
