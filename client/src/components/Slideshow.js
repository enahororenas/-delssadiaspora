import React,{useState,useEffect} from 'react'
import Thumbnail from './Thumbnail'
import Wrapper from '../assets/wrappers/Slideshow'
import Comments from './Comment/Comments'
import { useAppContext } from '../context/appContext'

const Slideshow = ({ imgs }) => {
    const {commentIndex,updateGlobalIndex} = useAppContext()
    const [index, setIndex] = useState( commentIndex)

    useEffect(() => {
      setIndex(commentIndex)
    }, []) 
  
    //console.log('CURRENT GLOBAL INDEX',commentIndex,'====',index)

    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
        updateGlobalIndex(0)
      } else {
        setIndex(index + 1)
        updateGlobalIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
        updateGlobalIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
        updateGlobalIndex(index - 1)
      }
    }
  
    return (
    <Wrapper>
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} alt=''/>
      <div className="actions">
        <button onClick={prev}>👈</button>
        <button onClick={next}>👉</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
      <div>
        <Comments url={imgs[index]}/>
      </div>
    </div>
      </Wrapper>
    )
  }

export default Slideshow