import React, { useContext, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { RiMentalHealthLine } from 'react-icons/ri';
import { SeasonContext, SeasonDataContext } from '../../context/SeasonContext';

import healthCommon from '../../data/healthCommon.ts';
import KnowledgePop from './KnowledgePop.tsx';
import GoodCommon from './GoodCommon.tsx';

const CommonPop = (props) => {
  let { closeCommon, closeHealthNews } = props;

  let { season } = useContext(SeasonContext);
  let { seasonData } = useContext(SeasonDataContext);

  let [click, setClick] = useState<boolean>(false);
  let [idx, setIdx] = useState<number>(0);

  let [clickBottom, setClickBottom] = useState<boolean>(false);
  let [idxBottom, setIdxBottom] = useState<number>(0);

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
              <div
                style={{ backgroundImage: `url(${v.img})` }}
                key={i}
                onClick={() => {
                  setClick(true);
                  setIdx(i);
                }}>
                <p>
                  {v.content}
                </p>
                <h4>
                  {v.title}
                </h4>
              </div>
            );
          })}
        </div>
        {click ? (
          <KnowledgePop seasonData={seasonData} setClick={setClick} idx={idx} />
        ) : null}
      </div>

      <div className='basic-common'>
        <div className='title'>
          <div className='icon'>
            <RiMentalHealthLine className='fontawesome' />
          </div>
          <h3>알아두면 좋은 건강 상식</h3>
        </div>

        <div className='basic-txt'>
          {healthCommon[0].common.map((v, i) => {
            return (
              <div
                style={{ backgroundImage: `url(${v.img})` }}
                key={i}
                onClick={() => {
                  setClickBottom(true);
                  setIdxBottom(i);
                }}>
                <p>{v.content}</p>
                <h4>{v.title}</h4>
              </div>
            );
          })}
        </div>
        {clickBottom ? (
          <GoodCommon setClickBottom={setClickBottom} idxBottom={idxBottom} />
        ) : null}
      </div>
    </div>
  );
};

export default CommonPop;
