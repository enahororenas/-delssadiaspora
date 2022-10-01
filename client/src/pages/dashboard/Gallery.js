import React,{useEffect} from 'react'
import Wrapper from '../../assets/wrappers/Gallery'
import {Gallerynavbar,Slideshow} from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'


const Gallery = () => {
const {getImages,isLoading,urls} = useAppContext()

useEffect(()=>{
  getImages()
},[])


if(isLoading){return <Loading center/>}

  return (
    <Wrapper>
        <div className='navcontrol'><Gallerynavbar top='Gallery'/></div>
        <div className="imageparent">
          
          {urls.length !== 0 && <Slideshow imgs={urls}/> } 
          {urls.length === 0 && <h1 style={{fontWeight:'bold'}}>No Image Available</h1> }
          
       </div>
    </Wrapper>
  )
}

export default Gallery