import React from 'react';
import Login from './Login';
const ConfirmLogin = () => {
  return (
    <>
      <Login
        title={
          <>
            일정 시간이 경과되어, 재로그인 하신 후 <br /> 회원 탈퇴가 가능합니다.
          </>
        }
      />
    </>
  );
};

export default ConfirmLogin;
