import Navbar from './components/Navbar';
import './App.css';
import './styles/app.scss';
import Quiz from './components/Quiz';
import Status from './components/Status';

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Status />
      <Quiz />
    </div>
  );
}
