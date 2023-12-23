import React, { useState, useEffect, useContext } from 'react';
import { AddScheduleType, addScheduleData } from '../../data/AddScheduleData';
import { FaRegHospital, FaWalking, FaRegCalendarPlus } from 'react-icons/fa';
import { RiMedicineBottleLine } from 'react-icons/ri';
import AddSchedulePopup from './AddSchedulePopup';
import { AuthContext } from '../../context/AuthContext';
import { MyPagePopupContext } from '../../context/MyPagePopupContext';

const AddSchedule = ({ makeCalendar, fetchData }) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [scheduleData, setScheduleData] = useState<AddScheduleType>(addScheduleData[1]);

  useEffect(() => {
    fetchData();
    makeCalendar();
  }, [popup]);

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

  const context = useContext(AuthContext);
  const { myPagePopup, setMyPagePopup } = useContext(MyPagePopupContext);

  return (
    <>
      {context.user ? (
        <>
          <div className='add-schedule'>
            <div className='add-schedule__scroll-box'>
              {addScheduleData.map((data, index) => {
                return (
                  <div key={data.scheduleIndex} className='add-schedule__box'>
                    <div
                      className='add-schedule__icon'
                      style={{ backgroundColor: data.scheduleIconColor }}>
                      {handleScheduleIcon(data.scheduleIcon)}
                    </div>
                    <div className='add-schedule__box__content'>
                      <h1 className='add-schedule__title'>{data.scheduleTitle}</h1>
                      <h3 className='add-schedule__summay'>{data.scheduleSummary}</h3>
                    </div>
                    <div
                      className='add-schedule__icon--add'
                      onClick={() => {
                        if (myPagePopup === false) {
                          setPopup(true);
                          setMyPagePopup!(true);
                        }
                        setScheduleData(data);
                      }}>
                      +
                    </div>
                  </div>
                );
              })}
            </div>
            {popup && (
              <AddSchedulePopup setPopup={setPopup} scheduleData={scheduleData} />
            )}
          </div>
        </>
      ) : (
        <div className='add-schedule'>
          <div className='add-schedule__scroll-box'>
            {addScheduleData.map((data, index) => {
              return (
                <div key={data.scheduleIndex} className='add-schedule__box'>
                  <div
                    className='add-schedule__icon'
                    style={{ backgroundColor: data.scheduleIconColor }}>
                    {handleScheduleIcon(data.scheduleIcon)}
                  </div>
                  <div className='add-schedule__box__content'>
                    <h1 className='add-schedule__title'>{data.scheduleTitle}</h1>
                    <h3 className='add-schedule__summay'>{data.notAvailable}</h3>
                  </div>
                  <div className='add-schedule__icon--add'></div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AddSchedule;
