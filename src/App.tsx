import React, { useEffect, useState } from 'react';
import './App.scss';
import ContentTap from './component/ContentTap';
import './API.js';

function App() {
  return (
    <div className='App'>
      <div id='wrap'>
        {/* 백그라운드 도형 */}
        <div className='back-figure'></div>
        {/* 전체 */}
        <ContentTap />
      </div>
    </div>
  );
}

export default App;
