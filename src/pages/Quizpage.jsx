import Body from '../components/Body';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Quizpage = () => {
  const {
    state: { user },
  } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(`/details`);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Body />
    </>
  );
};

export default Quizpage;
