import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import {Navbar,BigSidebar,SmallSidebar,UserInfo} from '../../components'
import { useAppContext } from '../../context/appContext'


const Dash = () => {
  const {user} = useAppContext()
  
  return (  
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar top='Dashboard'/>
          <div className='dashboard-page'>
          <Outlet/>
          </div>

          <div className='db1'>        
           <img src={user.image} alt='DELSSA' className='card'></img>
          </div>
          <UserInfo field='Favorite Teacher' topElement={user.teacher} bottomElement={user.subject}/>
          <UserInfo field='Occupation' topElement={user.occupation} bottomElement={user.location}/>
          <UserInfo field='Class' topElement={user.yog} bottomElement={user.house}/>
        </div>
      </main>
    </Wrapper>
  )
}

export default Dash