import React from 'react'
import { useSelector } from 'react-redux'
import SideBar from './SideBar';

const ViewApplication = () => {
  
    const {currApp} = useSelector( (state)=>  (state.application) );
  
    return (
    <div>

        <SideBar></SideBar>

        <div className='right-con'>
            This is right container for all divs
        </div>

    </div>
  )
}

export default ViewApplication
