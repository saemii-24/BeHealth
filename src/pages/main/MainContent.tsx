import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

import momentum from './momentum'
import { MomentumType } from './momentum'

import todayList from './todayList'
import { TodayListType } from './todayList'

const MainContent = () => {
  const [momentumData, setMomentumData] = useState<MomentumType[]>(momentum);
  const [todayListData, setTodayListData] = useState<TodayListType[]>(todayList);

  let currentDay = new Date();  
  let theYear = currentDay.getFullYear();
  let theMonth = currentDay.getMonth();
  let theDayOfWeek = currentDay.getDay();
  let thisDate = currentDay.getDate();

  let thisDay = String(currentDay).substring(0,2);  
  let days:string[] = [];
  let thisWeek:string[] = [];

  
  for(let i=0; i<7; i++) {
    let resultDay = new Date(theYear, theMonth, thisDate + (i - theDayOfWeek));
    let thisDay:string = String(resultDay).substring(0,2);  

    let dd:string = String(resultDay.getDate());
    dd = dd.length === 1 ? '0' + dd : dd;
  
    thisWeek.push(dd);
    days.push(thisDay)
  }  

  
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
                  days.map((v,i)=>{
                    return(
                      <div key={i} className="main__calendar" style={{
                        background:`${
                          v === thisDay? '#FFD749' : 'transparent'
                        }`
                      }}>
                        <p>{v}</p>
                        <p>{thisWeek[i]}</p>
                      </div>
                    )
                  })
                }
              </div>

              <h4>오늘 할일</h4>

              <div className='today-box'>
                <div className="today-list">
                  {
                    todayListData.map((v,i)=>{
                      return(
                        <div key={i} style={{
                          background : `${ v.today === true? '#306DE5' : '#fff' }`
                        }}>
                          <p style={{
                            color: `${ v.today === true? '#fff' : '#333333'}`
                          }}>{v.time}</p>
                          <p style={{
                            color: `${ v.today === true? '#fff' : '#333333'}`
                          }}>{v.todo}</p>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              </div>
        </div>    
    </div>
  )
}

export default MainContent
