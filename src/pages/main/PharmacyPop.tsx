import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import cn from 'classnames';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import institution from '../../data/institution';
import Loading from '../../component/Loading';
import { MainPopupContext } from '../../context/MainPopupContext';

const PharmacyPop = (props) => {
  let { setPharmacyPop } = props;
  const { mainPopup, setMainPopup } = useContext(MainPopupContext);

  //행정구역 선택
  let [selectIdx, setSelectIdx] = useState<number>(0);
  const handleValue = (e) => {
    setSelectIdx(e.target.value);
  };

  //시군구 선택
  let [selectCity, setSelectCity] = useState<string>('');
  const handleSelectCity = (e) => {
    setSelectCity(e.target.value);
  };

  //약국 정보 불러오기
  const apiKey = process.env.REACT_APP_APIKEY_DATA;
  let [callPharmacy, setCallPharmacy] = useState<object[]>([]);
  let [loading, setLoading] = useState<boolean>(true);
  let [nothing, setNothing] = useState<boolean>(true);
  let [totalCount, setTotalCount] = useState<number>(0);

  let [indexNo, setIndexNo] = useState<number>(0); //버튼 렌더링에 사용될 num
  let [pageNo, setPageNo] = useState<number>(1); //api call에 사용될 page number

  const fetchData = async () => {
    setLoading(true);
    try {
      if (selectCity) {
        const URL = `https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyListInfoInqire?serviceKey=${apiKey}&Q0=${institution[selectIdx].city}&Q1=${selectCity}&pageNo=${pageNo}&numOfRows=50`;
        const response: any = await axios.get(URL);
        const searchItem = response.data.response.body.items.item;
        setTotalCount(response.data.response.body.totalCount);
        setCallPharmacy(searchItem);

        let originArr: any = [];
        if (searchItem.length) {
          if (Array.isArray(searchItem)) {
            for (let i = 0; i < searchItem.length; i += 10) {
              originArr.push(searchItem.slice(i, i + 10));
            }
          }
        }

        if (!searchItem) {
          setNothing(true);
          setTotalCount(0);
        } else {
          setNothing(false);
          if (originArr.length === 0) {
            setNothing(true);
            setCallPharmacy(originArr);
          } else {
            setCallPharmacy(originArr);
          }
          setLoading(false);
        }
      } else {
        setNothing(true);
      }
    } catch (err) {
      setNothing(true);
      setCallPharmacy([]);
      console.log(err);
    }
  };

  useEffect(() => {
    setSelectCity('');
  }, [selectIdx]);

  useEffect(() => {
    setPageNo(1);
    fetchData();
  }, [selectCity]);

  return (
    <div className='pharmacy-pop'>
      <IoClose
        onClick={() => {
          if (mainPopup) {
            setPharmacyPop(false);
            setMainPopup!(false);
          }
        }}
        className='xmark'
      />

      <div className='option-box'>
        <select
          name='pharmacy_select'
          id='pharmacy_select'
          onChange={(e) => {
            setIndexNo(0);
            setPageNo(1);
            handleValue(e);
          }}>
          {institution.map((v, i) => {
            return (
              <option key={i} value={v.id}>
                {v.city}
              </option>
            );
          })}
        </select>
        <select
          name='pharmacy_select_city'
          id='pharmacy_select_city'
          onChange={(e) => {
            setIndexNo(0);
            setPageNo(1);
            handleSelectCity(e);
          }}
          value={selectCity}>
          {institution[selectIdx].district.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </div>

      <div className='pharmacy-info-wrap'>
        {nothing ? (
          <div className='search__null'>검색결과가 없습니다.</div>
        ) : (
          <>
            {loading ? (
              <div className='search--load'>
                <Loading />
              </div>
            ) : (
              (callPharmacy[indexNo] as object[]).map((v: any, i: number) => {
                return (
                  <div className='pharmacy-info' key={i}>
                    <h5>{v.dutyName}</h5>
                    <p>{v.dutyAddr}</p>
                  </div>
                );
              })
            )}
          </>
        )}
      </div>

      <div className='button-box'>
        <button
          className='prev button'
          disabled={pageNo === 1}
          onClick={async () => {
            setIndexNo(4);
            setPageNo(--pageNo);
            await fetchData();
          }}>
          <IoIosArrowBack className='arrow' />
        </button>
        {new Array(5).fill(0).map((_, index) => {
          return (
            <input
              key={index}
              className={cn('pagination', { active: indexNo === index })}
              type='button'
              value={(pageNo - 1) * 5 + index + 1}
              onClick={(e) => {
                setIndexNo(index);
              }}
              disabled={callPharmacy.length < index + 1 || selectCity === ''}
            />
          );
        })}
        <button
          className='next button'
          disabled={pageNo === Math.ceil(totalCount / 50) || callPharmacy.length < 5}
          onClick={async () => {
            setIndexNo(0);
            setPageNo(++pageNo);
            await fetchData();
          }}>
          <IoIosArrowForward className='arrow' />
        </button>
      </div>
    </div>
  );
};

export default PharmacyPop;
