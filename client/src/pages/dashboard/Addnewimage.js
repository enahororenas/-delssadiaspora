import React, {useState} from 'react'
import { FormRow,Alert } from '../../components'
//import Wrapper from '../../assets/wrappers/DashboardFormPage'
import Wrapper from '../../assets/wrappers/GeneralSharedLayout'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { useAppContext } from '../../context/appContext'

const Addnewimage = () => {

    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const {showAlert,isLoading,displayAlert,customAlert,user,addImage} = useAppContext()
    
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        if(file){
        reader.readAsDataURL(file);
        reader.onloadend = () => { 
          setPreviewSource(reader.result)  
        }
      }
    }
    
      const handleSubmit =(e) => {
        e.preventDefault()
        //console.log('submit button clicked',previewSource)

        if(!selectedFile){
            displayAlert()
            return
          }
          
          const max = 1*(10**7)
          
          if(parseInt(selectedFile.size) > max) {
            customAlert('IMAGE SIZE TOO BIG!! Image must be < 10mb')
            return
          }
      
          const image = {
            data:previewSource,
            id: user.uid
          }
      
          addImage({image})
          setSelectedFile(null)
          setPreviewSource(null)
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


      <FormRow type='file' name='image' labelText='Add Image to Gallery' 
      handleChange={handleFileInputChange}
      />

         <button className='btn btn-block' type='submit' disabled={isLoading}>
        {isLoading?'Please Wait.....':'SUBMIT'}
      </button>  

      {previewSource && (
              <img
                  src={previewSource}
                  alt="chosen"
                  style={{ height: '100%' ,marginTop:'30px', width:'100%'}}
              />
          )} 

    </div>
    </form>
             </div>
            </div>
          </main>
    

  </Wrapper>
  
  )
}

export default Addnewimage