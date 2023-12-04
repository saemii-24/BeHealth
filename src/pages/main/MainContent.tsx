import React, { useState } from 'react'
import axios from 'axios';
import convert from 'xml-js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

import momentum from './momentum'
import { MomentumType } from './momentum'

import mainCalendar from './mainCalendar'
import { MainCalendarType } from './mainCalendar'

import todayList from './todayList'
import { TodayListType } from './todayList'

const MainContent = () => {
  const [momentumData, setMomentumData] = useState<MomentumType[]>(momentum);
  const [mainCalendarData, setMainCalendarData] = useState<MainCalendarType[]>(mainCalendar);
  const [todayListData, setTodayListData] = useState<TodayListType[]>(todayList);


    const fetchData = async () => {
      try {
        const URL = '';
        const response = await axios.get(URL, {
          // params: {
          //   serviceKey: process.env.REACT_APP_API_KEY,
          //   numOfRows: 1,
          //   pageNo: 10,
          // },
        });
        const result = convert.xml2json(response.data, { compact: true, spaces: 4});
        console.log(response);
      } catch (err) {
        console.log(err);
      }
   
    };
    fetchData();
  


  
  return (
    <div className='main-content'>
        <Search/>
        
        <div className='main--bottom'>
            <div className='main--bottom--left'>
              <div className="pharmacy">
                  <div className="icon">
                    {/* <FontAwesomeIcon icon={faSyringe} className='fontawesome'/> faPrescriptionBottleMedical */}
                    <FontAwesomeIcon icon={faHouseChimneyMedical} className='fontawesome' />
                  </div>

                  <div className="pharmacy-txt">
                    <h3>가까운 약국 찾기</h3>
                    <p></p>
                  </div>
              </div>

              <div className="momentum">
                <h3>이번주 운동량</h3>

                <div className="graph-box">
                  {
                    momentumData.map((v,i)=>
                      {
                        return(
                          <div key={i} className="graph">
                            <div style={{height:`${v.graph}%`, 
                                background:`${
                                  v.graph > 50 ? '#FFD749' : '#fde9a0'
                                }`
                              }}>
                            </div>
                            <p>{v.day}</p>
                          </div>
                        )
                      }
                    )
                  }                  
                </div>
              </div>
            </div> 
    
            <div className="main--bottom--right">
              <h3>이번주 알림</h3>
              <div className="main__date">
                {
                  mainCalendarData.map((v,i)=>{
                    return(
                      <div key={i} className="main__calendar" style={{
                        background:`${
                          v.today === true? '#FFD749' : 'transparent'
                        }`
                      }}>
                        <p>{v.day}</p>
                        <p>{v.date}</p>
                      </div>
                    )
                  })
                }
              </div>

              <h4>오늘 할일</h4>

              <div className="today-list">
                {
                  todayListData.map((v,i)=>{
                    return(
                      <div key={i} style={{background : `${
                        v.today === true? '#306DE5' : '#fff'
                      }`, color: `${
                        v.today === true? '#fff' : '#333333'
                      }`}}>
                        <p>{v.time}</p>
                        <p>{v.todo}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </div>    
    </div>
  )
}

export default MainContent
