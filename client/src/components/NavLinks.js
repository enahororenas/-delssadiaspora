import React from 'react'
import links from '../utils/links'
import adminlinks from '../utils/adminlinks'
import { NavLink } from 'react-router-dom'

import { useAppContext } from '../context/appContext'

const NavLinks = ({toggleSidebar}) => {
  const{user} = useAppContext()
  
  return (
    <div className='nav-links'>
        {!user.admin && links.map((link) => {
            const{text,path,id,icon} = link          
            return(
                <NavLink
                
                to={path}
                key={id}
                onClick={toggleSidebar}
                className = {({isActive}) => isActive?'nav-link active':'nav-link'}
                >
                    <span className='icon'>{icon}</span>
                    {text}
                </NavLink>
            )
        })}

        {user.admin && adminlinks.map((link) => {
            const{text,path,id,icon} = link          
            return(
                <NavLink
                
                to={path}
                key={id}
                onClick={toggleSidebar}
                className = {({isActive}) => isActive?'nav-link active':'nav-link'}
                >
                    <span className='icon'>{icon}</span>
                    {text}
                </NavLink>
            )
        })}

    </div>
  )
}

export default NavLinks