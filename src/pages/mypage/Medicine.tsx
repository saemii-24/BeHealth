import React, { useState } from 'react';
import axios from 'axios';
import { IoSearch, IoClose } from 'react-icons/io5';
import Loading from '../../component/Loading';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import { FiPlus } from 'react-icons/fi';
import cn from 'classnames';
import { app, db } from '../../firebase/firebaseApp';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.tsx';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MyStatusContext } from '../../context/MyStatusContext.tsx';

const Medicine = () => {
  let context = useContext(AuthContext);
  const { data } = useContext(MyStatusContext);

  //input으로 searchItem 받아오기
  const [name, setName] = useState<string>(''); //약 명칭
  const [medicine, setMedicine] = useState<string>(''); //input창
  const [sideEffect, setSideEffect] = useState<string>(''); //부작용
  const [caution, setCaution] = useState<string>(''); //주의사항
  const [searchNow, setSearchNow] = useState<boolean>(false); // 찾은 값이 있는가?
  const [popup, setPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  // const [star, setStar] = useState<boolean>(false);
  const [nothing, setNothing] = useState<boolean>(true);

  //input 받아오기
  const onChange = (e) => {
    const value = e.target.value;
    setMedicine(value);
  };

  //data 불러오기
  const fetchData = async () => {
    setLoading(true);
    setSearchNow(false);
    try {
      const apiKey = process.env.REACT_APP_APIKEY_DATA;
      const URL = `/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList?serviceKey=${apiKey}&pageNo=1&numOfRows=1&itemName=${medicine}&type=json`;
      const response = await axios.get(URL);
      const searchItem = response.data.body.items[0];
      setSideEffect(searchItem.seQesitm);
      setCaution(searchItem.intrcQesitm);
      setName(searchItem.itemName);
      setSearchNow(true);
      setLoading(false);
      setNothing(false);
    } catch (err) {
      console.log(err);
      setSearchNow(false);
      setNothing(true);
    }
  };

  //만약 laoding이 true이면 그 이하 내용이 보여지지 않는다.

  const user = getAuth(app).currentUser?.uid;

  return (
    <div className='medicine__box'>
      {context.user ? (
        <div className='medicine'>
          <h1 className='medicine__title'>의약품 주의사항 알아보기</h1>
          <h5 className='medicine__summary'>
            <span className='medicine__summary__user-name'>
              {data!.name ? data!.name : '사용자'}님!{' '}
            </span>
            현재 의약품 복용중이시라면, 의약품의 주의사항과 부작용을 꼭 확인하세요.
          </h5>
          <div className='medicine__caution'>
            <h4 className='medicine__caution--title'>약 이름으로 검색하기</h4>
            <div
              className='medicine__caution--more'
              onClick={() => {
                setPopup(true);
                setSideEffect('');
                setCaution('');
                setName('');
                setNothing(true);
              }}>
              <AiOutlineFileSearch className='medicine__caution__search' />
            </div>
          </div>
        </div>
      ) : (
        <div className='medicine'>
          <h1 className='medicine__title'>현재 약을 복용중이신가요?</h1>
          <h5 className='medicine__summary'>
            로그인 하고 현재 복용중인 의약품을 검색하고, 주의사항과 부작용에 대해
            알아보세요.
          </h5>
          <div className='medicine__caution'>
            <GiMedicines />
          </div>
        </div>
      )}
      <div className={cn('medicine__popup', { active: popup })}>
        <div
          className='medicine__popup__close'
          onClick={() => {
            setPopup(false);
            setLoading(false);
            setNothing(false);
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

        {(searchNow && sideEffect) || (searchNow && caution) ? (
          <div className='search__result'>
            <div className='search__result--box'>
              <div className='search__result__small-box search__result__small-box--star'>
                <h3>약 명칭</h3>
                <div>{name}</div>
              </div>
              {sideEffect && (
                <div className='search__result__small-box'>
                  <h3>부작용</h3>
                  <div>{sideEffect}</div>
                </div>
              )}
              {caution && (
                <div className='search__result__small-box'>
                  <h3>주의사항</h3>
                  <div>{caution}</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {nothing ? (
              <div className='search__null'>검색결과가 없습니다.</div>
            ) : (
              <div className='search--laod'>
                <Loading />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Medicine;
