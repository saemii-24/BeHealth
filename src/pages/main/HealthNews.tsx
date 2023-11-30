import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisease, faAngleRight, faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const HealthNews = () => {
  return (
    <div className='health-news'>
      <div className="disease">
        <div className="icon">
          <FontAwesomeIcon icon={faDisease} className='fontawesome'/>
        </div>

        <div className="disease__txt">
          <h3>유행 주의 질병</h3>
          <p>자세히 보기 <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' /></p>
        </div>
      </div>

      
      <div className="exercise">
        <div className="icon">
          <FontAwesomeIcon icon={faDumbbell} className='fontawesome' />
        </div>

        <div className="exercise__txt">
          <h3>오늘의 추천 운동</h3>
          <p>자세히 보기 <FontAwesomeIcon icon={faAngleRight} className='faAngleRight' /></p>
        </div>
      </div>

      <div className="health-common">
        <img src="/images/exercise.png" alt="건강 상식" />
        <h3>알아두면 좋은 <br></br> 건강 상식</h3>
      </div>
    </div>
  )
}

export default HealthNews
