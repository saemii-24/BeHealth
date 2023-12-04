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

import SearchPop from './SearchPop';

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


  let [searchPop, setSearchPop] = useState(false);
  
  
  return (
    <div className='search'>
      <h2>국가 검진 기관 찾기</h2>
      <p>{string}</p>

      <div className="select-institution">
        <select name="institution" id="institution"  onChange={(e)=>{handleSelect(e)}}>
          <option defaultValue="시군구">행정구역을 선택하세요.</option>
          {
            institution.map((v,i)=>{
              return(
                <option key={i} value={v.id}>{v.city} </option>
              )
            })
          }        
        </select>

        <button className="search-icon" onClick={()=>{setSearchPop(true)}}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='fontawesome'/>
        </button>
        {searchPop ? <SearchPop institution={institution} selected={selected} /> : null}
      </div>
    </div>
  )
}

export default Search
