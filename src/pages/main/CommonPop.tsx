import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const CommonPop = (props) => {
  let { closeCommon, closeHealthNews } = props;

  return (
    <div className='common-pop'>
      <div
        className='icon'
        onClick={() => {
          closeCommon();
          closeHealthNews();
        }}>
        <IoIosArrowBack className='fontawesome' />
      </div>
    </div>
  );
};

export default CommonPop;
