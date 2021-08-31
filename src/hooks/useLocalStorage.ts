import { useState } from 'react';

const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  const [error, setError] = useState('');

  const setLocalStorageState = (newState: (T: string) => void) => {
    try {
      const newStateValue = typeof newState === 'function' ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (err) {
      setError(`Unable to store new value for ${key} in localStorage.`);
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;
