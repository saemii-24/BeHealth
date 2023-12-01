import React, { useState, useEffect } from 'react';
import { FaPerson } from 'react-icons/fa6';

interface BmiType {
  num: number;
  text: string;
  color: string;
}
const Bmi = () => {
  //더미데이터
  const user = { height: 180, weight: 70 };
  //bmi계산
  const [bmi, setBmi] = useState<BmiType>({
    num: 22,
    text: '정상체중',
    color: '#306DE5',
  });

  const calculateBmi = (bmiObj: { height: number; weight: number }) => {
    const bmiResult = bmiObj.weight / (bmiObj.height * 0.01) ** 2;
    console.log(bmiResult);
    let bmiResultText = '';
    let bmiResultColor = '';
    if (bmiResult <= 18.5) {
      bmiResultText = '저체중';
      bmiResultColor = '#306DE5';
    } else if (bmiResult > 18.5 && bmiResult <= 23) {
      bmiResultText = '정상체중';
      bmiResultColor = '#ABDB98';
    } else if (bmiResult > 23 && bmiResult <= 25) {
      bmiResultText = '과체중';
      bmiResultColor = '#FFD749';
    } else if (bmiResult > 25) {
      bmiResultText = '비만';
      bmiResultColor = '#FD4E53';
    }
    return {
      num: Number(bmiResult.toFixed(1)),
      text: bmiResultText,
      color: bmiResultColor,
    };
  };

  useEffect(() => {
    const userBmi = calculateBmi(user);
    setBmi(userBmi);
  }, []);

  return (
    <div className='bmi'>
      <div className='bmi__summary'>
        <div className='bmi__icon'>
          <FaPerson />
        </div>
        <h1 className='bmi__title'>BMI</h1>
        <div className='bmi__number'>{bmi.num}</div>
        <div className='bmi__text'>{bmi.text}입니다.</div>
      </div>

      <div className='bmi__graph'>
        <div className='bmi__graph__point-box'>
          <svg
            className='bmi__graph__point'
            width='24'
            height='34'
            viewBox='0 0 25 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12 34C12 34 24 18.5185 24 11.9298C24 5.34116 18.6274 0 12 0C5.37256 0 0 5.34116 0 11.9298C0 18.5185 12 34 12 34ZM12 17C15.3137 17 18 14.3137 18 11C18 7.68628 15.3137 5 12 5C8.68628 5 6 7.68628 6 11C6 14.3137 8.68628 17 12 17Z'
              fill={bmi.color}
            />
          </svg>
        </div>
        <div className='bmi__graph--bar bmi__graph--bar--underweight'>
          <span className='a11y-hidden'>저체중</span>
          <div className='bmi__graph--num'>18.5</div>
        </div>
        <div className='bmi__graph--bar bmi__graph--bar--normal'>
          <span className='a11y-hidden'>정상</span>
          <div className='bmi__graph--num'>23</div>
        </div>
        <div className='bmi__graph--bar bmi__graph--bar--overweight'>
          <span className='a11y-hidden'>과제충</span>
          <div className='bmi__graph--num'>25</div>
        </div>
        <div className='bmi__graph--bar bmi__graph--bar--obese'>
          <span className='a11y-hidden'>비만</span>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
