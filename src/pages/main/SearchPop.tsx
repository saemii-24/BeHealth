import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../../component/Loading';

import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { HospitalNameContext } from '../../context/HospitalNameContext';
import { HospitalAddContext } from '../../context/HospitalAddContext';
import cn from 'classnames';
import { addDoc, collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseApp';
import { AuthContext } from '../../context/AuthContext';

const SearchPop = (props) => {
  let { institution, selected, setSearchPop, setHospitalData } = props;

  //팝업 옵션 값 받아오기
  let [value, setValue] = useState<string | null>('');
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  let [cidoCode, setCidoCode] = useState<number | null>(null); //시도 코드

  //api
  let [callHospital, setCallHospital] = useState<object[]>([]);
  let [loading, setLoading] = useState<boolean>(true); //로딩
  let [nothing, setNothing] = useState<boolean>(true); //정보가 있는가?

  const apiKey = process.env.REACT_APP_APIKEY_DATA;
  const fetchData = async () => {
    setLoading(true);

    try {
      if (value) {
        const URL = `http://apis.data.go.kr/openapi/service/rest/HmcSearchService/getHmcList?serviceKey=${apiKey}&siDoCd=${cidoCode}&locAddr=${value}&pageNo=${pageNo}&numOfRows=50`;
        const response: any = await axios.get(URL);
        const searchItem = response.data.response.body.items.item;
        setTotalCount(response.data.response.body.totalCount);

        console.log(response);

        //페이지네이션을 위한 그룹화
        let originArr: any = [];
        if (Array.isArray(searchItem)) {
          for (let i = 0; i < searchItem.length; i += 10) {
            originArr.push(searchItem.slice(i, i + 10));
          }
        }
        console.log(originArr);

        if (!searchItem) {
          setNothing(true);
          setTotalCount(0);
        } else {
          setNothing(false);
          if (originArr.length === 0) {
            setNothing(true);
            setCallHospital(originArr);
          } else {
            setCallHospital(originArr);
          }
          setLoading(false);
        }
      } else {
        setNothing(true);
      }
    } catch (err) {
      setCallHospital([]);
      setNothing(true);
      console.log(err);
    }
  };

  //이전, 다음 버튼
  let [indexNo, setIndexNo] = useState<number>(0); //버튼 렌더링에 사용될 num
  let [pageNo, setPageNo] = useState<number>(1); //api call에 사용될 page number
  let [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setValue('');
  }, [selected]);

  useEffect(() => {
    setCidoCode(institution[selected].code);
    setTotalCount(0);
    setPageNo(1);
    setIndexNo(0);
    fetchData();
  }, [value]);

  //정보 클릭하면 저장해서 목록에 보여줌
  let { setSelectName } = useContext(HospitalNameContext);
  let { setSelectAdd } = useContext(HospitalAddContext);

  //병원정보를 클릭하면 firestore에 등록한다
  const context = useContext(AuthContext);

  const onClick = async (data) => {
    try {
      await addDoc(collection(db, 'myHospital'), {
        name: data.hmcNm,
        address: data.locAddr,
        time: new Date()?.toLocaleDateString('ko', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
        userId: context.user!.uid,
      });
      upDateHospitalData();
    } catch (err) {
      console.log(err);
    }
  };

  //병원정보
  const upDateHospitalData = async () => {
    if (context.user) {
      try {
        const q = query(
          collection(db, 'myHospital'),
          where('userId', '==', context.user!.uid),
          orderBy('time', 'asc'),
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setHospitalData([]);
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            setHospitalData((prev) => {
              if (prev.some((item) => item.id === doc.id)) {
                return prev;
              } else {
                return [...prev, { ...doc.data(), id: doc.id }];
              }
            });
          });
        } else {
          setHospitalData([]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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
        }}
        value={value as string}>
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
        {nothing ? (
          <div className='search__null'>검색결과가 없습니다.</div>
        ) : (
          <>
            {loading ? (
              <div className='search--load'>
                <Loading />
              </div>
            ) : (
              (callHospital[indexNo] as object[]).map((v: any, i: number) => {
                return (
                  <div
                    className='hospital'
                    key={i}
                    onClick={() => {
                      if (context.user) {
                        onClick(v);
                      }
                      setSelectName!(v.hmcNm);
                      setSelectAdd!(v.locAddr);
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
          </>
        )}
      </div>

      <div className='button-box'>
        <button
          className='prev button'
          disabled={pageNo === 1}
          onClick={async () => {
            setIndexNo(4);
            setPageNo(--pageNo);
            await fetchData();
          }}>
          <IoIosArrowBack className='arrow' />
        </button>
        {new Array(5).fill(0).map((_, index) => {
          return (
            <input
              key={index}
              className={cn('pagination', { active: indexNo === index })}
              type='button'
              value={(pageNo - 1) * 5 + index + 1}
              onClick={(e) => {
                setIndexNo(index);
              }}
              disabled={callHospital.length < index + 1}
            />
          );
        })}
        <button
          className='next button'
          disabled={pageNo === Math.ceil(totalCount / 50) || callHospital.length < 5}
          onClick={async () => {
            setIndexNo(0);
            setPageNo(++pageNo);
            await fetchData();
          }}>
          <IoIosArrowForward className='arrow' />
        </button>
      </div>
    </div>
  );
};

export default SearchPop;
