import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiMentalHealthLine } from 'react-icons/ri';
import { SeasonContext, SeasonDataContext } from '../../context/SeasonContext';

import healthCommon from './healthCommon.ts';

const CommonPop = (props) => {
  let { closeCommon, closeHealthNews } = props;

  let { season } = useContext(SeasonContext);
  let { seasonData } = useContext(SeasonDataContext);

  return (
    <div className='common-pop'>
      <div
        className='icon close'
        onClick={() => {
          closeCommon();
          closeHealthNews();
        }}>
        <IoIosArrowBack className='fontawesome' />
      </div>

      <div className='season-common'>
        <div className='title'>
          <div className='icon'>
            <RiMentalHealthLine className='fontawesome' />
          </div>
          <h3>{season}철 건강 상식</h3>
        </div>

        <div className='season-txt'>
          {seasonData![0].common.map((v, i) => {
            return (
              <div style={{ backgroundImage: `url(${v.img})` }} key={i}>
                <p style={{ color: `${v.imgColor === 'dark' ? '#fff' : '#306de5'}` }}>
                  {v.content}
                </p>
                <h4 style={{ color: `${v.imgColor === 'dark' ? '#fff' : '#306de5'}` }}>
                  {v.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>

      <div className='basic-common'>
        <div className='title'>
          <div className='icon'>
            <RiMentalHealthLine className='fontawesome' />
          </div>
          <h3>알아두면 좋은 건강 상식</h3>
        </div>

        <div className='basic-txt'>
          {healthCommon.map((v, i) => {
            return (
              <div style={{ backgroundImage: `url(${v.img})` }} key={i}>
                <p>{v.content}</p>
                <h4>{v.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommonPop;
