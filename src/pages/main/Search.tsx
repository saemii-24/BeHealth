import React from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';

const Search = () => {
  const dispatch = useDispatch();
  let thisYear = new Date().getFullYear();
  let string = '';

  
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

  if(thisYear % 2 === 0){
    string = `${thisYear}년은 짝수년도 출생자가 검진 대상자입니다.`
  }else if(thisYear % 2 === 1){
    string = `${thisYear}년은 홀수년도 출생자가 검진 대상자입니다.`
  }
  
  return (
    <div className='search'>
      <h2>국가 검진 기관 찾기</h2>
      <p>{string}</p>
    </div>
  )
}

export default Search
