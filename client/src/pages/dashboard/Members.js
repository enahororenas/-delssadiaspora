import React, {useState,useEffect} from 'react'
import { SearchContainer,JobsContainer} from '../../components'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import Wrapper from '../../assets/wrappers/Members'

const Members = () => {
  const [backB, setBackB] = useState('');
  const{isLoading} = useAppContext()
  const navigate = useNavigate()
    
  useEffect(() => {
    if(backB === 'move'){navigate('/user')}
  },[backB,navigate])
  
  

  return (
    <Wrapper>
    <button className='btn btn-block homebtn' type='submit' disabled={isLoading} 
     onClick={(e)=> setBackB('move')}>
      {isLoading?<div className='textwait'>Please Wait.....</div>:<FaHome/>}
     </button>
     <SearchContainer/>
     <JobsContainer />
     </Wrapper>
  )
}

export default Members