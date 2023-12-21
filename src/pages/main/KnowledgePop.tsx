import React, { useState } from 'react';

import { IoClose } from 'react-icons/io5';

const KnowledgePop = (props) => {
  let { seasonData, setClick, idx } = props;
  console.log(seasonData);

  let [explain, setExplain] = useState<string>(seasonData[0].commonPop[idx].explain);
  let newStr = explain.split('\n');
  //   console.log(newStr);

  let [content, setContent] = useState<string[]>([]);
  for (let i in seasonData[0].commonPop[idx].info) {
    content.push(seasonData[0].commonPop[idx].info[i]);
    // let string = content[i].split('\n');
    console.log(content[i]);
  }

  return (
    <div className='knowledge-pop'>
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

      {/* {newStr.map((v, i) => {
        return <h4 key={i}>{v}</h4>;
      })} */}
      <h4>{seasonData[0].commonPop[idx].explain}</h4>

      <div className='pop-content'>
        {seasonData[0].commonPop[idx].info.map((v, i) => {
          return (
            <div key={i}>
              <h5>{v.name}</h5>
              <p>{v.content}</p>
              <p>{v.content2 ? v.content2 : null}</p>
              <p>{v.content3 ? v.content3 : null}</p>
            </div>
          );
        })}

        <a href={seasonData[0].commonPop[idx].source}>출처</a>
      </div>
    </div>
  );
};

export default KnowledgePop;
