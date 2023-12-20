import React, { useContext, useState, useEffect } from 'react';
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
import { TiDelete } from 'react-icons/ti';
import { FaCalendarDays } from 'react-icons/fa6';
import { MdBloodtype } from 'react-icons/md';
import { FaRegHospital, FaWalking, FaRegCalendarPlus } from 'react-icons/fa';
import { RiMedicineBottleLine } from 'react-icons/ri';
import { addScheduleData } from '../mypage/AddScheduleData';
import { useNavigate } from 'react-router-dom';

const TodayListBox = () => {
  interface ScheduleDataType {
    date: string;
    time: string;
    title: string;
    userId: string;
    id?: string;
  }
  const context = useContext(AuthContext);
  const [scheduleData, setScheduleData] = useState<(ScheduleDataType | { id: string })[]>(
    [],
  );

  const navigate = useNavigate();

  //아이콘
  const handleScheduleIcon = (data) => {
    const thisData = addScheduleData.filter((scData) => scData.type === data.type);

    switch (thisData[0].type) {
      case 'menstruation':
        return <MdBloodtype />;
      case 'hospital':
        return <FaRegHospital />;
      case 'medicine':
        return <RiMedicineBottleLine />;
      case 'exercise':
        return <FaWalking />;
      case 'etc':
        return <FaRegCalendarPlus />;
      default:
        return null;
    }
  };
  //오늘날짜와 동일한 값만 찾는다.
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const date = today.getDate().toString().padStart(2, '0');
  const todayString = year + '-' + month + '-' + date;

  const fetchData = async () => {
    if (context.user) {
      try {
        const q = query(
          collection(db, 'mySchedule'),
          where('userId', '==', context.user!.uid),
          where('date', '==', todayString),
          orderBy('time', 'asc'),
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setScheduleData([]);
          querySnapshot.forEach((doc) => {
            // console.log(doc.data());
            setScheduleData((prev) => {
              if (prev.some((item) => item.id === doc.id)) {
                return prev;
              } else {
                return [...prev, { ...doc.data(), id: doc.id }];
              }
            });
          });
        } else {
          setScheduleData([]);
        }
        console.log(scheduleData);
        console.log('하이');
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [context]);

  //삭제 버튼을 클릭하면 삭제한다.
  const onDelete = async (data) => {
    try {
      await deleteDoc(doc(db, 'mySchedule', data.id));
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='today-list-box'>
      {context.user ? (
        <>
          {scheduleData.length > 0 ? (
            <>
              {scheduleData.map((data: any, index) => {
                return (
                  <div key={index}>
                    <div
                      className='today-list-box__icon'
                      style={{ backgroundColor: data.color }}>
                      {handleScheduleIcon(data)}
                    </div>
                    <p className='today-list__time'>{data.time}</p>
                    <p className='today-list__title'>{data.title}</p>
                    <div
                      className='today-list-box--delete'
                      onClick={() => {
                        onDelete(data);
                      }}>
                      <TiDelete />
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div
              className='today-list-box--empty'
              onClick={() => {
                navigate('/mypage');
              }}>
              <div className='today-list-box--empty__icon'>
                <FaCalendarDays />
              </div>
              오늘 일정을 등록하고,
              <br />
              관리해보세요.
            </div>
          )}
        </>
      ) : (
        <>
          <div className='today-list-box--login'>
            <div
              className='today-list-box--login__icon'
              onClick={() => {
                navigate('/login');
              }}>
              <img
                alt='BeHealth-logo'
                className='logo'
                src={process.env.PUBLIC_URL + '/images/logo.svg'}
              />
            </div>
            로그인 하고 오늘 일정을
            <br /> 등록해보세요.
          </div>
        </>
      )}
    </div>
  );
};

export default TodayListBox;
