import React from 'react';
import './Signin.scss';

const Signin = () => {
  return (
    <div className='signin'>
      <div className='signin__header'>
        <img
          className='signin__header__logo-img'
          src={process.env.PUBLIC_URL + './images/logo.svg'}
          alt='Be Health 로고'
        />
        <h1 className='signin__header__logo-text'>Be Health</h1>
      </div>
      <h3 className='signin__header__summary'>
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
        <p className='signin__warning'>아이디(이메일) 주소를 바르게 입력해주세요.</p>
        <label htmlFor='password'>비밀번호</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호'
          autoComplete='off'
        />
        <p className='signin__warning'>비밀번호는 8자 이상 입력해주세요.</p>
        <label htmlFor='passwordConfirm'>비밀번호 확인</label>
        <input
          type='password'
          name='passwordConfirm'
          id='passwordConfirm'
          placeholder='비밀번호 확인'
          autoComplete='off'
        />
        <p className='signin__warning'>비밀번호가 일치하지 않습니다.</p>
        <input
          className='submit'
          type='submit'
          value='회원가입'
          autoComplete='off'
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
};

export default Signin;
