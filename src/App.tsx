import React, { useEffect, useState } from 'react';
import './App.scss';
import './common.scss';
import SideMenu from './component/SideMenu';
import ContentTap from './component/ContentTap';
import Login from './pages/login/Login';
import SignUp from './pages/siginup/SignUp';
import './API.js';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import MyPage from './pages/mypage/MyPage';

function App() {
  return (
    <div className='App'>
      <div id='wrap'>
        <div className='back-figure'></div>
        <div className='content-back'>
          <SideMenu />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/mypage' element={<MyPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
