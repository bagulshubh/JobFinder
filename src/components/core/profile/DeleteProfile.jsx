import React from 'react'
import SideBar from '../../common/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProfile } from '../../../services/profile';
import { useNavigate } from 'react-router-dom';


const DeleteProfile = () => {

    const dispatch = useDispatch();
    const {userDetails} = useSelector((state)=>(state.profile));
    const {token} = useSelector((state)=>(state.auth));
    const navigate = useNavigate();

    const deleteHandler = ()=>{
        console.log("This is Delete")
        dispatch(deleteProfile(userDetails._id,userDetails.additionalInfo?._id,token,navigate));
    }

  return (
    <div>

        <SideBar flag={true}></SideBar>

        <div className='right-wrapper'>

            <div className='delete-con'>
                <div className='delete-heading'>
                    Are you sure that you want to DELETE your Profile?
                </div>
                <div onClick={deleteHandler} className='submit-btn'>
                    Delete
                </div>
            </div>
            

        </div>
    
    </div>
  )
}

export default DeleteProfile
