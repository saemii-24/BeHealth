import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../component/Loading';

import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { HospitalNameContext } from '../../context/HospitalNameContext';
import { HospitalAddContext } from '../../context/HospitalAddContext';

const SearchPop = (props) => {
  let { institution, selected, searchPop, setSearchPop, setAdd } = props;

  //팝업 옵션 값 받아오기
  let [value, setValue] = useState<string | null>('');
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  let [cidoCode, setCidoCode] = useState<number | null>(null); //시도 코드

  //api
  let [callHospital, setCallHospital] = useState<object[]>([]);
  let [selectCity, setSelectCity] = useState<string>('');
  let [loading, setLoading] = useState<boolean>(true); //로딩
  let [nothing, setNothing] = useState<boolean>(true); //정보가 있는가?
  // let [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  const apiKey = process.env.REACT_APP_APIKEY_DATA;
  const fetchData = async () => {
    setLoading(true);

    try {
      // const apiKey = process.env.REACT_APP_APIKEY_NR;
      const URL = ``;
      const response = await axios.get(URL);
      const searchItem = response.data.response.body.items.item;

      console.log(searchItem);

      if (!searchItem) {
        setNothing(true);
        setTotalCount(0);
        setLoading(false);
      } else {
        setNothing(false);
        if (!Array.isArray(searchItem)) {
          setCallHospital([searchItem]);
          setTotalCount(response.data.response.body.totalCount);
          setLoading(false);
        } else {
          setCallHospital(searchItem);
          setTotalCount(response.data.response.body.totalCount);
          setLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  //이전, 다음 버튼
  let [chNum, setChNum] = useState<number>(1);
  let [totalCount, setTotalCount] = useState(0);
  //마지막에서 안넘어가게 하기
  useEffect(() => {
    if (chNum === 0) {
      setChNum(1);
    }
    if (chNum === Math.ceil(totalCount / 10)) {
      setChNum(Math.ceil(totalCount / 10) - 1);
    }
  }, [chNum]);

  useEffect(() => {
    fetchData();
  }, [chNum]);

  useEffect(() => {
    setSelectCity(institution[selected].city);
    setCidoCode(institution[selected].code);
    fetchData();
    setTotalCount(0);
    setChNum(1);
  }, [value]);

  //정보 클릭하면 저장해서 목록에 보여줌
  let { setSelectName } = useContext(HospitalNameContext);
  let { setSelectAdd } = useContext(HospitalAddContext);

  //페이지네이션을 설정하면 그에 맞는 페이지를 보여준다
  // const handleBtn = (e) => {
  //   const thisNum = e.target.value;
  //   setChNum(Number(thisNum));
  // };

  return (
    <div className='search-pop'>
      <IoClose
        onClick={() => {
          setSearchPop(false);
        }}
        className='xmark'
      />

      <select
        name='popup-select'
        id='popup_select'
        onChange={(e) => {
          handleValue(e);
        }}>
        {institution[selected].district.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>

      <h4>병원 선택</h4>

      <div className='hospital-wrap'>
        {nothing ? (
          <div className='search__null'>검색결과가 없습니다.</div>
        ) : (
          <>
            {loading ? (
              <div className='search--load'>
                <Loading />
              </div>
            ) : (
              callHospital.map((v: any, i: number) => {
                return (
                  <div
                    className='hospital'
                    key={i}
                    onClick={() => {
                      setSelectAdd!(v.locAddr);
                      setSelectName!(v.hmcNm);
                      setAdd(true);
                    }}>
                    <div className='icon'>
                      <FaPlus className='fontawesome' />
                    </div>

                    <div className='hospital-info'>
                      <h4>{v.hmcNm}</h4>
                      <p>{v.locAddr}</p>
                    </div>
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
          disabled={chNum === 1}
          onClick={() => {
            setChNum(--chNum);
          }}>
          <IoIosArrowBack className='arrow' />
        </button>
        <input type='button' value={0 + chNum} />
        <input type='button' value={1 + chNum} />
        <input type='button' value={2 + chNum} />
        <input type='button' value={3 + chNum} />
        <input type='button' value={4 + chNum} />
        <button
          className='next button'
          disabled={
            chNum === Math.ceil(totalCount / 10) - 1 ||
            totalCount < 6 ||
            callHospital.length < 10
          }
          onClick={() => {
            setChNum(++chNum);
          }}>
          <IoIosArrowForward className='arrow' />
        </button>
      </div>
    </div>
  );
};

export default SearchPop;
