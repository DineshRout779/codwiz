import { useApp } from '../context/AppContext';
import '../styles/status.scss';

const Status = () => {
  const { state } = useApp();
  const { score } = state;

  return (
    <div className='status-wrapper'>
      {score.map((s, i) => (
        <div key={i}>
          {s !== null ? (
            <div className='status status__checked'>{i + 1}</div>
          ) : (
            <div className='status status__unchecked'>{i + 1}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Status;
