import React, { useState, useEffect } from 'react';
import './Component.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaLaugh, FaSignal, FaEnvelope } from 'react-icons/fa';
import cn from 'classnames';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAuth, signOut, deleteUser } from 'firebase/auth';
import { app } from '../firebase/firebaseApp'; //firebase 초기화 해둔값

type SelectTabType = 'home' | 'myPage' | 'analyzes' | 'memo';

const Menu = () => {
  const [selectTab, setSelectTab] = useState<SelectTabType>('home');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const navigate = useNavigate();
  const context = useContext(AuthContext);

  useEffect(() => {
    if (context.user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [context]);

  const handleSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteUser = async () => {
    try {
      const auth = getAuth(app);
      const user = auth.currentUser;

      await deleteUser(user!);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='side-menu'>
      <Link to='/'>
        <div className='side-menu__header'>
          <img
            className='side-menu__header__logo-img'
            src={process.env.PUBLIC_URL + './images/logo.svg'}
            alt='Be Health 로고'
          />
          <h1 className='side-menu__header__logo-text'>Be Health</h1>
        </div>
      </Link>
      <ul className='side-menu__authentication'>
        {isAuth ? (
          <>
            <li onClick={handleSignOut}>
              <span>로그아웃</span>
            </li>
            <li onClick={handleDeleteUser}>
              <span>회원탈퇴</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>로그인</Link>
            </li>
            <li>
              <Link to='/signup'>회원가입</Link>
            </li>
          </>
        )}
      </ul>
      <ul className='side-menu__page'>
        <li
          className={cn('side-menu__authentication-tab', {
            select: selectTab === 'home',
          })}
          onClick={() => {
            setSelectTab('home');
            navigate('/');
          }}>
          <FaHome />
          <span>Home</span>
        </li>
        <li
          className={cn('side-menu__authentication-tab', {
            select: selectTab === 'myPage',
          })}
          onClick={() => {
            setSelectTab('myPage');
            navigate('/mypage');
          }}>
          <FaLaugh />
          <span>My Page</span>
        </li>
        <li
          className={cn('side-menu__authentication-tab', {
            select: selectTab === 'analyzes',
          })}
          onClick={() => {
            setSelectTab('analyzes');
          }}>
          <FaSignal />
          <span>Analyzes</span>
        </li>
        <li
          className={cn('side-menu__authentication-tab', {
            select: selectTab === 'memo',
          })}
          onClick={() => {
            setSelectTab('memo');
          }}>
          <FaEnvelope />
          <span>Memo</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
