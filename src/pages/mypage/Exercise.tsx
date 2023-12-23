import React, { useState, useEffect } from 'react';
import { ExerciseType, exerciseData } from '../../data/ExerciseData.ts';
import { IoIosBicycle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { BiDumbbell } from 'react-icons/bi';
import { FiMinus } from 'react-icons/fi';
import cn from 'classnames';
import './MyPage.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.tsx';
import {
  collection,
  addDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  getDocs,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseApp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MyPagePopupContext } from '../../context/MyPagePopupContext.tsx';
export interface ExerciseDataType {
  calorie: number;
  detailDate: string;
  date: string;
  id?: string;
  name: string;
  time: number;
  userId: string;
}

const Exercise = () => {
  let context = useContext(AuthContext);
  const { myPagePopup, setMyPagePopup } = useContext(MyPagePopupContext);

  //구조를 위해 exerciseData에서 데이터를 가져왔다고 가정한다.
  const [selectExercise, setSelectExercise] = useState<ExerciseType>(exerciseData[0]);
  const [calorie, setCalorie] = useState<number>(0);

  const [popup, setPopup] = useState<boolean>(false);

  //ExerciseData를 가져온다.

  const [renderData, setRenderData] = useState<(ExerciseDataType | { id: string })[]>([]);

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
  };

  useEffect(() => {
    //사용자가 선택한 시간에 맞춰 칼로리를 계산한다.
    if (selectExercise) {
      let exerciseCalorie = selectExercise.calorie;
      let resultCalorie =
        ((Number(exerciseHour * 60) + Number(exerciseMin)) / 60) * exerciseCalorie;

      resultCalorie = Number(resultCalorie.toFixed(0));

      setCalorie(Number(resultCalorie.toFixed(0)));
    }
  }, [selectExercise, exerciseHour, exerciseMin]);

  //firestore 처리
  //firestore 데이터 불러오기

  const fetchData = async () => {
    if (context.user) {
      try {
        const q = query(
          collection(db, 'myExercise'),
          where('userId', '==', context.user!.uid),
          where('date', '==', new Date().toLocaleDateString()),
          orderBy('dateDetail', 'asc'),
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setRenderData([]);
          querySnapshot.forEach((doc) => {
            setRenderData((prev) => {
              if (prev.some((item) => item.id === doc.id)) {
                return prev;
              } else {
                return [...prev, { ...doc.data(), id: doc.id }];
              }
            });
          });
        } else {
          setRenderData([]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //업데이트 확인

  //firestore 업데이트
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'myExercise'), {
        name: selectExercise.exerciseName,
        time: Number(exerciseHour * 60) + Number(exerciseMin),
        date: new Date().toLocaleDateString(),
        dateDetail: new Date()?.toLocaleDateString('ko', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        calorie: calorie,
        userId: context.user!.uid,
      });
      if (myPagePopup) {
        setPopup(false);
        setMyPagePopup!(false);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  //클릭하면 삭제
  const [hoverBtn, setHoverBtn] = useState<string>('');
  //
  const onDelete = async (data) => {
    try {
      await deleteDoc(doc(db, 'myExercise', data.id));
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [context]);

  return (
    <div className='exercise__box'>
      {context.user ? (
        <>
          {renderData.length > 0 ? (
            <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
              {renderData.map((data: any, index) => {
                return (
                  <SwiperSlide className='exercise' key={index}>
                    <div
                      className='exercise__modify modify'
                      onClick={() => {
                        if (myPagePopup === false) {
                          setPopup(true);
                          setMyPagePopup!(true);
                        }
                      }}>
                      +
                    </div>
                    <div className='exercise__summary'>
                      <div
                        className='exercise__icon'
                        onMouseEnter={() => {
                          setHoverBtn(data.id as string);
                        }}
                        onMouseLeave={() => {
                          setHoverBtn('');
                        }}
                        onClick={() => {
                          onDelete(data);
                        }}>
                        {hoverBtn === data.id ? (
                          <div className='exercise__icon--delete'>
                            <FiMinus />
                          </div>
                        ) : (
                          <>
                            {exerciseData
                              .filter((exercise) => data.name === exercise.exerciseName)
                              .map((exerciseData, index) => {
                                return (
                                  <div
                                    key={index}
                                    className='exercise__icon--type'
                                    onClick={() => {
                                      fetchData();
                                    }}>
                                    {React.createElement(exerciseData.icon)}
                                  </div>
                                );
                              })}
                          </>
                        )}
                      </div>
                      <h1 className='exercise__title'>오늘의 운동</h1>
                      <div className='exercise__type'>{data.name}</div>
                    </div>
                    <div className='exercise__detail'>
                      <div className='exercise__time'>총 {data.time}분</div>
                      <div className='exercise__calorie'>{data.calorie}kcal</div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className='exercise exercise__one'>
              <div
                className='exercise__modify modify'
                onClick={() => {
                  if (myPagePopup === false) {
                    setPopup(true);
                    setMyPagePopup!(true);
                  }
                }}>
                +
              </div>
              <div className='exercise__summary'>
                <div className='exercise__icon'>
                  <BiDumbbell />
                </div>
                <h1 className='exercise__title'>오늘의 운동</h1>
              </div>
              <div className='exercise__detail'>
                <div className='exercise__update'>오늘 한 운동을 업데이트 하세요.</div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className='exercise'>
          <div className='exercise__summary'>
            <div className='exercise__icon'>
              <IoIosBicycle />
            </div>
            <h1 className='exercise__title'>{'오늘의 운동'}</h1>
          </div>
          <div className='exercise__login'>로그인하고 오늘 한 운동을 등록하세요</div>
        </div>
      )}
      <div className={cn('exercise__popup', { active: popup })}>
        <div
          className='exercise__popup__close'
          onClick={() => {
            if (myPagePopup) {
              setPopup(false);
              setMyPagePopup!(false);
            }
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
            <form onSubmit={onSubmit}>
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

              <div className='calorie__box'>
                <span className='calorie'>{calorie}</span> 칼로리
              </div>
              <div className='exercise__button-box'>
                <button className='exercise--submit'>등록하기</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise;
