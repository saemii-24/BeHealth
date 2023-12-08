import React, { useEffect, useState } from 'react'

import { IoClose } from "react-icons/io5";

const SearchPop = (props) => {
    let {institution, selected, setSearchPop} = props;
    console.log(props)
    
    let [value, setValue] = useState('');    
    const handleValue = (e) => {
        setValue(e.target.value);
    }
    
    useEffect(()=>{
        console.log(value)
    },[value])

    
  return (
    <div className='search-pop'>
        <IoClose onClick={()=>{setSearchPop(false)}} className='xmark' />

        <select name="popup-select" id="popup_select" onChange={(e)=>{handleValue(e)}}>
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