import React from 'react'
import Main from '../pages/main/Main'
import MyPage from '../pages/mypage/MyPage'

const ContentTap = () => {
  return (
    <div className="content-back">
      <div className="side-menu"></div>

      
      <div className="content">
        <Main/>
        <MyPage/>
      </div>
    </div>
  )
}

export default ContentTap
