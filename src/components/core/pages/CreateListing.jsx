import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createApplication } from '../../../services/applications';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../common/SideBar';

const CreateListing = () => {

    const [data,setdata] = useState({
        title:"",
        company:"",
        jobDescription:"",
        salary:"",
        status:"",
        location:"",
        exp:"",
        catagory:"",
        conditions:"",
    })

    const {title,company,jobDescription,salary,status,location,exp,catagory,conditions} = data;
    const {token} = useSelector( (state)=>(state.auth) )

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeHandler = (event) =>{

        setdata( (prev)=> ({
            ...prev,
            [event.target.name]:event.target.value,
        }) )
        
    }

    const submintHandler = ()=>{
        
        const catarr = data.catagory.split(',');
        const conarr = data.conditions.split(',');

        data.catagory = catarr;
        data.conditions = conarr;

        console.log(data);

        dispatch(createApplication(data,navigate,token));

    }

    return (
    <div className='cl-con'>

        <SideBar flag={true}></SideBar>

        <div className='cl right-wrapper'>

            <div className='first-div'>

                <div>
                    <label>Job Title</label>
                    <input type='text' placeholder='eg. Developer' value={title} name='title' onChange={changeHandler}></input>
                </div>

                <div>
                    <label>Company</label>
                    <input type='text' placeholder='eg. Google' value={company} onChange={changeHandler} name='company'></input>
                </div>

            </div>


             <div className='first-div'>

                <div>
                    <label>Location</label>
                    <input type='text' placeholder='eg. Pune' value={location} onChange={changeHandler} name='location' ></input>
                </div>

                <div>
                    <label>Salary</label>
                    <input type='text' placeholder='eg. 7,00,000' onChange={changeHandler} value={salary} name='salary'></input>
                </div>

            </div>

            <div className='first-div'>

                <div>
                    <label>Experience</label>
                    <input type='text' placeholder='eg. 2 years' value={exp} onChange={changeHandler} name='exp'></input>
                </div>

                <div>
                    <label>Catagory</label>
                    <input type='text' placeholder='eg. Fullstack' value={catagory} name='catagory' onChange={changeHandler}></input>
                </div>

            </div>

            <div className='conditions'>
                <label>Conditions</label>
                <input type='text' placeholder='eg. Good English' value={conditions} name='conditions' onChange={changeHandler}></input>
            </div>


            <div className='jd'>
                <label>Job Description</label>
                <textarea type='text' placeholder='Enter Job Description' value={jobDescription} onChange={changeHandler} name='jobDescription'></textarea>
            </div>

            <div className='radio-con'>
                <div>
                    <input type='radio' name='status' id='Open' value="Open" onClick={changeHandler}></input>
                    <label for='Open'>Open</label>
                </div>
                <div>
                    <input type='radio' name='status' id='Close' value
                    ='Close' onClick={changeHandler}></input>
                    <label for='Close'>Close</label>
                </div>
            </div>

            <div onClick={submintHandler} className='submit-btn'>Create</div>


        </div>

    </div>
  )
}

export default CreateListing
