import React from 'react'
import SideBar from '../../common/SideBar'
import { useSelector } from 'react-redux'
import ApplicationCard from '../../common/ApplicationCard';

const Saved = () => {

    const {userDetails} = useSelector((state)=>(state.profile));


    return (
    <div>
      <SideBar flag="true"></SideBar>

        <div className='right-wrapper'>{
            Object.keys(userDetails).length === 0 ? (<div>No Saved</div>) : (
                <div className='applicationcard-con'>
                    {
                        userDetails.saved.map((app)=>{
                            return (
                                <ApplicationCard app={app} flag="true"></ApplicationCard>
                            )
                        })
                    }
                </div>
            )
        }</div>

    </div>
  )
}

export default Saved
