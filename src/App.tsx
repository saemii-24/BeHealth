import React, { useEffect, useState } from 'react';
import './App.scss';
import './common.scss';
import SideMenu from './component/SideMenu';
import ContentTap from './component/ContentTap';
import Login from './pages/login/Login';
import Signin from './pages/siginup/signup.js';
import './API.js';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import MyPage from './pages/mypage/MyPage';
import { getAuth } from 'firebase/auth';
import { app } from './firebase/firebaseApp';
function App() {
  const auth = getAuth(app); //current User가 있으면 login, 없으면 logout 상태
  console.log(auth);

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
              <Route path='/signin' element={<Signin />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
