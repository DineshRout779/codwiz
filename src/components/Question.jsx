import { nextQuestion, prevQuestion } from '../context/actions';
import { useApp } from '../context/AppContext';
import Option from './Option';

const Question = () => {
  const { state, dispatch } = useApp();
  const { currentQuestionIndex, questions } = state;
  const { question, options } = questions[currentQuestionIndex];

  const handlePrevQuestion = () => dispatch(prevQuestion());
  const handleNextQuestion = () => dispatch(nextQuestion());

  return (
    <div className='question'>
      <h3
        dangerouslySetInnerHTML={{
          __html: currentQuestionIndex + 1 + '. ' + question,
        }}
      ></h3>
      <div className='options-group'>
        {options.map((option, i) => (
          <Option key={i} i={i} option={option} />
        ))}
      </div>
      <div className='btn-group'>
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0}
          className='btn btn__secondary'
        >
          Prev
        </button>
        <button onClick={handleNextQuestion} className='btn btn__primary'>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
