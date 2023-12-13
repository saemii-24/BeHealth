// import React, { createContext, useState } from 'react';
// import {RenderDataType } from '../pages/mypage/MyStatus'

// // 새로운 컨텍스트 생성
// const ExerciseContext = createContext({});

// const ExerciseContextProvider = ({ children }) => {
//     const [data, setData] = useState<RenderDataType>({});
  
//     const updateData = (newData: RenderDataType) => {
//       setData(newData);
//     };
  
//     return (
//       <ExerciseContext.Provider value={{ data, setData: updateData }}>
//         {children}
//       </ExerciseContext.Provider>
//     );
// };

// export { ExerciseContext, ExerciseContextProvider };
