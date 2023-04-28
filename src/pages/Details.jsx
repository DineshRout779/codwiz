import { motion } from 'framer-motion';
import '../styles/details.scss';
import languages from '../assets/languages-icons/languages';
import { useApp } from '../context/AppContext';
import { useRef } from 'react';
import { removeUser, setLanguage, setUser } from '../context/actions';

const Details = () => {
  const { state, dispatch } = useApp();
  const { user, selectedLanguage } = state;
  const inputRef = useRef(null);

  const addUser = () => dispatch(setUser(inputRef.current.value));
  const selectLanguage = (lang) => dispatch(setLanguage(lang));
  const changeUser = () => dispatch(removeUser());

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

            <button className='btn btn__link btn__link__alt'>
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
        <div className='container details'>
          <h2>Enter your name</h2>

          <span>Note: We don't use your data</span>

          <input
            type='text'
            id='name'
            name='name'
            placeholder='i.e. noobmaster'
            className='input'
            ref={inputRef}
          />

          {/* {error && <small>{error}</small>} */}

          <button onClick={addUser} className='btn btn__link btn__link__alt'>
            Next <i className='ri-arrow-right-line'></i>{' '}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Details;
