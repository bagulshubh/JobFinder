import React from 'react'
import SideBar from '../../common/SideBar'
import { useSelector } from 'react-redux'
import NotFound from '../error/NotFound';
import CandidateCard from '../../common/CandidateCard';
import { BsCheckLg } from 'react-icons/bs';

const Candidates = (props) => {

  const {currApp} = useSelector((state)=>(state.application));
  const {userDetails} = useSelector((state)=>(state.profile));
  console.log(userDetails._id)
  const socket = props.socket;

  return (
    <div>

        <SideBar></SideBar>

        <div className='right-wrapper'>
            {
              currApp === null ? (<NotFound></NotFound>) : (<div>

                <div>Applied Candidates : {currApp.candidates.length}</div>

                <div>
                  {
                    currApp.candidates.map((candidate)=>{
                      console.log(candidate)
                      return (

                        <div>
                          {
                            userDetails._id === candidate ? (<div>Same</div>) : (<CandidateCard id={candidate} socket={socket}></CandidateCard>)
                          }
                        </div>
                       
                        
                      )
                    }
                      
                    )
                  }
                </div>


              </div>)
            }
        </div>
      
    </div>
  )
}

export default Candidates
