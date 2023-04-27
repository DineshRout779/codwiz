import Navbar from './components/Navbar';
import './App.css';
import './styles/app.scss';
import Quiz from './components/Quiz';
import Status from './components/Status';
import { useApp } from './context/AppContext';

export default function App() {
  const { state } = useApp();
  const { score } = state;
  console.log(score);
  return (
    <>
      <Navbar />
      <Status />
      <Quiz />
    </>
  );
}
