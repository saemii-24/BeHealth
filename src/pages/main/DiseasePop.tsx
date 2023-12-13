import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaVirus } from 'react-icons/fa6';

const DiseasePop = (props) => {
  let { closeDisease, closeHealthNews, theMonth } = props;

  //계절별 받아오기
  let [season, setSeason] = useState<string>('');

  useEffect(() => {
    if (theMonth === 2 || theMonth === 3 || theMonth === 4) {
      setSeason('봄');
    } else if (theMonth === 5 || theMonth === 6 || theMonth === 7) {
      setSeason('여름');
    } else if (theMonth === 8 || theMonth === 9 || theMonth === 10) {
      setSeason('가을');
    } else if (theMonth === 11 || theMonth === 0 || theMonth === 1) {
      setSeason('겨울');
    }
  }, [theMonth]);

  return (
    <div className='disease-pop'>
      <div
        className='icon'
        onClick={() => {
          closeDisease();
          closeHealthNews();
        }}>
        <IoIosArrowBack className='fontawesome' />
      </div>

      <div className='spread'>
        <div className='spread-title'>
          <div className='icon'>
            <FaVirus className='fontawesome' />
          </div>
          <h3>{season}철 유행 주의 질병</h3>
        </div>

        <div className='spread-content'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className='vaccination'>
        <div className='vaccination-title'>
          <div className='icon'>
            <FaVirus className='fontawesome' />
          </div>
          <h3>유행 주의 질병 예방법</h3>
        </div>

        <div className='vaccination-content'></div>
      </div>
    </div>
  );
};

export default DiseasePop;
