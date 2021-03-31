
import React, { useContext, useState } from 'react';

const emptyContext = [null, () => {}];

// default value is emptyContext
const UserContext = React.createContext(emptyContext);

const UserContextProvider = UserContext.Provider;

const UseUserProvider = () => {
  const res = useContext(UserContext);
  return res || emptyContext;
};

const UserProvider = ({ children }) => {
  const userModel = useUserModel();
  return (
    <UserContextProvider value={userModel}>
      {children}
    </UserContextProvider>
  );
};

const useUserModel = () => {
  const [user, setUser] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    role: ''
  });
  return {
    user, setUser
  };
};

export { UserProvider, UseUserProvider };
