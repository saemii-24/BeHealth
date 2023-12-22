import React from 'react';
import { IoClose } from 'react-icons/io5';

const KnowledgePop = (props) => {
  let { seasonData, setClick, idx } = props;

  function lineChange(content) {
    let propContent = content.split('\n');
    let contentMap = propContent.map((v, i) => {
      return <p key={i}>{v}</p>;
    });
    return <div>{contentMap}</div>;
  }

  return (
    <div
      className='knowledge-pop'
      style={{ backgroundImage: `URL(${seasonData[0].common[idx].img})` }}>
      <IoClose
        onClick={() => {
          setClick(false);
        }}
        className='xmark'
      />

      <div className='pop-title'>
        <h5>{seasonData[0].common[idx].content}</h5>
        <h2>{seasonData[0].common[idx].title}</h2>
      </div>

      <h4>{seasonData[0].commonPop[idx].explain}</h4>

      <div className='pop-content'>
        {seasonData[0].commonPop[idx].info.map((v, i) => {
          return (
            <div key={i} className='pop-txt'>
              <h5>{v.name}</h5>
              {lineChange(v.content)}
              {v.content2 ? lineChange(v.content2) : null}
              {v.content3 ? lineChange(v.content3) : null}
            </div>
          );
        })}

        <a href={seasonData[0].commonPop[idx].source}>
          출처 보기 <sub>( 이 사이트는 상업적 목적으로 제작된 콘텐츠가 아닙니다. )</sub>
        </a>
      </div>
    </div>
  );
};

export default KnowledgePop;
