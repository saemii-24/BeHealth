import React, { createContext, useState } from 'react';
import { RenderDataType } from '../pages/mypage/MyStatus';

// 새로운 컨텍스트 생성
export interface MyStatusContextType {
  data?: RenderDataType;
  setData?: (data: RenderDataType) => void;
}
const MyStatusContext = createContext<MyStatusContextType>({});

const MyStatusContextProvider = ({ children }) => {
  const [data, setData] = useState<RenderDataType>({});

  const updateData = (newData: RenderDataType) => {
    setData(newData);
  };

  return (
    <MyStatusContext.Provider value={{ data, setData: updateData }}>
      {children}
    </MyStatusContext.Provider>
  );
};

export { MyStatusContext, MyStatusContextProvider };
