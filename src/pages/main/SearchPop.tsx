import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import convert from 'xml-js';
// import dotenv from "dotenv";
// require("dotenv").config();

import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const SearchPop = (props) => {
  let { institution, selected, setSearchPop } = props;

  // console.log(process.env.REACT_APP_APIKEY_NR);

  //팝업 옵션 값 받아오기
  let [value, setValue] = useState('');
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
  let [selectName, setSelectName] = useState('');
  let [selectAdd, setSelectAdd] = useState('');

  const fetchData = async () => {
    try {
      const apiKey = process.env.REACT_APP_APIKEY_DATA;
      const response = await axios.get(
        `/openapi/service/rest/HmcSearchService/getHmcList?serviceKey=${apiKey}&numOfRows=10&pageNo=${chNum}&locAddr=${selectCity} ${value}&hmcNm=%EC%83%88%ED%95%98%EB%8A%98&siDoCd=11&siGunGuCd=590&locAddr=300&hmcRdatCd=0&hchType=0&type=json`,
      );
      const searchItem = response.data.response.body.items.item;
      setCallHospital(searchItem);
      setTotalCount(response.data.response.body.totalCount);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
    // try {
    //   // const apiKey = process.env.REACT_APP_APIKEY_NR;
    //   const URL = `https://apis.data.go.kr/openapi/service/rest/HmcSearchService/getHchkTypesHmcList?serviceKey=Pnz3JkMQMszFg9JlQpehLxMHCNMfZwA12Bpdtwz0lqimEj7RHM%2F6yJ%2Fl6SobwjmWEjsX6vnI00x1p34xQPenfg%3D%3D&numOfRows=10&pageNo=${chNum}&locAddr=${selectCity} ${value}`;
    //   const response = await axios.get(URL);
    //   const searchItem = response.data.response.body.items.item;
    //   setCallHospital(searchItem);
    //   setTotalCount(response.data.response.body.totalCount);
    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    fetchData();
  }, [chNum]);

  useEffect(() => {
    setSelectCity(institution[selected].city);
    fetchData();
  }, [value]);

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
        {callHospital.map((v: any, i) => {
          return (
            <div
              className='hospital'
              key={i}
              onClick={() => {
                setSelectAdd(v.locAddr);
                setSelectName(v.hmcNm);
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
        })}
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
