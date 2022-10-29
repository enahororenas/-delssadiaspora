import { useAppContext } from '../context/appContext'
import { useEffect } from 'react'
import Loading from './Loading'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer'
import Membercontainer from './Membercontainer'

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
          <h5 className='members_number'>DELSSAA DIASPORA MEMBERS ({totalMembers})</h5>
        </div>
      <div className='jobs'>
      
      {members.map((member) => { return <Membercontainer key={member.id} {...member} /> })}
      </div>
      
      {numOfPages > 1 && <PageBtnContainer />}
      </div>
      
    </Wrapper>
  )
}

export default JobsContainer
