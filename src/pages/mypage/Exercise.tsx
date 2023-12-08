import React, { useState, useEffect } from 'react';
import { ExerciseType, exerciseData } from './ExerciseData';
import { IoIosBicycle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';

const Exercise = () => {
  //구조를 위해 exerciseData에서 데이터를 가져왔다고 가정한다.
  const [selectExercise, setSelectExercise] = useState<ExerciseType | null>(null);
  const [calorie, setCalorie] = useState<number>(0);
  const [exerciseHour, setExerciseHour] = useState<number>(0);
  const [exerciseMin, setExerciseMin] = useState<number>(0);

  useEffect(() => {
    //사용자가 선택한 시간에 맞춰 칼로리를 계산한다.
    if (selectExercise) {
      let exerciseCalorie = selectExercise.calorie;
      let resultCalorie = (exerciseHour + exerciseMin / 60) * exerciseCalorie;
      resultCalorie = parseInt(String(resultCalorie));

      setCalorie(resultCalorie);
    }
  }, [selectExercise, exerciseHour, exerciseMin]);

  return (
    <div className='exercise__box'>
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
      <div className='exercise__popup'>
        <div className='exercise__popup__close'>
          <IoClose />
        </div>
        <h3 className='exercise__popup__title'>오늘의 운동을 등록하세요.</h3>
        <div className='exercise__button-box'>
          {exerciseData.map((exercise) => {
            return (
              <button
                key={exercise.exerciseKey}
                name={exercise.exerciseName}
                className={cn(
                  'exercise__button' + exercise.exerciseKey + ' exercise__button',
                  { active: exercise === selectExercise },
                )}
                onClick={() => {
                  setSelectExercise(exercise);
                  setExerciseHour(0);
                  setExerciseMin(0);
                }}>
                {React.createElement(exercise.icon)}
              </button>
            );
          })}
        </div>
        {selectExercise && (
          <div className='exercise__popup-box'>
            <h2>{selectExercise.exerciseName}</h2>
            <form>
              <input
                type='number'
                name='exerciseHour'
                id='exerciseHour'
                min={0}
                max={23}
                value={exerciseHour}
                onChange={(e) => {
                  setExerciseHour(Number(e.target.value));
                }}
              />
              <label htmlFor='exerciseHour' className='exercise__hour-gap'>
                시간
              </label>
              <input
                type='number'
                name='exerciseMin'
                id='exerciseMin'
                min={0}
                max={50}
                step={10}
                value={exerciseMin}
                onChange={(e) => {
                  setExerciseMin(Number(e.target.value));
                }}
              />
              <label htmlFor='exerciseMin'>분</label>
            </form>
            <div className='calorie__box'>
              <span className='calorie'>{calorie}</span> 칼로리
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
