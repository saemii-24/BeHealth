import React, { useEffect, useState } from 'react';
import './Signup.scss';
import {
  getAuth,
  createUserWithEmailAndPassword,
  //fetchsignupMethodsForEmail,
} from 'firebase/auth';
import { app } from '../../firebase/firebaseApp';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

const Signup = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] =
    useState<string>('이메일 주소를 바르게 입력해주세요.');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] =
    useState<string>('비밀번호는 8자 이상 입력해주세요.');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [confirmError, setConfirmError] =
    useState<string>('비밀번호가 일치하지 않습니다.');

  //에러가 하나라도 있는지 확인한다.
  const [isError, setIsError] = useState<boolean[]>([false, false, false]);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (isError[0] && isError[1] && isError[2]) {
      setButtonDisabled(true);
    }
  }, [isError]);

  const navigate = useNavigate();

  //에러메세지가 하나라도 존재하면 회원가입이 불가하다

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      //에러발생 상황 추가//
      if (err.code === 'auth/email-already-in-use') {
        setEmailError('이미 사용중인 이메일 입니다.');
      }
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    const errorArr = [...isError];

    if (name === 'email') {
      setEmail(value);
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      if (!value?.match(emailRegex)) {
        setEmailError('이메일 주소를 바르게 입력해주세요.');
        errorArr[0] = false;
        setIsError(errorArr);
      } else {
        setEmailError('');
        setEmail(value);
        errorArr[0] = true;
        setIsError(errorArr);
      }
    }
    if (name === 'password') {
      setPassword(value);
      if (password?.length < 7) {
        setPasswordError('비밀번호는 8자 이상 입력해주세요.');
        errorArr[1] = false;
        setIsError(errorArr);
      } else {
        setPasswordError('');
        errorArr[1] = true;
        setIsError(errorArr);
      }
      //만약 password를 지운다면
      if (passwordConfirm !== value) {
        setConfirmError('비밀번호가 일치하지 않습니다.');
      } else {
        setConfirmError('');
      }
    }
    if (name === 'passwordConfirm') {
      setPasswordConfirm(value);
      if (password !== value) {
        setConfirmError('비밀번호가 일치하지 않습니다.');
        errorArr[2] = false;
        setIsError(errorArr);
      } else {
        setConfirmError('');
        errorArr[2] = true;
        setIsError(errorArr);
      }
    }
  };

  return (
    <div className='signup'>
      <div className='signup__header'>
        <img
          className='signup__header__logo-img'
          src={process.env.PUBLIC_URL + './images/logo.svg'}
          alt='Be Health 로고'
        />
        <h1 className='signup__header__logo-text'>Be Health</h1>
      </div>
      <h3 className='signup__header__summary'>
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
        <div className='signup__warning'>
          {emailError ? (
            <div className='signup__warning--error'>{emailError}</div>
          ) : (
            <div className='signup__warning--success'>
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
        <div className='signup__warning'>
          {passwordError ? (
            <div className='signup__warning--error'>{passwordError}</div>
          ) : (
            <div className='signup__warning--success'>
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
        <div className='signup__warning'>
          {confirmError ? (
            <div className='signup__warning--error'>{confirmError}</div>
          ) : (
            <div className='signup__warning--success'>비밀번호가 일치합니다.</div>
          )}
        </div>
        {
          <button
            className={cn('submit', { 'submit--disabled': buttonDisabled })}
            type='submit'
            disabled={buttonDisabled}>
            회원가입
          </button>
        }
      </form>
    </div>
  );
};

export default Signup;
