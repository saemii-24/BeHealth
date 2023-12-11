import React, { useState } from 'react';
import { FaWeight } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { MdBloodtype } from 'react-icons/md';
import { MdMale, MdFemale } from 'react-icons/md';
import { MoodType, moodArr } from './MyPageData.ts';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';

const MyStatus = () => {
  const [gender, setGender] = useState<string>('male');
  const [mood, setMood] = useState<MoodType>(moodArr[0]);
  const [showMoodBox, setShowMoodBox] = useState<boolean>(false);
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <div className='my-status-box'>
      <div className='my-status'>
        <p
          className='my-status__modify modify'
          onClick={() => {
            setPopup(true);
          }}>
          수정
        </p>
        <div
          className='my-status__mood'
          onClick={() => {
            setShowMoodBox(!showMoodBox);
          }}>
          {showMoodBox && (
            <div className='my-status__mood__select-box'>
              {moodArr.map((mood, index) => {
                return (
                  <div key={mood.moodText}>
                    <p className='a11y-hidden'>{mood.moodText}</p>
                    <h3
                      onClick={() => {
                        setMood(moodArr[index]);
                      }}>
                      {mood.emoji}
                    </h3>
                  </div>
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
          <h3 className='my-status__gender'>
            {gender === 'male' ? (
              <MdMale className='my-status__gender--male' />
            ) : (
              <MdFemale className='my-status__gender--female' />
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
      <div className={cn('my-status__popup', { active: popup })}>
        <div
          className='my-status__popup__close'
          onClick={() => {
            setPopup(false);
          }}>
          <IoClose />
        </div>
        <form>
          <div>
            <label htmlFor='name'>이름</label>
            <input type='text' id='name' name='name' />
          </div>
          <div>
            <label htmlFor='birth'>생일</label>
            <input type='date' id='birth' name='birth' />
          </div>
          <div className='gender__radio'>
            <p>성별</p>
            <label htmlFor='gender--male'>남성</label>
            <input type='radio' id='gender--male' name='gender' />
            <label htmlFor='gender--female' className='gender--female'>
              여성
            </label>
            <input type='radio' id='gender--female' name='gender' />
          </div>
          <div>
            <label htmlFor='height'>키</label>
            <input type='number' name='height' id='height' min={0} />
            <span>cm</span>
          </div>
          <div>
            <label htmlFor='weight'>몸무게</label>
            <input type='number' name='weight' id='weight' min={0} />
            <span>kg</span>
          </div>
          <div>
            <label htmlFor='blood-type'>혈액형</label>
            <input type='text' name='blood-type' id='blood-type' />
          </div>
          <div className='button__box'>
            <button
              className='button--submit'
              onClick={(e) => {
                e.preventDefault();
              }}>
              등록완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyStatus;
