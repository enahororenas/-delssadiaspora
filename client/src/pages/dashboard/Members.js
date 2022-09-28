import React, {useState,useEffect} from 'react'
import { SearchContainer,JobsContainer} from '../../components'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'


const Members = () => {
  const [backB, setBackB] = useState('');
  const{isLoading} = useAppContext()
  const navigate = useNavigate()
    
  useEffect(() => {
    if(backB === 'move'){navigate('/user')}
  },[backB,navigate])
  
  

  return (
    <>
    <button className='btn btn-block' type='submit' disabled={isLoading} 
     onClick={(e)=> setBackB('move')} style={{ margin:'20px',height:'60px',width:'fit-content',float:'right'}}>
      {isLoading?'Please Wait.....':'DASHBOARD'}
     </button>
     <SearchContainer/>
     <JobsContainer />
    </>
  )
}

export default Members