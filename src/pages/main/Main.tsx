import React, { useContext, useEffect, useRef, useState } from 'react';
import HealthNews from './HealthNews';
import SearchPop from './SearchPop';
import PharmacyPop from './PharmacyPop';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FiMinus } from 'react-icons/fi';
import { FaRegHospital } from 'react-icons/fa';
import TodayListBox from './TodayListBox';
import WeekExercise from './WeekExercise';

//옵션 데이터
import institution from '../../data/institution';

//로그인과 사용자 정보 확인
import { AuthContext } from '../../context/AuthContext';
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../../firebase/firebaseApp';
import { RenderDataType } from '../mypage/MyStatus';
import { MainPopupContext } from '../../context/MainPopupContext';

const Main = () => {
  const { mainPopup, setMainPopup } = useContext(MainPopupContext);

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
  const context = useContext(AuthContext); //로그인 실시간 확인
  let [string, setString] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    if (today.getFullYear() % 2 === 0) {
      setString(
        `${today.getFullYear()}년은 만20세 이상 짝수년도\n 출생자가 검진 대상자입니다.`,
      );
    } else if (today.getFullYear() % 2 === 1) {
      setString(
        `${today.getFullYear()}년은 만20세 이상 홀수년도\n 출생자가 검진 대상자입니다.`,
      );
    }
  }, []);

  let [addInfo, setAddInfo] = useState<boolean>(false);
  let [userData, setUserData] = useState<RenderDataType>({});
  //저장되어 있는 사용자 정보 불러오기
  const fetchUserData = async () => {
    if (context.user) {
      const q = query(
        collection(db, 'myStatus'),
        where('userId', '==', context.user!.uid),
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setAddInfo(true);
        querySnapshot.forEach((doc) => {
          setUserData(doc.data());
        });
      } else {
        setAddInfo(false);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
    if (userData.birth) {
      const userBirthYear = new Date(userData.birth).getFullYear();
      const userBirthMonth = new Date(userData.birth).getMonth();
      const userBirthDate = new Date(userData.birth).getDate();
      const thisYear = new Date().getFullYear();
      const thisMonth = new Date().getMonth();
      const thisDate = new Date().getDate();

      let age = 0;
      if (
        //올해 생일이 지났는가?
        new Date(thisYear, thisMonth, thisDate) >
        new Date(thisYear, userBirthMonth, userBirthDate)
      ) {
        age = thisYear - userBirthYear - 1;
      } else {
        age = thisYear - userBirthYear;
      }
      mainStr(age, thisYear, userBirthYear);
    }
  }, [context, addInfo]);

  function mainStr(userAge: number, thisYear: number, userYear: number) {
    if (context.user && userAge >= 20) {
      if (thisYear % 2 === userYear % 2) {
        //3-1. 사용자 생년과 올해 년도의 짝홀이 같을 때
        if (userData.name) {
          setString(`${userData.name}님은 ${theYear}년 검진 대상자입니다.`);
        } else {
          setString(`사용자님은 ${theYear}년 검진 대상자입니다.`);
        }
      } else {
        if (theYear % 2 === 0) {
          setString(`${theYear}년은 만20세 이상 짝수년도\n 출생자가 검진 대상자입니다.`);
        } else if (theYear % 2 === 1) {
          setString(`${theYear}년은 만20세 이상 홀수년도\n 출생자가 검진 대상자입니다.`);
        }
      }
    } else {
      if (theYear % 2 === 0) {
        setString(`${theYear}년은 만20세 이상 짝수년도\n 출생자가 검진 대상자입니다.`);
      } else if (theYear % 2 === 1) {
        setString(`${theYear}년은 만20세 이상 홀수년도\n 출생자가 검진 대상자입니다.`);
      }
    }
  }

  //줄바꿈 하기
  let newStr = string.split('\n');

  //firestore에 저장된 병원 정보 받아오기
  interface HospitalDataType {
    name: string;
    address: string;
    time: Date;
    userId: string;
    id?: string;
  }
  const [hospitalData, setHospitalData] = useState<(HospitalDataType | { id: string })[]>(
    [],
  );

  const fetchData = async () => {
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

  //클릭하면 삭제
  const [hoverBtn, setHoverBtn] = useState<string>('');
  //
  const onDelete = async (data) => {
    try {
      await deleteDoc(doc(db, 'myHospital', data.id));
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [context]);

  //옵션 선택한 값의 인덱스 가져옴
  let [selected, setSelected] = useState(0);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  let [searchPop, setSearchPop] = useState(false);

  //ref
  let chSearch = useRef<any>(null);
  let searchLeft = useRef<any>(null);
  let chInstitution = useRef<any>(null);
  let searchBottomLeft = useRef<any>(null);
  let chNotice = useRef<any>(null);
  let hospital = useRef<any>(null);

  function clickHealthNews() {
    chSearch.current.style.width = '270px';
    searchLeft.current.style.width = '100%';
    chInstitution.current.style.width = '150px';
    hospital.current.classList.add('hospital-css-hide');
    hospital.current.classList.remove('hospital-css-show');

    searchBottomLeft.current.style.width = '270px';
    chNotice.current.style.display = 'none';
  }

  function closeHealthNews() {
    chSearch.current.style.width = '100%';
    searchLeft.current.style.width = '260px';
    chInstitution.current.style.width = '200px';
    hospital.current.classList.remove('hospital-css-hide');
    hospital.current.classList.add('hospital-css-show');

    searchBottomLeft.current.style.width = '290px';
    chNotice.current.style.display = 'block';
  }

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
                  if (mainPopup === false) {
                    setSearchPop(true);
                    setMainPopup!(true);
                  }
                }}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='fontawesome' />
              </button>
              {searchPop ? (
                <SearchPop
                  setHospitalData={setHospitalData}
                  institution={institution}
                  selected={selected}
                  setSearchPop={setSearchPop}
                />
              ) : null}
            </div>
          </div>

          <div className={`search--right`} ref={hospital}>
            {context.user ? (
              <>
                {hospitalData.length > 0 ? ( //로그인 했을 때
                  <div className={`add-search`}>
                    {hospitalData.map((v: any, i) => {
                      return (
                        <div key={i} className='show-hospital'>
                          <div
                            className='icon'
                            onMouseEnter={() => {
                              setHoverBtn(v.id as string);
                            }}
                            onMouseLeave={() => {
                              setHoverBtn('');
                            }}
                            onClick={() => {
                              onDelete(v);
                            }}>
                            {hoverBtn === v.id ? (
                              <FiMinus className='delete-icon' />
                            ) : (
                              <FaRegHospital className='fontawesome' />
                            )}
                          </div>
                          <div className='show-hospital__txt'>
                            <h4>{v.name}</h4>
                            <p>{v.address}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div
                    className={`basic-search`}
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + '/images/doctor.svg'
                      })`,
                    }}></div>
                )}
              </>
            ) : (
              <>
                <div
                  className={`basic-search`}
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + '/images/doctor.svg'
                    })`,
                  }}></div>
              </>
            )}
          </div>
        </div>

        <div className='main--bottom'>
          <div className='main--bottom--left' ref={searchBottomLeft}>
            <div
              className='pharmacy'
              onClick={() => {
                if (mainPopup === false) {
                  setPharmacyPop(true);
                  setMainPopup!(true);
                }
              }}>
              <div className='icon'>
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
              <WeekExercise />
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
              <TodayListBox />
            </div>
          </div>
        </div>
      </div>

      <HealthNews clickHealthNews={clickHealthNews} closeHealthNews={closeHealthNews} />
    </div>
  );
};

export default Main;
