import React, { createContext, useState } from 'react';
import {RenderDataType } from '../pages/mypage/MyStatus'

// 새로운 컨텍스트 생성
const MyStatusContext = createContext({});

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
