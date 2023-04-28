import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/details.scss';
import icons from '../assets/languages-icons/languages';

const Details = () => {
  const [user, setUser] = useState('');
  const [userAdded, setUserAdded] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('');

  const selectLanguage = (lang) => setLanguage(lang);

  const addUser = () => {
    if (user === '') {
      setError('Username is required');
    } else {
      setUserAdded(true);
    }
  };

  if (user && userAdded) {
    return (
      <div className='full-screen'>
        <div className='container details details-after'>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3>Choose a programming language</h3>
            <div className='languages-wrapper'>
              {icons.map((icon, i) => (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className={
                    language === icon
                      ? 'language language__selected'
                      : 'language'
                  }
                  key={'icon-' + i + 1}
                  onClick={() => selectLanguage(icon)}
                >
                  <i className='ri-checkbox-circle-fill'></i>
                  <img src={icon} alt='' />
                </motion.button>
              ))}
            </div>

            <button className='btn btn__link btn__link__alt'>
              Start <i className='ri-arrow-right-line'></i>{' '}
            </button>

            <button className='btn btn__anchor'>Change username</button>
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
            value={user}
            onChange={(e) => setUser(e.target.value)}
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
