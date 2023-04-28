import { useContext, createContext, useReducer } from 'react';
import { data } from '../data';
import { reducers } from './reducers';

const INITIAL_STATE = {
  score: [],
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  user: null,
  selectedLanguage: null,
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
