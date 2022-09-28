import React from 'react'
import Wrapper from '../assets/wrappers/Newsitem'

const Newsitem = ({header,img,article}) => {
  return (
    <Wrapper>
        <div className='dashboard-page'>
            <h2 className='h-center'>{header}</h2>
            <div className='newscont'> 
            {article}
            </div>
            {img && 
            <div className="article-img">
            <img className='liimg' src={img} alt="" />
            </div>
            }  
        </div>
    </Wrapper>
  )
}

export default Newsitem