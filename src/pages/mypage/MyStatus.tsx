import React, { useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { MdBloodtype } from 'react-icons/md';
import { MdMale, MdFemale } from 'react-icons/md';
import { MoodType, moodArr } from './MyPageData.ts';

type SexType = 'male' | 'female';

const MyStatus = () => {
  const [sex, setSex] = useState<string>('male');
  const [mood, setMood] = useState<MoodType>(moodArr[0]);
  const [showMoodBox, setShowMoodBox] = useState<boolean>(false);

  return (
    <div className='my-status'>
      <p className='my-status__modify'>수정</p>
      <div
        className='my-status__mood'
        onClick={() => {
          setShowMoodBox(!showMoodBox);
        }}>
        {showMoodBox && (
          <div className='my-status__mood__select-box'>
            {moodArr.map((mood, index) => {
              return (
                <>
                  <p className='a11y-hidden'>{mood.moodText}</p>
                  <h3
                    onClick={() => {
                      setMood(moodArr[index]);
                    }}>
                    {mood.emoji}
                  </h3>
                </>
              );
            })}
          </div>
        )}
        <p className='a11y-hidden'>{mood.moodText}</p>
        <h3>{mood.emoji}</h3>
      </div>
      <div className='my-status__middle'>
        <h1 className='my-status__name'>{'김철수'}</h1>
        <h3 className='my-status__birth'>{'2001.01.18'}</h3>
        <h3 className='my-status__age'>{23}years</h3>
        <h3 className='my-status__sex'>
          {sex === 'male' ? (
            <MdMale className='my-status__sex--male' />
          ) : (
            <MdFemale className='my-status__sex--female' />
          )}
        </h3>
      </div>
      <div className='my-status__bottom'>
        <div className='my-status__height'>
          <FaPerson />
          <h5>키</h5>
          <h3>{183}cm</h3>
        </div>
        <div className='my-status__weight'>
          <FaWeight />
          <h5>몸무게</h5>
          <h3>{66}kg</h3>
        </div>
        <div className='my-status__blood'>
          <MdBloodtype />
          <h5>혈액형</h5>
          <h3>RH A+</h3>
        </div>
      </div>
    </div>
  );
};

export default MyStatus;
