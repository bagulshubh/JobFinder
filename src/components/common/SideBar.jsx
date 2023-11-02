import React from 'react'
import {RxHamburgerMenu , RxUpdate} from 'react-icons/rx'
import {MdDelete} from  'react-icons/md'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SideBar = () => {

    const location = useLocation();

  return (
    <div className='side-bar-con'>
      
        <div className='side-bar'>
            <div className='sidetags-con'>
                <Link className={location.pathname === '/candidates' ? 'sidetag activetag' : 'sidetag'} to='/candidates'> <RxHamburgerMenu></RxHamburgerMenu> <div>Candidates</div></Link>
                <Link className={location.pathname === '/update' ? 'sidetag activetag' : 'sidetag'}  to='/update'> <RxUpdate></RxUpdate><div>Update</div></Link>
                <Link className={location.pathname === '/delete' ? 'sidetag activetag' : 'sidetag'}  to='/delete'> <MdDelete></MdDelete><div>Delete</div></Link>
            </div>
        </div>

    </div>
  )
}

export default SideBar
