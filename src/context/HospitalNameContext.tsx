import React, { createContext, useState } from 'react';

interface HospitalNameType {
  selectName?: string[];
  setSelectName?: (selecName: string) => void;
}
const HospitalNameContext = createContext<HospitalNameType>({});

const HospitalNameContextProvider = ({ children }) => {
  const [selectName, setSelectName] = useState<string[]>([]);

  const updateData = (newData: string) => {
    let copy: string[] = [...selectName];
    let mySet = new Set(copy);
    if (!mySet.has(newData)) {
      copy.push(newData);
      setSelectName(copy);
    }
  };

  return (
    <HospitalNameContext.Provider value={{ selectName, setSelectName: updateData }}>
      {children}
    </HospitalNameContext.Provider>
  );
};

export { HospitalNameContext, HospitalNameContextProvider };
