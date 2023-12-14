import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FaVirus } from 'react-icons/fa6';
import DiseasePop from './DiseasePop';
import ExercisePop from './ExercisePop';
import CommonPop from './CommonPop';

const HealthNews = (props) => {
  let { clickHealthNews, closeHealthNews, theMonth } = props;

  let chNewsBox = useRef<any>(null);
  let chDisease = useRef<any>(null);
  let chExercise = useRef<any>(null);
  let chCommon = useRef<any>(null);

  let [showDisease, setShowDisease] = useState(false);
  let [showExercise, setShowExercise] = useState(false);
  let [showCommon, setShowCommon] = useState(false);

  function clickDisease() {
    chNewsBox.current.style.width = '730px';
    chDisease.current.style.display = 'none';
    chExercise.current.style.display = 'none';
    chCommon.current.style.display = 'none';
    setShowDisease(true);
  }

  function closeDisease() {
    chNewsBox.current.style.width = '350px';
    chDisease.current.style.display = 'flex';
    chExercise.current.style.display = 'flex';
    chCommon.current.style.display = 'flex';
    setShowDisease(false);
  }

  function clickExercise() {
    chNewsBox.current.style.width = '730px';
    chDisease.current.style.display = 'none';
    chExercise.current.style.display = 'none';
    chCommon.current.style.display = 'none';
    setShowExercise(true);
  }

  function closeExercise() {
    chNewsBox.current.style.width = '350px';
    chDisease.current.style.display = 'flex';
    chExercise.current.style.display = 'flex';
    chCommon.current.style.display = 'flex';
    setShowExercise(false);
  }

  function clickCommon() {
    chNewsBox.current.style.width = '730px';
    chDisease.current.style.display = 'none';
    chExercise.current.style.display = 'none';
    chCommon.current.style.display = 'none';
    setShowCommon(true);
  }

  function closeCommon() {
    chNewsBox.current.style.width = '350px';
    chDisease.current.style.display = 'flex';
    chExercise.current.style.display = 'flex';
    chCommon.current.style.display = 'flex';
    setShowCommon(false);
  }

  return (
    <div className='health-news' ref={chNewsBox}>
      {showDisease ? (
        <DiseasePop
          setShowDisease={setShowDisease}
          closeDisease={closeDisease}
          closeHealthNews={closeHealthNews}
          theMonth={theMonth}
        />
      ) : null}
      <div
        ref={chDisease}
        className='disease'
        onClick={() => {
          clickHealthNews();
          clickDisease();
        }}>
        <div className='icon'>
          <FaVirus className='fontawesome' />
        </div>

        <div className='disease__txt'>
          <h3>유행 주의 질병</h3>
          <p>
            자세히 보기 <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' />
          </p>
        </div>
      </div>

      {showExercise ? (
        <ExercisePop
          setShowExercise={setShowExercise}
          closeExercise={closeExercise}
          closeHealthNews={closeHealthNews}
        />
      ) : null}
      <div
        className='exercise'
        ref={chExercise}
        onClick={() => {
          clickHealthNews();
          clickExercise();
        }}>
        <div className='icon'>
          <FontAwesomeIcon icon={faDumbbell} className='fontawesome' />
        </div>

        <div className='exercise__txt'>
          <h3>오늘의 추천 운동</h3>
          <p>
            자세히 보기 <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' />
          </p>
        </div>
      </div>

      {showCommon ? (
        <CommonPop
          setShowCommon={setShowCommon}
          closeHealthNews={closeHealthNews}
          closeCommon={closeCommon}
        />
      ) : null}
      <div
        className='health-common'
        ref={chCommon}
        onClick={() => {
          clickHealthNews();
          clickCommon();
        }}>
        {/* 출처 <a href="https://www.flaticon.com/free-icons/exercise" title="exercise icons">Exercise icons created by mangsaabguru - Flaticon</a> */}
        <img src='/images/exercise.png' alt='건강 상식' />
        <h3>
          알아두면 좋은 <br></br> 건강 상식
        </h3>
      </div>
    </div>
  );
};

export default HealthNews;
