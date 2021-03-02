import React, { createContext, useContext, useState } from 'react';

const CurrentOrderContext = createContext();

const { Provider } = CurrentOrderContext;

const CurrentOrderProvider = (props) => {
  const [currentOrder, setCurrentOrder] = useState(0);

  return (
    <Provider value={[currentOrder, setCurrentOrder]} {...props} />
  );
};

const useCurrentOrderContext = () => {
  return useContext(CurrentOrderContext);
};

export { CurrentOrderProvider, useCurrentOrderContext };
