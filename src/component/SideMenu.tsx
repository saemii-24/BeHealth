import React, { useState } from 'react';
import './Component.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaLaugh, FaSignal, FaEnvelope } from 'react-icons/fa';
import cn from 'classnames';

type SelectTabType = 'home' | 'myPage' | 'analyzes' | 'memo';

const Menu = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  const [selectTab, setSelectTab] = useState<SelectTabType>('home');
  const navigate = useNavigate();

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
        <li>
          <Link to='/login'>로그인</Link>
        </li>
        <li>
          <Link to='/signin'>회원가입</Link>
        </li>
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
