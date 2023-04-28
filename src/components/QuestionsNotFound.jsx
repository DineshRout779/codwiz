import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const QuestionsNotFound = () => {
  const {
    state: { selectedLanguage },
  } = useApp();
  const navigate = useNavigate();
  return (
    <div className='questions_not_found'>
      <h2>No questions found in: {selectedLanguage.title}! </h2>
      <p>Please select another language</p>

      <button onClick={() => navigate('/details')} className='btn btn__alt'>
        Select another language
      </button>
    </div>
  );
};

export default QuestionsNotFound;
