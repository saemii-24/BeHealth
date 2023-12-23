import React from 'react';
import { IoClose } from 'react-icons/io5';
import healthCommon from '../../data/healthCommon';

const GoodCommon = (props) => {
  let { setClickBottom, idxBottom } = props;

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
      </div>
    </div>
  );
};

export default GoodCommon;
