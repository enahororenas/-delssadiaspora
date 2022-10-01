import React,{useState} from 'react'
import Wrapper from '../assets/wrappers/Navbar'
import {FaHome,FaUserCircle,FaCaretDown} from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'


const Gallerynavbar = ({top}) => {
    const {toggleSidebar,logoutUser,user} = useAppContext()
    const [showLogout,setShowLogout] = useState(false)
    const navigate = useNavigate()
  return (
    <Wrapper>
        <div className='nav-center'>
            <button
            type='button'
            className='toggle-btn'
            onClick={()=>navigate('/user')}
            >
            <FaHome/>
            </button>
            <div>
                {/*<Logo/>}*/}
                <h3 className='logo-text'>{top}</h3>
            </div>
            <div className='btn-container'>
            <button
            className='btn'
            onClick={()=>setShowLogout(!showLogout)}
            >
            <FaUserCircle/>
            {user?.lname + ' '+user?.fname}
            <FaCaretDown/>
            </button>
            <div className={showLogout?'dropdown show-dropdown':'dropdown'}> 
                <button
                type='button'
                className='dropdown-btn'
                onClick={()=>logoutUser()}
                >
                logout
                </button>
            </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Gallerynavbar