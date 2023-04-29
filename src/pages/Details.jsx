import { motion } from 'framer-motion';
import '../styles/details.scss';
import languages from '../assets/languages-icons/languages';
import { useApp } from '../context/AppContext';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  removeUser,
  setLanguage,
  setUser,
  setQuestions,
} from '../context/actions';
import welcome from '../assets/welcome.svg';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Details = () => {
  const {
    state: { user, selectedLanguage },
    dispatch,
  } = useApp();
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const addUser = () => {
    setError('');
    if (inputRef.current.value === '') {
      setError('Username is required!');
    } else {
      dispatch(setUser(inputRef.current.value));
    }
  };

  const selectLanguage = (lang) => dispatch(setLanguage(lang));
  const changeUser = () => dispatch(removeUser());
  const pushQuestions = () => {
    if (!selectedLanguage) {
      setError('Please select any language');
    } else {
      dispatch(setQuestions());
      navigate('/quiz');
    }
  };

  if (user) {
    return (
      <div className='full-screen'>
        <div className='container details details-after'>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Choose a programming language</h3>
            <motion.div
              className='languages-wrapper'
              variants={container}
              initial='hidden'
              animate='visible'
            >
              {languages.map((lang, i) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className={
                    selectedLanguage?.title === lang.title
                      ? 'language language__selected'
                      : 'language'
                  }
                  key={'icon-' + i + 1}
                  onClick={() => selectLanguage(lang)}
                  variants={item}
                >
                  <i className='ri-checkbox-circle-fill'></i>
                  <img src={lang.src} alt={lang.title} loading='lazy' />
                </motion.button>
              ))}
            </motion.div>

            {error && <small>{error}</small>}

            <button
              className='btn btn__link btn__link__alt'
              onClick={pushQuestions}
            >
              Start <i className='ri-arrow-right-line'></i>{' '}
            </button>

            <button className='btn btn__anchor' onClick={changeUser}>
              Change username
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className='full-screen'
      >
        <div className='container details' style={{ padding: '3em 2em' }}>
          <img src={welcome} alt='' />

          <h3>Welcome, enter your name</h3>

          <span>Note: We don't use your data</span>

          <input
            type='text'
            id='name'
            name='name'
            className='input'
            ref={inputRef}
          />

          {error && <small>{error}</small>}

          <button onClick={addUser} className='btn btn__link btn__link__alt'>
            Next <i className='ri-arrow-right-line'></i>{' '}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Details;
