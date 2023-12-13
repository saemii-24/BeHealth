import React, { useEffect, useState } from 'react';
import axios from 'axios';
import convert from 'xml-js';
// import dotenv from "dotenv";
// require("dotenv").config();

import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';

const SearchPop = (props) => {
  let { institution, selected, setSearchPop } = props;

  // console.log(process.env.REACT_APP_APIKEY_NR);

  let [value, setValue] = useState('');
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  let [callHospital, setCallHospital] = useState([]);
  let [selectCity, setSelectCity] = useState<string>('');

  let [chNum, setChNum] = useState<number>(1);
  let [totalCount, setTotalCount] = useState(0);

  if (chNum === 0) {
    setChNum(1);
  }
  if (chNum === Math.ceil(totalCount / 10)) {
    setChNum(Math.ceil(totalCount / 10) - 1);
  }

  useEffect(() => {
    fetchData();
  }, [chNum]);

  useEffect(() => {
    setSelectCity(institution[selected].city);
    fetchData();
  }, [value]);

  const fetchData = async () => {
    try {
      const URL =
        'http://apis.data.go.kr/openapi/service/rest/HmcSearchService/getHchkTypesHmcList';
      const response = await axios.get(URL, {
        params: {
          // serviceKey: process.env.REACT_APP_APIKEY_NR,
          numOfRows: 10,
          pageNo: chNum,
          locAddr: `${selectCity} ${value}`,
        },
      });
      // const searchItem = response.data.response.body.items.item;
      // setCallHospital(searchItem)
      // setTotalCount(response.data.response.body.totalCount)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  let [selectName, setSelectName] = useState('');
  let [selectAdd, setSelectAdd] = useState('');

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
          style={{ background: `${chNum === 1 ? '#DEE9FE' : '#fff'}` }}>
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
              chNum === Math.ceil(totalCount / 10) - 1 ? '#DEE9FE' : '#fff'
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
