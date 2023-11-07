import {React , useState} from 'react'
import SideBar from '../../common/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { updateApp } from '../../../services/applications'
import { useNavigate } from 'react-router-dom'

const UpdateApp = () => {

    const {currApp} = useSelector((state)=>(state.application));

    const [data,setdata] = useState({
        id:"",
        title:currApp.title,
        company:currApp.company,
        jobDescription:currApp.jobDescription,
        salary:currApp.salary,
        status:currApp.status,
        location:currApp.location,
        exp:currApp.exp,
        catagory: currApp.catagory.join(","),
        conditions: currApp.catagory.join(","),
       
    })

    const {title,company,jobDescription,salary,status,location,exp,catagory,conditions} = data;
    const {token} = useSelector( (state)=>(state.auth) )
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const changeHandler = (event) =>{

        setdata( (prev)=> ({
            ...prev,
            [event.target.name]:event.target.value,
        }) )
        
    }

    const updateHandler = ()=>{
        console.log(data);
        console.log("update");
        console.log(currApp._id);
        data.id = currApp._id;

        const catarr = data.catagory.split(',');
        const conarr = data.conditions.split(',');

        data.catagory = catarr;
        data.conditions = conarr;

        dispatch(updateApp(data,token,navigate));
        // window.location.reload(false);
    }


  return (
    <div>
        <SideBar></SideBar>

        <div className='right-wrapper cl-con'>

        <div className='cl'>

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

            <div onClick={updateHandler} className='submit-btn'>Update</div>

            </div>
        </div>


    </div>
  )
}

export default UpdateApp
