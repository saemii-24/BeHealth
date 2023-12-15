import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const ExercisePop = (props) => {
  let { closeExercise, closeHealthNews } = props;

  return (
    <div className='exercise-pop'>
      <div
        className='icon close'
        onClick={() => {
          closeExercise();
          closeHealthNews();
        }}>
        <IoIosArrowBack className='fontawesome' />
      </div>

      <div className='title'>
        <div className='icon'>
          <FontAwesomeIcon icon={faDumbbell} className='fontawesome' />
        </div>
        <h3>오늘의 추천 운동</h3>
      </div>

      <div className='recomend-age'>
        <h4>나이별</h4>

        <div className='classify'></div>
      </div>
    </div>
  );
};

export default ExercisePop;
