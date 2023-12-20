import React, { useState, useEffect } from 'react';
import { AddScheduleType, addScheduleData } from './AddScheduleData';
import { MdBloodtype } from 'react-icons/md';
import { FaRegHospital, FaWalking, FaRegCalendarPlus } from 'react-icons/fa';
import { RiMedicineBottleLine } from 'react-icons/ri';
import AddSchedulePopup from './AddSchedulePopup';

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
  return (
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
                  setPopup(true);
                  setScheduleData(data);
                }}>
                +
              </div>
            </div>
          );
        })}
      </div>
      {popup && <AddSchedulePopup setPopup={setPopup} scheduleData={scheduleData} />}
    </div>
  );
};

export default AddSchedule;
