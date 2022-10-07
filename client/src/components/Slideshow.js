import React from 'react'
import Thumbnail from './Thumbnail'
import Wrapper from '../assets/wrappers/Slideshow'
import Comments from './Comment/Comments'
import { useAppContext } from '../context/appContext'
import ImageBtnContainer from './ImageBtnContainer'

const Slideshow = ({ imgs }) => {
    const {commentIndex,updateGlobalIndex,numOfImagePage} = useAppContext()
    
    //console.log('CURRENT GLOBAL INDEX',commentIndex,'====',imgs.length)

    const next = () => {
      if (commentIndex === imgs.length - 1) {
        updateGlobalIndex(0)
      } else {
        updateGlobalIndex(commentIndex + 1)
      }
    }
    const prev = () => {
      if (commentIndex=== 0) {
        updateGlobalIndex(imgs.length - 1)
      } else {
        updateGlobalIndex(commentIndex - 1)
      }
    }
  
    return (
    <Wrapper>
    <div className="slideshow">

      <img className="mainImg" src={imgs[commentIndex]} alt=''/>
    
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <div className='thumbDiv'>
      <Thumbnail arr={imgs}  index={commentIndex} />
      </div>
      
      <div className='pageControl'>
        {numOfImagePage > 1 && <ImageBtnContainer/>}
        </div>
      <div className='lowerBody'>
      <Comments url={imgs[commentIndex]}/>
      </div>
    </div>
      </Wrapper>
    )
  }

export default Slideshow