import React, { useEffect, useState }  from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

//옵션 데이터
import gyeonggi from './gyeonggi'
import gangwon from './gangwon'
import chungcheongNorth from './chungcheong_north'
import chungcheongSouth from './chungcheong_south'
import jeollaNorth from './jeolla_north'
import jeollaSouth from './jeolla_south'
import gyeongsangNorth from './gyeongsang_north'
import gyeongsangSouth from './gyeongsang_south'
import seoul from './seoul'
import busan from './busan'
import daegu from './daegu'
import incheon from './incheon'
import gwangju from './gwangju'
import daejeon from './daejeon'
import ulsan from './ulsan'
import sejong from './sejong'
import institution from './institution'

const Search = () => {
  const dispatch = useDispatch();
  let thisYear = new Date().getFullYear();
  let string = '';

  if(thisYear % 2 === 0){
    string = `${thisYear}년은 짝수년도 출생자가 검진 대상자입니다.`
  }else if(thisYear % 2 === 1){
    string = `${thisYear}년은 홀수년도 출생자가 검진 대상자입니다.`
  }


  let [selected, setSelected] = useState('');
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  
  useEffect(()=>{
    console.log(selected)
  },[selected])

  
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     setError(null);
  //     setData(null);
  //     setLoading(true);

  //     const URL = "openapi/service/rest/HmcSearchService/getRegnHmcList?hmcNm=%EC%83%88%ED%95%98%EB%8A%98";

  //     const response = axios.get(URL, {
  //         params: {
  //           serviceKey: process.env.REACT_APP_API_KEY,
  //           numOfRows: 1,
  //           pageNo: 10
  //         }
  //     });

  //     setData(response.data);

  //   }catch(error) {
  //     setError(error);
  //   }

  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData()
  // },[]);

  // if(loading) return console.log('loading');
  // if(error) return console.log(error);
  // if(!data) return console.log('data is null');

  // console.log(data);
  
  return (
    <div className='search'>
      <h2>국가 검진 기관 찾기</h2>
      <p>{string}</p>

      <div className="select-institution">
        <select name="institution" id="institution" onChange={(e)=>{handleSelect(e)}}>
          <option defaultValue="시군구">행정구역을 선택하세요.</option>
          {
            institution.map((v,i)=>{
              return(
                <option key={i} value={v}>{v} </option>
              )
            })
          }        
        </select>

        <button className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} className='fontawesome'/>
        </button>
      </div>
    </div>
  )
}

export default Search
