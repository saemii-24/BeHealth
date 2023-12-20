import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { FaVirus } from 'react-icons/fa6';

import { SeasonContext, SeasonDataContext } from '../../context/SeasonContext.tsx';

const DiseasePop = (props) => {
  let { closeDisease, closeHealthNews } = props;

  let { seasonData } = useContext(SeasonDataContext);
  let { season } = useContext(SeasonContext);

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
          {seasonData![0].spread.map((v, i) => {
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
    </div>
  );
};

export default DiseasePop;
