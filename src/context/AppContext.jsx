import { useContext, createContext, useReducer } from 'react';
import { questions } from '../data';
import { reducers } from './reducers';

const INITIAL_STATE = {
  score: new Array(questions.length).fill(null),
  currentQuestionIndex: 0,
  answers: [],
};

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
