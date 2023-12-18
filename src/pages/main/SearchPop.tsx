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
  let { institution, selected, setSearchPop, setAdd } = props;

  // console.log(process.env.REACT_APP_APIKEY_NR);

  //팝업 옵션 값 받아오기
  let [value, setValue] = useState<string | null>('');
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  //이전, 다음 버튼
  let [chNum, setChNum] = useState<number>(1);
  let [totalCount, setTotalCount] = useState(0);
  //마지막에서 안넘어가게 하기
  if (chNum === 0) {
    setChNum(1);
  }
  if (chNum === Math.ceil(totalCount / 10)) {
    setChNum(Math.ceil(totalCount / 10) - 1);
  }

  //api
  let [callHospital, setCallHospital] = useState([]);
  let [selectCity, setSelectCity] = useState<string>('');
  let [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      // const apiKey = process.env.REACT_APP_APIKEY_NR;
      const URL = ``;
      const response = await axios.get(URL);
      const searchItem = response.data.response.body.items.item;
      setCallHospital(searchItem);
      setTotalCount(response.data.response.body.totalCount);
      console.log(response);
      // console.log(callHospital);

      //검색 결과가 없을때 시의 결과만 보여줌
      if (!searchItem) {
        setLoading(true);
        const URL = ``;
        const response = await axios.get(URL);
        const searchItem = response.data.response.body.items.item;
        setCallHospital(searchItem);
        setTotalCount(response.data.response.body.totalCount);
        console.log(response);
      }

      // if (Object.keys(searchItem).length === 1) {
      //   setCallHospital([searchItem]);
      // }

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [chNum]);

  useEffect(() => {
    setSelectCity(institution[selected].city);
    fetchData();
  }, [value]);

  // useEffect(() => {
  //   fetchData();
  // }, [callHospital]);

  //정보 클릭하면 저장해서 목록에 보여줌
  let { setSelectName } = useContext(HospitalNameContext);
  let { setSelectAdd } = useContext(HospitalAddContext);

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
        {loading ? (
          <Loading />
        ) : (
          callHospital.map((v: any, i) => {
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
      </div>

      <div className='button-box'>
        <button
          className='prev button'
          onClick={() => {
            setChNum(--chNum);
          }}
          style={{ background: `${chNum === 1 ? '#cfd9eb' : '#fff'}` }}>
          <IoIosArrowBack className='arrow' />
        </button>
        <input type='button' value={0 + chNum} />
        <input type='button' value={1 + chNum} />
        <input type='button' value={2 + chNum} />
        <input type='button' value={3 + chNum} />
        <button
          className='next button'
          style={{
            background: `${
              chNum === Math.ceil(totalCount / 10) - 1 ? '#cfd9eb' : '#fff'
            }`,
          }}>
          <IoIosArrowForward
            className='arrow'
            onClick={() => {
              setChNum(++chNum);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default SearchPop;
