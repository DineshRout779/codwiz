import { questions } from '../data';
import '../styles/status.scss';

const Status = () => {
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
