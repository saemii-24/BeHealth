import React, { useState } from 'react';
import axios from 'axios';
import { IoSearch, IoClose } from 'react-icons/io5';
import Loading from '../../component/Loading';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import cn from 'classnames';

const Medicine = () => {
  //input으로 searchItem 받아오기
  const [name, setName] = useState<string>(''); //약 명칭
  const [medicine, setMedicine] = useState<string>(''); //input창
  const [sideEffect, setSideEffect] = useState<string>(''); //부작용
  const [caution, setCaution] = useState<string>(''); //주의사항
  const [searchNow, setSearchNow] = useState<boolean>(false); // 찾은 값이 있는가?
  const [popup, setPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [star, setStar] = useState<boolean>(false);

  //input 받아오기
  const onChange = (e) => {
    const value = e.target.value;
    setMedicine(value);
  };

  //data 불러오기
  const fetchData = async () => {
    setLoading(true);
    try {
      const URL = '/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList';
      const response = await axios.get(URL, {
        params: {
          serviceKey: process.env.REACT_APP_API_KEY,
          numOfRows: 1,
          pageNo: 10,
          type: 'json',
          itemName: medicine,
        },
      });
      const searchItem = response.data.body.items[0];
      setSideEffect(searchItem.seQesitm);
      setCaution(searchItem.intrcQesitm);
      setName(searchItem.itemName);
      setSearchNow(true);
      setLoading(false);
      console.log(searchItem);
    } catch (err) {
      console.log(err);
      setSearchNow(false);
    }
  };

  //만약 laoding이 true이면 그 이하 내용이 보여지지 않는다.

  return (
    <div className='medicine__box'>
      <div className='medicine'>
        <h1 className='medicine__title'>현재 약 복용 기간입니다.</h1>
        <h5 className='medicine__summary'>
          <span className='medicine__summary__user-name'>{'김철수'}님! </span>
          현재 복용하시는 약의 경우 다음과 같은 의약품에 주의가 필요합니다.
        </h5>
        <div className='medicine__caution'>
          <h4 className='medicine__caution--title'>복용시 주의할 점</h4>
          <div
            className='medicine__caution--more'
            onClick={() => {
              setPopup(true);
            }}>
            <FiPlus />
          </div>
        </div>
      </div>
      <div className={cn('medicine__popup', { active: popup })}>
        <div
          className='medicine__popup__close'
          onClick={() => {
            setPopup(false);
          }}>
          <IoClose />
        </div>
        <form>
          <label htmlFor='medicine'>약 검색</label>
          <div>
            <input type='text' id='medicine' name='medicine' onChange={onChange} />
            <button
              className='submit'
              type='submit'
              onClick={(e) => {
                e.preventDefault();
                fetchData();
              }}>
              <IoSearch />
            </button>
          </div>
        </form>
        {loading && <Loading />}
        {sideEffect && caution && searchNow ? (
          <div className='search__result'>
            <div className='search__result--box'>
              <div className='search__result__small-box search__result__small-box--star'>
                <div className='search__star' onClick={() => setStar(!star)}>
                  {star ? <FaStar /> : <FaRegStar />}
                </div>
                <h3>약 명칭</h3>
                <div>{name}</div>
              </div>
              <div className='search__result__small-box'>
                <h3>부작용</h3>
                <div>{sideEffect}</div>
              </div>
              <div className='search__result__small-box'>
                <h3>주의사항</h3>
                <div>{caution}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className='search__null'>검색결과가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default Medicine;
