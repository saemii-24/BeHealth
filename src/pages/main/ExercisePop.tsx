import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FaChildren } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaHouse } from 'react-icons/fa6';
import { MdElderly } from 'react-icons/md';

import recommendExercise from './recommendExercise';
import exerciseCategory from './exerciseCategory';

const ExercisePop = (props) => {
  let { closeExercise, closeHealthNews } = props;

  //나이별 버튼 클릭 css
  let ageList = useRef<any[]>([]); //배열로 ref 담기
  let [clickAge, setClickAge] = useState(false); //useEffect 위한 변수
  const handleSelect = (e) => {
    setClickAge(e.target);
    //전체 스타일 기본으로 적용
    for (let i = 0; i < ageList.current.length; i++) {
      ageList.current[i].style.background = 'transparent';
      ageList.current[i].style.color = '#abdb98';
      ageList.current[i].style.border = '1px solid #abdb98';
    }

    //클릭한 버튼만 적용
    e.target.style.background = '#abdb98';
    e.target.style.color = '#fff';
  };
  useEffect(() => {
    console.log(clickAge);
  }, [clickAge]);

  //카테고리별 버튼 클릭 css
  let categoryList = useRef<any[]>([]); //배열로 ref 담기
  let [clickCategory, setClickCategory] = useState(false); //useEffect 위한 변수
  const handleCategory = (e) => {
    setClickCategory(e.target);

    for (let i = 0; i < categoryList.current.length; i++) {
      categoryList.current[i].style.background = 'transparent';
      categoryList.current[i].style.color = '#abdb98';
      categoryList.current[i].style.border = '1px solid #abdb98';
    }

    e.target.style.background = '#abdb98';
    e.target.style.color = '#fff';
  };
  useEffect(() => {
    console.log(clickCategory);
  }, [clickCategory]);

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

        <div className='classify'>
          {recommendExercise.map((v, i) => {
            return (
              <button
                key={i}
                ref={(el) => (ageList.current[i] = el)}
                onClick={(e) => {
                  handleSelect(e);
                }}>
                {v.age}
              </button>
            );
          })}
        </div>

        <div className='age-content'></div>
      </div>

      <div className='exercise-category'>
        <h4>카테고리별</h4>

        <div className='classify'>
          {exerciseCategory.map((v, i) => {
            return (
              <button
                key={i}
                ref={(el) => (categoryList.current[i] = el)}
                onClick={(e) => {
                  handleCategory(e);
                }}>
                {v.category}
              </button>
            );
          })}
        </div>

        <div className='category-content'></div>
      </div>
    </div>
  );
};

export default ExercisePop;
