import React, { createContext, useContext, useState } from 'react';

const CurrentOrderContext = createContext();

const { Provider } = CurrentOrderContext;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state'); // eslint-disable-line
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState); // eslint-disable-line
  } catch (e) {
    console.error(e);
    // Ignore write errors;
  }
};

const loadedState = loadState();

const CurrentOrderProvider = (props) => {
  const [currentOrder, setCurrentOrder] = useState(loadedState);
  console.log('##########!!!!!!!!');
  saveState(currentOrder);
  console.log(currentOrder);
  return (
    <Provider value={[currentOrder, setCurrentOrder]} {...props} />
  );
};

const useCurrentOrderContext = () => {
  return useContext(CurrentOrderContext);
};

export { CurrentOrderProvider, useCurrentOrderContext };
