import { selectAnswer, updateScore } from '../context/actions';
import { useApp } from '../context/AppContext';

const Option = ({ option, i }) => {
  const { state, dispatch } = useApp();
  const { currentQuestionIndex, answers } = state;

  let optionSelected = answers.find(
    (item) => item?.question === currentQuestionIndex
  );

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
        <span>{String.fromCharCode('A'.charCodeAt(0) + i)}. </span> {option}
      </label>
    </>
  );
};

export default Option;
