import React from 'react'
import SideBar from '../../common/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteApp } from '../../../services/applications';

const DeleteApp = () => {

    const {currApp} = useSelector((state)=>(state.application));
    const {token} = useSelector((state)=>(state.auth))
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(currApp._id);

    const deleteHandler = ()=>{
        // There is a error Handle it 
        dispatch(deleteApp(currApp._id,token,navigate));
    }

  return (
    <div>

        <SideBar></SideBar>

        <div className='right-wrapper'>

            <div>
                <div>
                    Are you sure that you want to DELETE this Listing
                </div>
                <div onClick={deleteHandler}>
                    Delete
                </div>
            </div>
            

        </div>
    
    </div>
  )
}

export default DeleteApp
