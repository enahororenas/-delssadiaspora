import React from 'react'
import Wrapper from '../assets/wrappers/Profilecontainer'
import JobInfo from './JobInfo'
import { FaLocationArrow, FaBriefcase,FaHouseUser,FaCalendar } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Profilecontainer = ({fname,lname,email,image,location,yog,occupation,house}) => {
  const name = fname + ' ' + lname  
  return (
    <Wrapper>
        <div className="content">
            <div className="card">
                <div className="firstinfo"><img src={image} alt='...'/>
                    <div className="profileinfo">
                        <h1>{name}</h1>
                        <JobInfo icon={<MdEmail />} text={email} />    
                        <div className='profiledetails'>
                        <JobInfo icon={<FaCalendar />} text={yog} />
                        <JobInfo icon={<FaLocationArrow />} text={location} />
                        <JobInfo icon={<FaHouseUser />} text={house} />
                        <JobInfo icon={<FaBriefcase />} text={occupation} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>    
        )
    }

export default Profilecontainer