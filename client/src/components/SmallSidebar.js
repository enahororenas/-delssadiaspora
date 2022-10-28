import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import {FaTimes} from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
//import Logo from './Logo'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
    const {showSidebar,toggleSidebar} = useAppContext()
    //console.log('SBB',showSidebar)
  return (
    <Wrapper>
        <div className={showSidebar?'sidebar-container show-sidebar':'sidebar-container'}> 
        <div className='content'>
            
            {/*<header><Logo/></header>*/}
            <div style={{paddingTop:'2rem'}}>
            <button type='button' className='close-btn' onClick={toggleSidebar}><FaTimes/></button>
              <NavLinks toggleSidebar={toggleSidebar}/></div>
            
        </div>
        </div>
    </Wrapper>

  )
}

export default SmallSidebar