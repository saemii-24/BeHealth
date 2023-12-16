import React, { createContext, useState } from 'react';

interface HospitalAddType {
  selectAdd?: string[];
  setSelectAdd?: (selectAdd: string) => void;
}
const HospitalAddContext = createContext<HospitalAddType>({});

const HospitalAddContextProvider = ({ children }) => {
  const [selectAdd, setSelectAdd] = useState<string[]>([]);

  const updateData = (newData: string) => {
    let copy: string[] = [...selectAdd];
    copy.push(newData);
    setSelectAdd(copy);
  };

  return (
    <HospitalAddContext.Provider value={{ selectAdd, setSelectAdd: updateData }}>
      {children}
    </HospitalAddContext.Provider>
  );
};

export { HospitalAddContext, HospitalAddContextProvider };
