import React from 'react';
import { ExerciseType, exerciseData } from './ExerciseData';
import { IoIosBicycle } from 'react-icons/io';

const Exercise = () => {
  //구조를 위해 exerciseData에서 데이터를 가져왔다고 가정한다.
  return (
    <div className='exercise'>
      <div className='exercise__modify modify'>+</div>
      <div className='exercise__summary'>
        <div className='exercise__icon'>
          <IoIosBicycle />
        </div>
        <h1 className='exercise__title'>{'오늘의 운동'}</h1>
        <div className='exercise__type'>{'사이클'}</div>
      </div>
      <div className='exercise__detail'>
        <div className='exercise__time'>총 {70}분</div>
        <div className='exercise__calorie'>{130}kcal</div>
      </div>
    </div>
  );
};

export default Exercise;
