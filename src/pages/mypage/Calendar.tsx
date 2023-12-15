import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './MyPage.scss';
import AddSchedule from './AddSchedule';

const Calendar = () => {
  //초기 날짜
  const today = new Date();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  //버튼 클릭에 따라 조정될 날짜 (Month가 변경되며 새 날짜를 찾는다.)
  let [MonthYear, setMonthYear] = useState<number>(-1); //Month는 0부터 시작한다.
  const [updateDate, setUpdateDate] = useState<Date>(today);

  const onClickNext = () => {
    setMonthYear(++MonthYear);
    const updateDate = new Date(year, month + MonthYear, day);
    setUpdateDate(updateDate);
  };
  const onClickPrev = () => {
    setMonthYear(--MonthYear);
    const updateDate = new Date(year, month + MonthYear, day);
    setUpdateDate(updateDate);
  };

  //이번 달 마지막 날짜 얻기
  const thisMonthLastDate = new Date(
    updateDate.getFullYear(),
    updateDate.getMonth() + 1,
    0,
  ).getDate();
  //지난 달 마지막 날짜 얻기
  const lastMonthLastDate = new Date(
    updateDate.getFullYear(),
    updateDate.getMonth() + 1 - 1,
    0,
  ).getDate();

  //이번 달 1일의 요일
  const thisMonthFirstDay = new Date(
    updateDate.getFullYear(),
    updateDate.getMonth() + 1 - 1,
    1,
  ).getDay();
  //이번 달 마지막 날짜의 요일
  const thisMonthLastDay = new Date(
    updateDate.getFullYear(),
    updateDate.getMonth() + 1 - 1,
    thisMonthLastDate,
  ).getDay();

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
    if (
      day === i &&
      today.getMonth() === updateDate.getMonth() &&
      today.getFullYear() === updateDate.getFullYear()
    ) {
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
    <div className='calendar-box'>
      <div className='calendar'>
        <div className='calendar__this-date'>
          <button className='calendar__this-date--back' onClick={onClickPrev}>
            <IoIosArrowBack />
          </button>
          <h1>{updateDate.getFullYear()}년</h1>
          <h1>{updateDate.getMonth() + 1}월</h1>
          <button className='calendar__this-date--forward' onClick={onClickNext}>
            <IoIosArrowForward />
          </button>
          <p
            className='calendar--reset'
            onClick={() => {
              setUpdateDate(new Date());
              setMonthYear(-1);
            }}>
            오늘 날짜 보기
          </p>
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
      <AddSchedule />
    </div>
  );
};

export default Calendar;
