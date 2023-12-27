import React from 'react';
import Calendar from './Calendar';
import MyStatus from './MyStatus';
import Bmi from './Bmi';
import Exercise from './Exercise';
import Medicine from './Medicine';

const MyPage = () => {
  return (
    <div className='my-page'>
      <div className='my-page__top'>
        <MyStatus />
        <div className='my-page__top__middle'>
          <Bmi />
          <Exercise />
        </div>
        <Medicine />
      </div>
      <div className='my-page__bottom'>
        <Calendar />
      </div>
    </div>
  );
};

export default MyPage;
