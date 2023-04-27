import Quiz from './Quiz';
import Status from './Status';
import '../styles/app.scss';

const Body = () => {
  return (
    <div className='body-wrapper'>
      <Status />
      <Quiz />
    </div>
  );
};

export default Body;
