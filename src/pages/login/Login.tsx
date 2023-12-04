import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='login__header'>
        <img
          className='login__header__logo-img'
          src={process.env.PUBLIC_URL + './images/logo.svg'}
          alt='Be Health 로고'
        />
        <h1 className='login__header__logo-text'>Be Health</h1>
      </div>
      <h3 className='login__header__summary'>
        나의 건강정보를 손쉽게 관리하고 싶다면?
        <br /> Be Health에서 지금 시작해 보세요.
      </h3>
      <form>
        <label htmlFor='email'>아이디(이메일)</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='이메일'
          autoComplete='off'
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호'
          autoComplete='off'
        />

        <input
          className='submit'
          type='submit'
          value='로그인'
          autoComplete='off'
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
};

export default Login;
