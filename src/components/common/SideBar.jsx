import React from 'react'
import {RxHamburgerMenu , RxUpdate} from 'react-icons/rx'
import {MdDelete} from  'react-icons/md'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BsJournalCheck} from 'react-icons/bs'
import {PiArchiveBoxFill} from 'react-icons/pi'

const SideBar = () => {

    const location = useLocation();
    const {userDetails} = useSelector( (state)=>(state).profile );

  return (
    <div className='side-bar-con'>
      
        <div className='side-bar'>

            {

               userDetails === null || Object.keys(userDetails).length === 0 ? (<div className='sidetags-con'>

                    <Link className='sidetag' to='/login'> <RxUpdate></RxUpdate> <div>LogIn</div></Link>
                    <Link className='sidetag' to='/signup'> <RxHamburgerMenu></RxHamburgerMenu><div>SignUp</div></Link>


               </div>) : userDetails.role === 'Employer' ? (

                  <div className='sidetags-con'>
                    <Link className={location.pathname === '/candidates' ? 'sidetag activetag' : 'sidetag'} to='/candidates'> <RxHamburgerMenu></RxHamburgerMenu> <div>Candidates</div></Link>
                    <Link className={location.pathname === '/update' ? 'sidetag activetag' : 'sidetag'}  to='/update'> <RxUpdate></RxUpdate><div>Update</div></Link>
                    <Link className={location.pathname === '/delete' ? 'sidetag activetag' : 'sidetag'}  to='/delete'> <MdDelete></MdDelete><div>Delete</div></Link>
                   </div>

                )

                :

                (
                  <div className='sidetags-con'>
                    <Link className={location.pathname === '/applied' ? 'sidetag activetag' : 'sidetag'} to='/applied'> <BsJournalCheck></BsJournalCheck> <div>Applied</div></Link>
                    <Link className={location.pathname === '/saved' ? 'sidetag activetag' : 'sidetag'}  to='/saved'> <PiArchiveBoxFill></PiArchiveBoxFill><div>Saved</div></Link>
                  </div>
                )


            }

            
        </div>

    </div>
  )
}

export default SideBar
