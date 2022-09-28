import React,{useEffect} from 'react'
import Wrapper from '../../assets/wrappers/Gallery'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'
//import NoJobsWrapper from '../../assets/wrappers/JobsContainer'

const Gallery = () => {
const {getImages,isLoading,urls} = useAppContext()

useEffect(()=>{
  getImages()
},[])



if(isLoading){return <Loading center/>}
// /<Outlet/>
  return (
    <Wrapper>
        <div className='navcontrol'><Navbar top='Gallery'/></div>
          <div className='gcontainer'>
         <div><SmallSidebar/>
          <BigSidebar/>  </div>
            
          <div className='subgcontainer'>
              {urls.length !== 0 &&
                urls.map((imageUrl, index) => { 
                  return  (
                   <div key={index}>
                    <img className='galleryimg' key={index} src={imageUrl} alt='...'></img>
                    </div>
                      )
                    })} 
              </div>
              {urls.length === 0 && <h1 style={{fontWeight:'bold'}}>No Image Available</h1> }                
         </div>
      
      
    </Wrapper>
  )
}

export default Gallery