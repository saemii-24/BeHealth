import React, { useContext, useEffect } from 'react';
import './App.scss';
import './common.scss';
import SideMenu from './component/SideMenu';
import Login from './pages/login/Login';
import ConfirmLogin from './pages/login/ConfirmLogin';
import Signup from './pages/siginup/Signup';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import MyPage from './pages/mypage/MyPage';
import About from './pages/about/About';
import { AuthContext } from './context/AuthContext';
import { MyPagePopupContext } from './context/MyPagePopupContext';
import { MainPopupContext } from './context/MainPopupContext';
import { useLocation } from 'react-router-dom';

function App() {
  const context = useContext(AuthContext);
  const { setMyPagePopup } = useContext(MyPagePopupContext);
  const { setMainPopup } = useContext(MainPopupContext);
  const location = useLocation();

  useEffect(() => {
    setMyPagePopup!(false);
    setMainPopup!(false);
  }, [location]);

  return (
    <div className='App'>
      <div id='wrap'>
        <div className='back-figure'></div>
        <div className='content-back'>
          <SideMenu />
          <div className='content'>
            {context.user ? (
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/loginconfirm' element={<ConfirmLogin />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Main />} />
              </Routes>
            ) : (
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/loginconfirm' element={<ConfirmLogin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Main />} />{' '}
              </Routes>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
