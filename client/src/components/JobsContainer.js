import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Profilecontainer from './Profilecontainer'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer'

const JobsContainer = () => {
  const {getMembers,members,isLoading,page,search,numOfPages,totalMembers} = useAppContext()

  useEffect(() => {
    getMembers()
  },[page, search])
  
  if (isLoading) {  return <Loading center /> }


  if (totalMembers === 0) {
    return (
      <Wrapper>
        <h2>No member to display...</h2>
      </Wrapper>
    )
  }

//console.log(members)

  return (
    <Wrapper>
      <div className='dashboard-page'>
        <div >
          <h5 style={{textAlign:'center',fontSize:'40px',marginTop:'0'}}>DELSSAA DIASPORA MEMBERS</h5>
        </div>
      <div className='jobs'>
      
      {members.map((member) => { return <Profilecontainer key={member.id} {...member} /> })}
      </div>
      
      {numOfPages > 1 && <PageBtnContainer />}
      </div>
      
    </Wrapper>
  )
}

export default JobsContainer
