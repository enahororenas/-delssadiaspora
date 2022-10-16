import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/GeneralSharedLayout'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'

const GeneralSharedLayout = ({ptext1,ptext2,ptext3,img,top}) => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar top ={top}/>
          <div className='dashboard-page'>
          <Outlet/>
          </div>
          <div className='db1'>
              {img && <img  src={img} alt="..."/>}
            </div> 
            
          <div className='db2'>
          <p className='pwidth'>{ptext1}</p>
          <p className='pwidth'>{ptext2}</p>
          </div> 
          
        </div>
      </main>
    </Wrapper>
    
  )
}

export default GeneralSharedLayout