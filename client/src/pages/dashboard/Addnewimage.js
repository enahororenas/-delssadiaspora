import React, {useState} from 'react'
import { Alert } from '../../components'
import Wrapper from '../../assets/wrappers/GeneralSharedLayout'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { useAppContext } from '../../context/appContext'

const Addnewimage = () => {
  const [selectedFile, setSelectedFile] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const {showAlert,isLoading,displayAlert,customAlert,user,addImage} = useAppContext()

    const clearArray=(e)=>{
      e.preventDefault()
      setSelectedFile([])
      setAllImages([])
    }
    
    const handleFileInputChange = (e) => {
      
      if (e.target.files) {
        if(e.target.files.length > 10){
          customAlert('YOU CAN ONLY UPLOAD A MAXIMUM OF 10')
          return
        }
        
        for(const file of e.target.files) { 
          setSelectedFile(oldArray => [...oldArray, file]);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = () => {   setAllImages(oldArray => [...oldArray,reader.result]) }
          }
      }
    }

      const handleSubmit =(e) => {
        e.preventDefault()
        
        if(!selectedFile){
            displayAlert()
            return
          }
          
          const max = 1*(10**7)
          for(const file of selectedFile) { 
            if(parseInt(file.size) > max) {
            customAlert('IMAGE SIZE TOO BIG!! Image must be < 10mb')
            return
            }
          }  
            
          const image = {
            data:allImages,
            id: user.uid
          }

          addImage({image})
          setSelectedFile([])
          setAllImages([])
      }

  return (
    <Wrapper>
      <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar top ='Add New Image To Gallery'/>
              <div className='dashboard-page'>

    <form className='form' onSubmit={handleSubmit}>
    {showAlert && <Alert/>}
    <div className='form-center'>

        <div className='form-row'>
          <label htmlFor='image' className='form-label'>Add Image to Gallery</label>
          <input type='file' name='image' value={""} onClick={e => (e.target.value = null)} onChange={handleFileInputChange} className='form-input' multiple></input>
        </div>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>  
      <div style={{marginTop:'20px'}}>
      <button className='btn btn-block' disabled={isLoading} onClick={clearArray}>
        {isLoading?'Please Wait.....':'CLEAR'}
      </button>  
      </div>
    </div>
    </form>
             </div>
             {allImages.length !== 0 && (<h3 style={{marginLeft:'20px'}}>Preview</h3>)}
               <div className="parent_div">  
                <div className='child_div'>
               {allImages.length !== 0 && (allImages.map((image) => { 
                   return  <img  src={image} key={image} alt="chosen" className='image' />
                  })
                 )}
                 </div>
              </div>

            </div>
          </main>
    

  </Wrapper>
  
  )
}

export default Addnewimage