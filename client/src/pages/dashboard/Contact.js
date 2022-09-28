import React,{useState} from 'react'
import Wrapper from '../../assets/wrappers/GeneralSharedLayout'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { FormRow,Alert } from '../../components'
import { useAppContext } from '../../context/appContext'

const initialState = {
    fname:'',
    lname:'',
    email:'',
    message:'',
  }

const Contact = () => {
    const [values,setValues] = useState(initialState)
    const {showAlert,displayAlert,isLoading,sendEmail} = useAppContext()
  
    const handleChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value})
    }
  
    const reset = (e)=> {
      e.preventDefault()
      setValues({ ...initialState })
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        const {fname,lname,email,message} = values
        
         if(!email||!fname||!lname||!message||message.length>200){
            displayAlert()
            return
          }

         sendEmail({ fname,lname, email, message })
         setValues({ ...initialState })
    }

  return (
        <Wrapper>
          <main className='dashboard'>
            <SmallSidebar/>
            <BigSidebar/>
            <div>
              <Navbar top ='Contact Us'/>
              <div className='dashboard-page'>
              

              <form className='form' onSubmit={handleSubmit}>
                {showAlert && <Alert/>}
                    <div className='form-center'>
                        <FormRow type='text' labelText='First Name' name='fname' value={values.fname} 
                            handleChange={handleChange}/>
        
                        <FormRow type='text' labelText='Last Name' name='lname' value={values.lname} 
                            handleChange={handleChange}/>

                        <FormRow type='email' name='email' value={values.email} 
                            handleChange={handleChange}/>

        <p>Message must be 500 characters or less</p>
        <div>
        
        <textarea style={{width: '100%',maxWidth: '100%',height:'100px', fontFamily:'Sans-Serif,cabin',fontSize:'0.875rem'  }}
            placeholder="Start typing..."
            name="message"
            value={values.message} 
            onChange={handleChange}
        />
      </div>

        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>

       <div style={{marginTop:'20px'}}>
       <button className='btn btn-block' disabled={isLoading} onClick={reset}>Reset</button>
        </div> 
      

      </div>
      </form>
              </div>
            </div>
          </main>
        </Wrapper>
    
    
  )
}

export default Contact