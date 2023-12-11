import React, { useEffect, useState } from 'react'
import axios from 'axios';
import convert from 'xml-js';

import { IoClose } from "react-icons/io5";
// import { FaRegHospital } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa6";

const SearchPop = (props) => {
    let {institution, selected, setSearchPop} = props;
    console.log(props)
    
    let [value, setValue] = useState('');    
    const handleValue = (e) => {
        setValue(e.target.value);
    }
    
    useEffect(()=>{
        console.log(value)
    },[value]);


    const fetchData = async () => {
      try {
        const URL = 'http://apis.data.go.kr/openapi/service/rest/HmcSearchService/getHchkTypesHmcList';
        const response = await axios.get(URL, {
          params: {
            serviceKey: process.env.REACT_APP_API_KEY,
            numOfRows: 1,
            pageNo: 10,
          },
        });
        const searchItem = response.data.response.body.items.item;
        console.log(searchItem);
      } catch (err) {
        console.log(err);
      }
   
    };
    fetchData();

    
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

        <div className="hospital-wrap">
          <div className="hospital">
            <div className="icon">
              {/* <FaRegHospital className='fontawesome' /> */}
              <FaRegHospital className='fontawesome' />
            </div>

            <div className="hospital-info">
              <p>이름</p>
              <p>주소</p>
            </div>            
          </div>
        </div>
    </div>
  )
}

export default SearchPop