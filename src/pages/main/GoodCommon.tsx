import React from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import healthCommon from './healthCommon';

const GoodCommon = (props) => {
  let { setClickBottom, idxBottom } = props;

  console.log(healthCommon);
  function lineChange(content) {
    let propContent = content.split('\n');
    let contentMap = propContent.map((v, i) => {
      return <p key={i}>{v}</p>;
    });
    return <div>{contentMap}</div>;
  }

  return (
    <div
      className='good-common'
      style={{ backgroundImage: `URL(${healthCommon[0].common[idxBottom].img})` }}>
      <IoClose
        onClick={() => {
          setClickBottom(false);
        }}
        className='xmark'
      />

      <div className='pop-title'>
        <h5>{healthCommon[0].common[idxBottom].content}</h5>
        <h2>{healthCommon[0].common[idxBottom].title}</h2>
      </div>

      <h4>{healthCommon[0].commonPop[idxBottom].explain}</h4>

      <div className='pop-content'>
        {healthCommon[0].commonPop[idxBottom].info.map((v, i) => {
          return (
            <div key={i} className='pop-txt'>
              <h5>{v.name}</h5>
              {lineChange(v.content)}
              {v.content2 ? lineChange(v.content2) : null}
              {v.content3 ? lineChange(v.content3) : null}
            </div>
          );
        })}

        <Link to={healthCommon[0].commonPop[idxBottom].source}>
          출처 보기<sub>( 이 사이트는 상업적 목적으로 제작된 콘텐츠가 아닙니다. )</sub>
        </Link>
      </div>
    </div>
  );
};

export default GoodCommon;
