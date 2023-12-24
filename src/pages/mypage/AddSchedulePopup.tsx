import React, { useState, useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaRegHospital, FaWalking, FaRegCalendarPlus } from 'react-icons/fa';
import { RiMedicineBottleLine } from 'react-icons/ri';
import { AuthContext } from '../../context/AuthContext.tsx';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseApp';
import { MyPagePopupContext } from '../../context/MyPagePopupContext.tsx';

const AddSchedulePopup = ({ setPopup, scheduleData }) => {
  const { myPagePopup, setMyPagePopup } = useContext(MyPagePopupContext);

  const handleScheduleIcon = (iconText: string) => {
    let icon = iconText;
    switch (icon) {
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

  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  //최초 정보 등록
  const context = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'mySchedule'), {
        type: scheduleData.type,
        title: title,
        date: date,
        time: time,
        color: scheduleData.scheduleIconColor,
        userId: context.user!.uid,
      });
      setPopup(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') {
      setTitle(value);
    }
    if (name === 'date') {
      setDate(value);
    }
    if (name === 'time') {
      setTime(value);
    }
  };

  return (
    <div className='schedule-popup'>
      <div
        className='schedule-popup__close'
        onClick={() => {
          if (myPagePopup) {
            setPopup(false);
            setMyPagePopup!(false);
          }
        }}>
        <IoClose />
      </div>
      <div className='schedule-popup__title'>
        <div>{handleScheduleIcon(scheduleData.scheduleIcon)}</div>
        <h3>{scheduleData.scheduleTitle}</h3>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          id='title'
          name='title'
          className='schedule-popup__title'
          placeholder='제목'
          onChange={onChange}
          required
        />
        <div>
          <label htmlFor='date' className='schedule-popup__date__label'>
            날짜
          </label>
          <input
            type='date'
            id='date'
            name='date'
            className='schedule-popup__date'
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor='time' className='schedule-popup__time__label'>
            시간
          </label>
          <input
            type='time'
            id='time'
            name='time'
            className='schedule-popup__time'
            onChange={onChange}
            required
          />
        </div>
        <button>등록하기</button>
      </form>
    </div>
  );
};

export default AddSchedulePopup;
