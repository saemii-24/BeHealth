import React, { useEffect, useState } from 'react';
import './Signin.scss';
import {
  getAuth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { app } from '../../firebase/firebaseApp';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [confirmError, setConfirmError] = useState<string>('');
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
      console.log('click');
    } catch (err) {
      //에러발생 상황 추가//
      console.log(err);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      if (!value?.match(emailRegex)) {
        setEmailError('이메일 주소를 바르게 입력해주세요.');
      } else {
        setEmailError('');
        setEmail(value);
      }
    }
    if (name === 'password') {
      setPassword(value);
      if (password?.length < 8) {
        setPasswordError('비밀번호는 8자 이상 입력해주세요.');
      } else {
        setPasswordError('');
      }
    }
    if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
      if (password !== value) {
        setConfirmError('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmError('');
      }
    }
  };

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
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>아이디(이메일)</label>
        <input
          onChange={onChange}
          type='text'
          name='email'
          id='email'
          placeholder='이메일'
          autoComplete='off'
        />
        <div className='signin__warning'>
          {emailError ? (
            <div className='signin__warning--error'>{emailError}</div>
          ) : (
            <div className='signin__warning--success'>
              이메일 주소가 바르게 입력되었습니다.
            </div>
          )}
        </div>
        <label htmlFor='password'>비밀번호</label>
        <input
          onChange={onChange}
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호'
          autoComplete='off'
        />
        <div className='signin__warning'>
          {passwordError ? (
            <div className='signin__warning--error'>{passwordError}</div>
          ) : (
            <div className='signin__warning--success'>
              비밀번호가 바르게 입력되었습니다.
            </div>
          )}
        </div>
        <label htmlFor='passwordConfirm'>비밀번호 확인</label>
        <input
          onChange={onChange}
          type='password'
          name='passwordConfirm'
          id='passwordConfirm'
          placeholder='비밀번호 확인'
          autoComplete='off'
        />
        <div className='signin__warning'>
          {confirmError ? (
            <div className='signin__warning--error'>{confirmError}</div>
          ) : (
            <div className='signin__warning--success'>비밀번호가 일치합니다.</div>
          )}
        </div>
        <button className='submit' type='submit'>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signin;
