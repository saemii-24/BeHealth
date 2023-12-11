import React, { useEffect, useState }  from 'react'
import {useDispatch} from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

//옵션 데이터
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


  let [selected, setSelected] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }
  
  useEffect(()=>{
    console.log(selected)
  },[selected])


  let [searchPop, setSearchPop] = useState(false);
  
  
  return (
    <div className='search'>
      <div className='search--left'>
        <h2>국가 검진 기관 찾기</h2>
        <p>{string}</p>
  
        <div className="select-institution">
          <select name="institution" id="institution" onChange={(e)=>{handleSelect(e)}}>
            {
              institution.map((v,i)=>{
                return(
                  <option key={i} value={v.id}>{v.city}</option>
                )
              })
            }        
          </select>
  
          <button className="search-icon" onClick={()=>{setSearchPop(true)}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='fontawesome'/>
          </button>
          {searchPop ? <SearchPop institution={institution} selected={selected} setSearchPop={setSearchPop} /> : null}
        </div>
      </div>

      <div className="search--right">
        
      </div>
    </div>
  )
}

export default Search
