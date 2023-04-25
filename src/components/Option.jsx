import { selectAnswer, updateScore } from '../context/actions';
import { useApp } from '../context/AppContext';

const Option = ({ option, i }) => {
  const { state, dispatch } = useApp();
  const { currentQuestionIndex, answers } = state;

  let optionSelected = answers.find(
    (item) => item?.question === currentQuestionIndex
  );

  console.log(optionSelected);

  const handleAnswerSelect = (answer) => {
    dispatch(selectAnswer(currentQuestionIndex, answer));
    dispatch(updateScore());
  };

  return (
    <>
      <input
        type='radio'
        id={option}
        name='answer'
        value={option}
        checked={answers[currentQuestionIndex] === option}
        onChange={() => handleAnswerSelect(i)}
      />
      <label
        htmlFor={option}
        key={option}
        className={
          optionSelected?.answer === i ? 'option option-selected' : 'option'
        }
      >
        {option}
      </label>
    </>
  );
};

export default Option;
