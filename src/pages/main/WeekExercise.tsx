import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext.tsx';

import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseApp';
import { ExerciseDataType } from '../mypage/Exercise';

const WeekExercise = () => {
  //이번주 날짜 구하기
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDay();
  const date = today.getDate();

  let thisWeek: String[] = [];

  function checkThisWeek() {
    for (let i = day - 1; i >= 0; i--) {
      const thisDate = new Date(year, month, date - i);
      const makeDate = makeStringDate(thisDate);
      thisWeek.push(makeDate);
    }
    for (let i = 1; i <= 7 - day; i++) {
      const thisDate = new Date(year, month, date + i);
      const makeDate = makeStringDate(thisDate);
      thisWeek.push(makeDate);
    }
  }
  //원하는 형식으로 값 바꿔주는 함수
  function makeStringDate(originDate) {
    const year = originDate.getFullYear();
    const month = originDate.getMonth() + 1;
    const date = originDate.getDate();
    return year + '. ' + month + '. ' + date + '.';
  }

  console.log(thisWeek);
  const context = useContext(AuthContext);
  const [weekData, setWeekData] = useState<(ExerciseDataType | { id: string })[]>([]);
  //운동 정보 불러오기
  const fetchData = async () => {
    if (context.user) {
      try {
        const q = query(
          collection(db, 'myExercise'),
          where('userId', '==', context.user!.uid),
          where('date', 'in', thisWeek),
          orderBy('date', 'asc'),
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setWeekData([]);
          querySnapshot.forEach((doc) => {
            setWeekData((prev) => {
              if (prev.some((item) => item.id === doc.id)) {
                return prev;
              } else {
                return [...prev, { ...doc.data(), id: doc.id }];
              }
            });
          });
          console.log(weekData);
        } else {
          setWeekData([]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  checkThisWeek();
  useEffect(() => {
    checkThisWeek();
    fetchData();
    makeGraph();
  }, [context]);

  //받아온 데이터를 이용해 특정

  //얻은 운동 시간 데이터로 평균시간과 각 날짜의 백분율 계산
  const weekDay = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const [avgTime, setAvgTime] = useState<number>(0);
  const [maxTime, setMaxTime] = useState<number>(0);
  const [timeArr, setTimeArr] = useState<number[]>([]);

  function makeGraph() {
    let timeSumArr = [];
    for (let i = 0; i < 7; i++) {
      const thisDate = thisWeek[i];
      const result = weekData.filter((week: any) => week.date === thisDate);
      if (result.length >= 2) {
        const timeSum = result.reduce((a, b) => a.time + b.time);
        timeSumArr.push(timeSum);
      } else if (result.length === 1) {
        timeSumArr.push(result[0].time);
      } else {
        timeSumArr.push(0);
      }
    }
    setTimeArr(timeSumArr);
    const all = timeSumArr.reduce((a, b) => a + b);
    const avg = Number((all / 7).toFixed(0));
    setAvgTime(avg);
    const max = Math.max(...timeSumArr);
    setMaxTime(max);
  }

  return (
    <>
      <h3>
        이번주 운동량 <span>&#40; 평균 {avgTime}분 &#41;</span>
      </h3>
      <div className='graph-box'>
        {timeArr.map((time, index) => {
          return (
            <div key={index} className='graph'>
              <div
                style={{
                  height: `${(time * 100) / maxTime}%`,
                  background: `${(time * 100) / maxTime > 50 ? '#FFD749' : '#fde9a0'}`,
                }}></div>
              <p>{weekDay[index]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WeekExercise;
