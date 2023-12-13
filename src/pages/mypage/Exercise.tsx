import React, { useState, useEffect } from 'react';
import { ExerciseType, exerciseData } from './ExerciseData';
import { IoIosBicycle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import cn from 'classnames';
import './MyPage.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.tsx';
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
} from 'firebase/firestore';
import { db, app } from '../../firebase/firebaseApp';

interface ExerciseDataType {
  exercise? : [{
    date?: Date,
    name?: string,
    time?: number,
  }],
  userId?: string,
}

const Exercise = () => {
  let context = useContext(AuthContext);

  //구조를 위해 exerciseData에서 데이터를 가져왔다고 가정한다.
  const [selectExercise, setSelectExercise] = useState<ExerciseType>(exerciseData[0]);
  const [calorie, setCalorie] = useState<number>(0);

  const [popup, setPopup] = useState<boolean>(false);

  //ExerciseData를 가져온다.
  const [addInfo, setAddInfo] = useState<boolean>(false); //이미 생성된 데이터가 있는가?
  const [myId, setMyId] = useState<string>(""); //생성된 사용자 객체 데이터
  const [renderData, setRenderData] = useState<ExerciseDataType>({});
 
  const fetchData = async () => {
    if (context.user) {
      try{
        const q = query(
          collection(db, 'myExercise'),
          where('userId', '==', context.user!.uid),
        );
        const querySnapshot = await getDocs(q);
  
        if (!querySnapshot.empty) {
          setAddInfo(true);
          querySnapshot.forEach((doc) => {
            setMyId(doc.id);
            setRenderData(doc.data());
          });
        } else {
          setAddInfo(false);
        }
      }catch(err){
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
    console.log(renderData);
  }, [context]);


  //운동 시간 업데이트
  const [exerciseHour, setExerciseHour] = useState<number>(0);
  const [exerciseMin, setExerciseMin] = useState<number>(0);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'exerciseHour') {
      setExerciseHour(value);
    }
    if (name === 'exerciseMin') {
      setExerciseMin(value);
    }
  }
  
//사용자가 선택한 시간에 맞춰 칼로리를 계산한다.
 

  return (
    <div className='exercise__box'>
      {context.user ?
        <div className='exercise'>
          <div
            className='exercise__modify modify'
            onClick={() => {
              setPopup(true);
              console.log(popup);
            }}>
            +
          </div>
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
      :
        <div className='exercise'>
         
          <div className='exercise__summary'>
            <div className='exercise__icon'>
              <IoIosBicycle />
            </div>
            <h1 className='exercise__title'>{'오늘의 운동'}</h1>
          </div>
          <div className='exercise__login'>
            로그인하고 오늘 한 운동을 등록하세요
          </div>
        </div>
      }
      <div className={cn('exercise__popup', { active: popup })}>
        <div
          className='exercise__popup__close'
          onClick={() => {
            setPopup(false);
            console.log(popup);
          }}>
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
                onChange={onChange}
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
                onChange={onChange}
              />
              <label htmlFor='exerciseMin'>분</label>
            </form>
            <div className='calorie__box'>
              <span className='calorie'>{calorie}</span> 칼로리
            </div>
            <div className='exercise__button-box'>
              <button className='exercise--submit'>등록하기</button>
              <button className='exercise--reset'>초기화</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
