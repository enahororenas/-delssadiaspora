import { FaLocationArrow, FaBriefcase, FaUser,FaHouseUser } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/Job'
import JobInfo from './JobInfo'

const Job = ({
  fname,
  lname,
  email,
  image,
  location,
  yog,
  id,
  company,
  house,
  position
}) => {

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{fname + ' ' + lname}</div>
        <div className='info'>
          <h5>{email}</h5>
          <p>{yog}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />} text={location} />
          {/*<JobInfo icon={<FaCalendarAlt />} text={date} />*/}
          <JobInfo icon={<FaBriefcase />} text={company} />
          <JobInfo icon={<FaUser />} text={position} />
          <JobInfo icon={<FaHouseUser />} text={house} />
        </div>
      </div>
      <div>
        <img src={image} style={{height:'200px',width:'220px'}}></img>
      </div>
    </Wrapper>
  )
}

export default Job
