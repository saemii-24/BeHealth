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
    let mySet = new Set(copy);

    if (!mySet.has(newData)) {
      //중복되지 않을때만 넣는다.
      copy.push(newData);
      setSelectAdd(copy);
    }
  };

  return (
    <HospitalAddContext.Provider value={{ selectAdd, setSelectAdd: updateData }}>
      {children}
    </HospitalAddContext.Provider>
  );
};

export { HospitalAddContext, HospitalAddContextProvider };
