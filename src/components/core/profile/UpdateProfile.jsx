import React, { useState } from 'react'
import SideBar from '../../common/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../services/profile'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = () => {

    const {userDetails} = useSelector((state)=>(state.profile));

    const [data,setdata] = useState({
        fname:userDetails.fname,
        lname:userDetails.lname,
        mobileNo:userDetails.additionalInfo.mobileNo,
        gender:userDetails.additionalInfo.gender,
        companyName:userDetails.additionalInfo.companyName,
        collageName:userDetails.additionalInfo.collageName,
        percentage:userDetails.additionalInfo.percentage,
        gYear:userDetails.additionalInfo.gYear,
        about:userDetails.additionalInfo.about,

    })

    const {fname,lname,mobileNo,gender,companyName,collageName,percentage,gYear,about} = data;
    const {token} = useSelector((state)=>(state.auth));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateHandler = ()=>{
        console.log("update")
        dispatch(updateProfile(userDetails._id,token,navigate,data));
    }

    const changeHandler = (event)=>{
        setdata( (prev)=> ({
            ...prev,
            [event.target.name]:event.target.value,
        }) )
    }

    return (
    <div>
      <SideBar flag={true}></SideBar>

      <div className='right-wrapper cl-con'>

            <div className='cl'>

                <div className='first-div unselect'>
                    <div>
                        <label>First Name</label>
                        <input type='text' placeholder='First Name' name='fname' value={fname} ></input>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type='text' placeholder='Last Name' name='lname' value={lname} ></input>
                    </div>
                </div>

                <div className='first-div'>
                    <div>
                        <label>Mobile Number:</label>
                        <input type='text' placeholder='+91 ' name='mobileNo' value={mobileNo} onChange={changeHandler}></input>
                    </div>
                    <div>
                        <label>Gender</label>
                        <input type='text' placeholder='Gender' name='gender' value={gender} onChange={changeHandler}></input>
                    </div>
                </div>

                

                <div className='first-div'>
                    <div>
                        <lable>Collage Name</lable>
                        <input type='collageName' placeholder='Collage' name='collageName' value={collageName} onChange={changeHandler}></input>
                    </div>
                    <div>
                        <label>Graduation Year</label>
                        <input type='text' placeholder='2025' name='gYear' value={gYear} onChange={changeHandler}></input>
                    </div>
                </div>

                <div className='first-div'>
                    <div>
                        <label>Percentage</label>
                        <input type='text' placeholder='75' value={percentage} name='percentage' onChange={changeHandler}></input>
                    </div>
                    <div>
                        <label>Company Name</label>
                        <input type='text' placeholder='eg. TCS' value={companyName} name='companyName' onChange={changeHandler}></input>
                    </div>
                </div>

                

                <div className='jd'>
                    <label>About</label>
                    <textarea type='text' placeholder='Tell about yourself' name='about' value={about} onChange={changeHandler}></textarea>
                </div>

                <div onClick={updateHandler} className='submit-btn'>Update</div>
            </div>

      </div>
    </div>
  )
}

export default UpdateProfile
