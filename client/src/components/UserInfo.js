import React from 'react'
import Wrapper from '../assets/wrappers/userProfile'

const UserInfo = ({field,topElement,bottomElement}) => {
  return (
    <Wrapper>
        <header >
            <div className='main-icon22'>{field}</div>
            <div className='info22'>
                <h5>{topElement}</h5>
                <p>{bottomElement}</p>
            </div>
        </header>
    </Wrapper>
  )
}

export default UserInfo