import React from 'react';
import firebase from '../../firebase/firebase';
import Calendar from './Calendar';

const MyPage = () => {
  console.log(firebase);

  return (
    <>
      <Calendar />
    </>
  );
};

export default MyPage;
