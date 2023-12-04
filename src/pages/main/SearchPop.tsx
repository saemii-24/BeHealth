import React, { useEffect, useState } from 'react'

const SearchPop = (props) => {
    let {institution, selected} = props;
    
    let [value, setValue] = useState('');    
    const handleValue = (e) => {
        setValue(e.target.value);
    }
    
    useEffect(()=>{
        console.log(value)
    },[value])

    
  return (
    <div className='search-pop'>
        <select name="popup-select" id="popup_select" onChange={(e)=>{handleValue(e)}}>
            <option defaultValue="시군구">행정구역을 선택하세요.</option>
            {
              institution[selected].district.map((v,i)=>{
                return(
                  <option key={i} value={v}>{v}</option>
                )
              })
            }
        </select>
    </div>
  )
}

export default SearchPop