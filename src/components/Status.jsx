import { useApp } from '../context/AppContext';
import { questions } from '../data';
import '../styles/status.scss';

const Status = () => {
  const { state } = useApp();
  const { score } = state;

  return (
    <div className='status-wrapper'>
      {questions.map((_, i) => (
        <div className='status' key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Status;
