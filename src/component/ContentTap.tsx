import React from 'react'
import MyPage from '../pages/mypage/MyPage'
import SideMenu from './SideMenu'

const ContentTap = () => {
  return (
    <div className="content-back">
      <SideMenu/>

      
      <div className="content">
        {/* <Main/> */}
        <MyPage/>
      </div>
    </div>
  )
}

export default ContentTap
