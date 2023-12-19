import React from 'react';
import { IoClose } from 'react-icons/io5';

const PharmacyPop = (props) => {
  let { setPharmacyPop } = props;

  return (
    <div className='pharmacy-pop'>
      <IoClose
        onClick={() => {
          setPharmacyPop(false);
        }}
        className='xmark'
      />
    </div>
  );
};

export default PharmacyPop;
