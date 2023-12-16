import React, { useContext, useEffect, useRef, useState } from 'react';
import HealthNews from './HealthNews';
import SearchPop from './SearchPop';
import PharmacyPop from './PharmacyPop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { TiPlus } from "react-icons/ti";
import { FaRegHospital } from "react-icons/fa";

//옵션 데이터
import institution from './institution';

//운동량 데이터
import momentum from './momentum';
import { MomentumType } from './momentum';

//오늘 할 일 데이터
import todayList from './todayList';
import { TodayListType } from './todayList';

//병원 정보 추가 변수
import { HospitalAddContext } from '../../context/HospitalAddContext';
import { HospitalNameContext } from '../../context/HospitalNameContext';

const Main = () => {
  //mainContent 변수
  const [momentumData, setMomentumData] = useState<MomentumType[]>(momentum);
  const [todayListData, setTodayListData] = useState<TodayListType[]>(todayList);

  //날짜 구하기
  let currentDay = new Date();
  let theYear = currentDay.getFullYear();
  let theMonth = currentDay.getMonth();
  let theDayOfWeek = currentDay.getDay(); // 0~6까지 인덱스로 받아옴
  let thisDate = currentDay.getDate();

  let thisDay = String(currentDay).substring(0, 2); //전체 날짜에서 앞 2자리만 가져옴(요일)
  let days: string[] = []; //for문에서 배열로 추가됨
  let thisWeek: string[] = [];

  for (let i = 0; i < 7; i++) {
    let resultDay = new Date(theYear, theMonth, thisDate + (i - theDayOfWeek)); // i에서 오늘 날짜의 인덱스를 뺀 값이 나옴
    let thisDay: string = String(resultDay).substring(0, 2); //받아온 날짜에서 앞 2자리만 가져옴(요일)

    let dd: string = String(resultDay.getDate()); //날짜를 문자로 바꿈
    dd = dd.length === 1 ? '0' + dd : dd; //날짜 앞 0 붙이기 위한 식

    thisWeek.push(dd); //날짜 배열에 넣기
    days.push(thisDay); //요일 배열에 넣기
  }

  let [pharmacyPop, setPharmacyPop] = useState(false);

  //올해 홀수 짝수 구하기
  let string = '';
  if (theYear % 2 === 0) {
    string = `${theYear}년은 짝수년도 출생자가\n 검진 대상자입니다.`;
  } else if (theYear % 2 === 1) {
    string = `${theYear}년은 홀수년도 출생자가\n 검진 대상자입니다.`;
  }
  //줄바꿈 하기
  let newStr = string.split('\n');

  //옵션 선택한 값의 인덱스 가져옴
  let [selected, setSelected] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  let [searchPop, setSearchPop] = useState(false);

  //ref
  let chSearch = useRef<any>(null);
  let searchLeft = useRef<any>(null);
  let chInstitution = useRef<any>(null);
  let searchBottomLeft = useRef<any>(null);
  let chNotice = useRef<any>(null);
  let hospital = useRef<any>(null);

  let [add, setAdd] = useState(false);

  function clickHealthNews() {
    chSearch.current.style.width = '270px';
    chSearch.current.style.overflow = 'hidden';
    searchLeft.current.style.width = '100%';
    chInstitution.current.style.width = '150px';
    setAdd(false);

    searchBottomLeft.current.style.width = '270px';
    chNotice.current.style.display = 'none';
  }

  function closeHealthNews() {
    chSearch.current.style.width = '100%';
    chSearch.current.style.overflow = 'visible';
    searchLeft.current.style.width = '260px';
    chInstitution.current.style.width = '200px';
    setAdd(true);

    searchBottomLeft.current.style.width = '290px';
    chNotice.current.style.display = 'block';
  }

  let { selectAdd } = useContext(HospitalAddContext);
  let { selectName } = useContext(HospitalNameContext);

  return (
    <div className='main'>
      <div className='main-content'>
        <div className='search' ref={chSearch}>
          <div className='search--left' ref={searchLeft}>
            <h2>국가 검진 기관 찾기</h2>
            {newStr.map((v, i) => {
              return <p key={i}>{v}</p>;
            })}

            <div className='select-institution'>
              <select
                name='institution'
                id='institution'
                ref={chInstitution}
                onChange={(e) => {
                  handleSelect(e);
                }}>
                {institution.map((v, i) => {
                  return (
                    <option key={i} value={v.id}>
                      {v.city}
                    </option>
                  );
                })}
              </select>

              <button
                className='search-icon'
                onClick={() => {
                  setSearchPop(true);
                }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='fontawesome' />
              </button>
              {searchPop ? (
                <SearchPop
                  institution={institution}
                  selected={selected}
                  setSearchPop={setSearchPop}
                  setAdd={setAdd}
                />
              ) : null}
            </div>
          </div>

          {
            add ? (
              <div
                className={`search--right ${add ? null : 'hospital-css'} ${
                  add ? null : 'hospital-css-hide'
                } ${add ? 'hospital-css-show' : null}`}
                ref={hospital}
              >
                {selectName!.map((v, i) => {
                  return (
                    <div key={i} className='show-hospital'>
                      <div className='icon'><FaRegHospital className='fontawesome' /></div>

                      <div className='show-hospital__txt'>
                        <h4>{v}</h4>
                        <p>{selectAdd![i]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className='basic-search'>
                <h5>원하시는 병원을 선택 해보세요!</h5>
                <div className='icon'><TiPlus className='fontawesome' /></div>
              </div>
            )
          }
          
        </div>

        <div className='main--bottom'>
          <div className='main--bottom--left' ref={searchBottomLeft}>
            <div
              className='pharmacy'
              onClick={() => {
                setPharmacyPop(true);
              }}>
              <div className='icon'>
                {/* <FontAwesomeIcon icon={faSyringe} className='fontawesome'/> faPrescriptionBottleMedical */}
                <FontAwesomeIcon icon={faHouseChimneyMedical} className='fontawesome' />
              </div>

              <div className='pharmacy-txt'>
                <h3>가까운 약국 찾기</h3>
                <p>
                  주변에 있는 약국을 <br></br> 확인해 보세요!
                </p>
              </div>
            </div>
            {pharmacyPop ? <PharmacyPop setPharmacyPop={setPharmacyPop} /> : null}

            <div className='momentum'>
              <h3>
                이번주 운동량 <span>&#40; 평균 1시간 &#41;</span>
              </h3>

              <div className='graph-box'>
                {momentumData.map((v, i) => {
                  return (
                    <div key={i} className='graph'>
                      <div
                        style={{
                          height: `${v.graph}%`,
                          background: `${v.graph > 50 ? '#FFD749' : '#fde9a0'}`,
                        }}></div>
                      <p>{v.day}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='main--bottom--right' ref={chNotice}>
            <h3>이번주 알림</h3>
            <div className='main__date'>
              {days.map((v, i) => {
                return (
                  <div
                    key={i}
                    className='main__calendar'
                    style={{
                      background: `${v === thisDay ? '#FFD749' : 'transparent'}`,
                    }}>
                    <p>{v}</p>
                    <p>{thisWeek[i]}</p>
                  </div>
                );
              })}
            </div>

            <div className='today-list'>
              {todayListData.map((v, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      background: `${v.today === true ? '#306DE5' : '#fff'}`,
                    }}>
                    <p
                      style={{
                        color: `${v.today === true ? '#fff' : '#333333'}`,
                      }}>
                      {v.time}
                    </p>
                    <p
                      style={{
                        color: `${v.today === true ? '#fff' : '#333333'}`,
                      }}>
                      {v.todo}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <HealthNews
        theMonth={theMonth}
        clickHealthNews={clickHealthNews}
        closeHealthNews={closeHealthNews}
      />
    </div>
  );
};

export default Main;
