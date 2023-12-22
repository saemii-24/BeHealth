import React, { createContext, useState } from 'react';

interface MainPopupType {
  mainPopup?: boolean;
  setMainPopup?: (selecName: boolean) => void;
}
const MainPopupContext = createContext<MainPopupType>({});

const MainPopupContextProvider = ({ children }) => {
  const [mainPopup, setMainPopup] = useState<boolean>(false);

  const updateData = (newData: boolean) => {
    setMainPopup(newData);
  };

  return (
    <MainPopupContext.Provider value={{ mainPopup, setMainPopup: updateData }}>
      {children}
    </MainPopupContext.Provider>
  );
};

export { MainPopupContext, MainPopupContextProvider };
