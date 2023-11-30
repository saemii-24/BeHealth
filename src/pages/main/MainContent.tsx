import React from 'react'
import Search from './Search'

const MainContent = () => {
  return (
    <div className='main-content'>
        <Search/>
        
        <div className='main--bottom'>
            <div className='main--bottom--left'>
                <div className="vaccination">
                    <div className="icon"></div>
                </div>
            </div> 
    
            <div className="main--bottom--right"></div>
        </div>    
    </div>
  )
}

export default MainContent
