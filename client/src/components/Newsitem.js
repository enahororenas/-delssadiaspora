import React from 'react'
import Wrapper from '../assets/wrappers/Newsitem'

const Newsitem = ({header,img,article}) => {
  return (
    <Wrapper>
        
{img && 
<div className='divwrapper'> 
<img className='imgbdy' src={img} alt="" />
<h2 className='h-center'>{header}</h2>
<p className='par'>{article}</p>
</div> 
}
  
{!img && 
<div className='divwrapper2'> 
<h2 className='h-center'>{header}</h2>
<p className='par'>{article}</p>
</div> 
}

    </Wrapper>
  )
}

export default Newsitem