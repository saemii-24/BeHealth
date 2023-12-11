import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { app } from '../firebase/firebaseApp';

// 새로운 컨텍스트 생성
const AuthContext = createContext({
  user: null as User | null,
});

const AuthContextProvider = ({ children }) => {
  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(user);
      }
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
