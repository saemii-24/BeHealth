import React from 'react';

const Medicine = () => {
  return (
    <div className='medicine'>
      <h1 className='medicine__title'>현재 약 복용 기간입니다.</h1>
      <h5 className='medicine__summary'>
        <span className='medicine__summary__user-name'>{'김철수'}님! </span>
        현재 복용하시는 약의 경우 다음과 같은 의약품에 주의가 필요합니다.
      </h5>
      <div className='medicine__box'>
        <h4 className='medicine__box--recommend'>함께 먹으면 좋은 음식</h4>
      </div>
      <div className='medicine__box'>
        <h4 className='medicine__box--avoid'>함께 먹으면 좋지 않은 음식</h4>
      </div>
    </div>
  );
};

export default Medicine;
