import React, { createContext, useState } from 'react';

interface MyPagePopupType {
  myPagePopup?: boolean;
  setMyPagePopup?: (selecName: boolean) => void;
}
const MyPagePopupContext = createContext<MyPagePopupType>({});

const MyPagePopupContextProvider = ({ children }) => {
  const [myPagePopup, setMyPagePopup] = useState<boolean>(false);

  const updateData = (newData: boolean) => {
    setMyPagePopup(newData);
  };

  return (
    <MyPagePopupContext.Provider value={{ myPagePopup, setMyPagePopup: updateData }}>
      {children}
    </MyPagePopupContext.Provider>
  );
};

export { MyPagePopupContext, MyPagePopupContextProvider };
