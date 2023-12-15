import React, { ReactElement, useState } from 'react';
import './Login.scss';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase/firebaseApp';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ title }: { title?: ReactElement }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const auth = getAuth(app);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
      console.log('click');
      setError('');
    } catch (err) {
      setError('일치하는 계정이 없습니다.');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
      console.log(email);
    }
    if (name === 'password') {
      setPassword(value);
      console.log(password);
    }
  };

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
        {title ? (
          <>{title}</>
        ) : (
          <>
            {' '}
            나의 건강정보를 손쉽게 관리하고 싶다면?
            <br /> Be Health에서 지금 시작해 보세요.
          </>
        )}
      </h3>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>아이디(이메일)</label>
        <input
          type='text'
          name='email'
          id='email'
          placeholder='이메일'
          autoComplete='off'
          onChange={onChange}
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='비밀번호'
          autoComplete='off'
          onChange={onChange}
        />
        <p className='login--error'>{error}</p>
        <button className='submit' type='submit'>
          로그인
        </button>
      </form>
      {!title && <Link to='/signup'>계정이 없으신가요?</Link>}
    </div>
  );
};

export default Login;
