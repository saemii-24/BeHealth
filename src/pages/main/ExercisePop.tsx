import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const ExercisePop = (props) => {
  let { closeExercise, closeHealthNews } = props;

  return (
    <div className='exercise-pop'>
      <div
        className='icon'
        onClick={() => {
          closeExercise();
          closeHealthNews();
        }}>
        <IoIosArrowBack className='fontawesome' />
      </div>
    </div>
  );
};

export default ExercisePop;
