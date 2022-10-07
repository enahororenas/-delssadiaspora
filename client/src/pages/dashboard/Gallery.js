import React,{useEffect} from 'react'
import Wrapper from '../../assets/wrappers/Gallery'
import {Gallerynavbar,Slideshow} from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'



const Gallery = () => {
const {getImages,isLoading,urls,getComments,new_comment,imagePage} = useAppContext()

useEffect(()=>{
  getImages()
  getComments()
},[new_comment])

const itemsPerPage = 7
const indexOfLastItem =imagePage * itemsPerPage
const indexOfFirstItem = indexOfLastItem - itemsPerPage
const currentItems = urls.slice(indexOfFirstItem,indexOfLastItem)

if(isLoading){return <Loading center/>}

  return (
    <Wrapper>
        <div className='navcontrol'><Gallerynavbar top='Gallery'/></div>
        
        <div className="imageparent"> 
          {/*{urls.length === 0 && <h1 style={{fontWeight:'bold'}}>No Image Available</h1> }*/}
          {currentItems.length !== 0 && <Slideshow imgs={currentItems}/> } 
       </div>

       
    </Wrapper>
  )
}

export default Gallery