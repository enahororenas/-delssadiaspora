import React,{ useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import {Navbar,BigSidebar,SmallSidebar,UserInfo} from '../../components'
import { useAppContext } from '../../context/appContext'
import {FaBirthdayCake} from 'react-icons/fa'


const Dash = () => {
  const {user,getBday,bdays,totalBday} = useAppContext()
  
  useEffect(()=>{
    getBday()
},[]);
  

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

          {totalBday > 0 &&
          <div className='dashbirthday'>
          <h1>Birthday{totalBday > 1 && '\'s'}</h1>
          {bdays.length > 0 && bdays.map((bd, index) => {
            return <div key={index}><FaBirthdayCake/> {bd.fname} {bd.lname}'s birthday is today</div>
            })}
        </div>
        }
        </div>

        
      </main>
    </Wrapper>
  )
}

export default Dash