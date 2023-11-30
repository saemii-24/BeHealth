import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './MyPage.scss';

const Calendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  //이번 달 마지막 날짜 얻기
  const thisMonthLastDate = new Date(new Date().getFullYear(), month, 0).getDate();
  console.log(thisMonthLastDate);
  //지난 달 마지막 날짜 얻기
  const lastMonthLastDate = new Date(new Date().getFullYear(), month - 1, 0).getDate();

  //이번 달 1일의 요일
  const thisMonthFirstDay = new Date(year, month - 1, 1).getDay();
  //이번 달 마지막 날짜의 요일
  const thisMonthLastDay = new Date(year, month - 1, thisMonthLastDate).getDay();
  console.log(thisMonthLastDay);

  //이번 달 1일부터 마지막 날자까지 div 만들기
  const thisDateArr: React.ReactElement[] = []; //렌더링 될 날짜 값

  //지난 달 날짜
  for (let i = thisMonthFirstDay - 1; i >= 0; i--) {
    thisDateArr.push(
      <div
        className='calendar__seven-day--date calendar__seven-day--date--last'
        key={'lastMonthLastDate' + i}>
        {lastMonthLastDate - i}
      </div>,
    );
  }
  //이번 달 날짜
  for (let i = 1; i <= thisMonthLastDate; i++) {
    if (day === i) {
      thisDateArr.push(
        <div
          className='calendar__seven-day--date calendar__seven-day--date--today'
          key={i}>
          {i}
        </div>,
      );
    } else {
      thisDateArr.push(
        <div className='calendar__seven-day--date' key={i}>
          {i}
        </div>,
      );
    }
  }
  //다음 달 날짜
  for (let i = 1; i <= 6 - thisMonthLastDay; i++) {
    thisDateArr.push(
      <div
        className='calendar__seven-day--date calendar__seven-day--date--next'
        key={'NextMonthDate' + i}>
        {i}
      </div>,
    );
  }

  return (
    <div className='calendar'>
      <div className='calendar__this-date'>
        <button className='calendar__this-date--back'>
          <IoIosArrowBack />
        </button>
        <h1>{year}년</h1>
        <h1>{month}월</h1>
        <button className='calendar__this-date--forward'>
          <IoIosArrowForward />
        </button>
      </div>
      <div className='calendar__seven-day'>
        <div className='calendar__seven-day--day'>Su</div>
        <div className='calendar__seven-day--day'>Mo</div>
        <div className='calendar__seven-day--day'>Tu</div>
        <div className='calendar__seven-day--day'>We</div>
        <div className='calendar__seven-day--day'>Th</div>
        <div className='calendar__seven-day--day'>Fr</div>
        <div className='calendar__seven-day--day'>Sa</div>
        {/* 지난 달 + 이번 달 + 다음 달 날짜 */}
        {thisDateArr}
      </div>
    </div>
  );
};

export default Calendar;
