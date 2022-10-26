import React from 'react'
import Wrapper from '../assets/wrappers/Membercontainer'
import JobInfo from './JobInfo'
import { FaLocationArrow, FaBriefcase,FaHouseUser,FaCalendar } from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import { Fade } from "react-awesome-reveal";

const Membercontainer = ({fname,lname,email,image,location,yog,occupation,house}) => {
  const name = fname + ' ' + lname  
  return (
    <Wrapper>
        
    <div>
    <Fade bottom>
        <div className="content">
            <div className='team-members-item image-container'>
                <img src={image} alt=''/>
            </div>
        
        <div className='lower'>
            <h3 className="username">{name}</h3>
           <div className='remain'>
                <div className='details'>
                    <p className='text'><MdEmail />&emsp;{email}</p>
                    
                    <p className='text'><FaCalendar/>&emsp;{yog}</p>
                    <p className='text'><FaLocationArrow />&emsp;{location}</p>
                    <p className='text'><FaHouseUser />&emsp; {house}</p>
                    <p className='text'><FaBriefcase />&emsp;{occupation}</p>

                    {/*<JobInfo icon={<FaBriefcase />} text={occupation} />*/}
                    
            </div>
            </div> 
        </div>        
        
                
            </div>
        </Fade>
      </div>


    {/*    <div className="content">
            <div className="card">
                <div className="firstinfo"><img src={image} alt='...'/>
                    <div className="profileinfo">
                        <h1>{name}</h1>
                        
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
  */}
        </Wrapper>    
        )
    }

export default Membercontainer