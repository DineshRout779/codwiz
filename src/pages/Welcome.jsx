import welcome from '../assets/welcome.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/welcome.scss';

const Welcome = () => {
  return (
    <motion.div
      className='welcome'
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <header>
        <img src={welcome} alt='' />
        <div>Codewiz</div>
      </header>
      <p>Play programming quizes anytime.</p>

      <div className='container'>
        <Link to='/details' className='btn btn__link'>
          Get started
        </Link>
      </div>
    </motion.div>
  );
};
export default Welcome;
