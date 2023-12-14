import React, { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaVirus } from 'react-icons/fa6';

import spring from './spring.ts';
import summer from './summer.ts';
import autumn from './autumn.ts';
import winter from './winter.ts';
import { SeasonType } from './spring.ts';

const DiseasePop = (props) => {
  let { closeDisease, closeHealthNews, theMonth } = props;

  //계절별 받아오기
  let [season, setSeason] = useState<string>('');
  let [seasonData, setSeasonData] = useState<SeasonType[]>(spring);
  console.log(seasonData);

  useEffect(() => {
    if (theMonth === 2 || theMonth === 3 || theMonth === 4) {
      setSeason('봄');
      setSeasonData(spring);
    } else if (theMonth === 5 || theMonth === 6 || theMonth === 7) {
      setSeason('여름');
      setSeasonData(summer);
    } else if (theMonth === 8 || theMonth === 9 || theMonth === 10) {
      setSeason('가을');
      setSeasonData(autumn);
    } else if (theMonth === 11 || theMonth === 0 || theMonth === 1) {
      setSeason('겨울');
      setSeasonData(winter);
    }
  }, [theMonth]);

  return (
    <div className='disease-pop'>
      <div
        className='icon close'
        onClick={() => {
          closeDisease();
          closeHealthNews();
        }}>
        <IoIosArrowBack className='fontawesome' />
      </div>

      <div className='spread'>
        <div className='title'>
          <div className='icon'>
            <FaVirus className='fontawesome' />
          </div>
          <h3>{season}철 유행 주의 질병</h3>
        </div>

        <div className='spread--content'>
          {seasonData[0].spread.map((v, i) => {
            return (
              <div key={i}>
                <h3>{v.name}</h3>

                <h4>증상</h4>
                <p>{v.symptom}</p>

                <h4>감염 경로</h4>
                <p>{v.route}</p>

                <h4>예방법</h4>
                {v.precaution.map((v, i) => {
                  return <p key={i}>- {v}</p>;
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className='vaccination'>
        <div className='title'>
          <div className='icon'>
            <FaVirus className='fontawesome' />
          </div>
          <h3>{season}철 질병 예방법</h3>
        </div>

        {seasonData[0].preventive.map((v, i) => {
          return (
            <div className='vaccination--content'>
              <p key={i}>{v}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiseasePop;
