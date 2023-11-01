import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import ApplicationCard from '../../common/ApplicationCard'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Listing = () => {

    const {userDetails} = useSelector( (state)=>(state.profile) );

  return (
    <div className='listing-con'>
      
        <div className='listing-title'>
            <p>Your Listings</p>
            <div className='listing-create'><AiOutlinePlus></AiOutlinePlus><Link className='listing-create-link' to='/createListing'>Create</Link></div>
        </div>

        <div>
            {
                userDetails===null || userDetails.applications === null || userDetails.applications.length === 0 ? (<div>No Listing</div>) :  (<div className='applicationcard-con'>
                    {
                        userDetails.applications.map((app)=>{
                            return(
                                <ApplicationCard app={app} flag='false'></ApplicationCard>
                            )
                        })
                    }
                </div>)
            }
        </div>

    </div>
  )
}

export default Listing
