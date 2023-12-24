import React, { useState } from 'react';
import './About.scss';
import cn from 'classnames';
import { MdMemory } from 'react-icons/md';
import { FaRegCircleCheck } from 'react-icons/fa6';
import source from '../../data/source';
import { Link } from 'react-router-dom';

const About = () => {
  const [dataIndex, setDataIndex] = useState<number>(0);

  return (
    <div className='about'>
      <div className='about__right'>
        <div className='about__title'>
          <div className='about__icon'>
            <MdMemory />
          </div>
          <h3>제작 팀원</h3>
        </div>
        <div className='profile-box'>
          <div className='profile'>
            <h4>프론트엔드</h4>
            <img
              src={process.env.PUBLIC_URL + '/images/tiger.jpg'}
              alt='@saemii-24 profile img'
            />
            <p>@saemii-24</p>
          </div>
          <div className='profile'>
            <h4>프론트엔드</h4>
            <img src={process.env.PUBLIC_URL + '/images/bear.jpg'} alt='@ profile img' />
            <p>@nuunnunn</p>
          </div>
        </div>
      </div>
      <div className='about__left'>
        <div className='about__title'>
          <div className='about__icon'>
            <FaRegCircleCheck />
          </div>
          <h3>자료 출처</h3>
        </div>
        <h4>사용된 카테고리</h4>
        <div className='button-box'>
          {['그래픽', '외부 API', '건강뉴스', '건강상식'].map((item, index) => {
            return (
              <button
                className={cn('btn', { active: dataIndex === index })}
                onClick={() => {
                  setDataIndex(index);
                }}
                key={index}>
                {item}
              </button>
            );
          })}
        </div>
        <div className='source-box'>
          <ul>
            {Object.values(source[0])[dataIndex].map((item, index) => {
              if (item.address) {
                return (
                  <li>
                    <Link
                      key={'link' + dataIndex + index}
                      to={item.address}
                      target='_blank'>
                      {item.name}
                    </Link>
                  </li>
                );
              } else {
                return <li key={dataIndex + ' ' + index}>{item.name}</li>;
              }
            })}
          </ul>
          <p>클릭하시면 해당 출처의 사이트로 이동합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
