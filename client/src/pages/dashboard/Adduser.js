import React,{ useState } from 'react'
import { FormRow,Alert } from '../../components'
import Wrapper from '../../assets/wrappers/Adduser'
import {Navbar,BigSidebar,SmallSidebar} from '../../components'
import { useAppContext} from '../../context/appContext'

const Adduser = () => {
      const initialState = {
          fname:'',
          lname:'',
          email:'',
          addToDB:true,
        }

    const [values,setValues] = useState(initialState)
    const {isLoading,showAlert,displayAlert,addNewUserToDB,makeAUserAdmin} = useAppContext()

    const toggleMember =() => {setValues({...values,addToDB:!values.addToDB}) }
    const handleChange =(e) =>{ setValues({...values,[e.target.name]:e.target.value})}

    const handleSubmit =(e) => {
      e.preventDefault()
      const {fname,lname,email,addToDB} = values
      if(addToDB && (!email||!fname||!lname)){
        displayAlert()
        return
      }
      if(!addToDB && !email){
        displayAlert()
        return
      }
      
      if(addToDB){
        addNewUserToDB({ fname,lname, email })
      } else {
        makeAUserAdmin({email})
      }
      setValues({...values,fname:'',lname:'',email:''})
    }

  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar top={values.addToDB ? 'Add New User to DB':'Make A User Admin'}/>
          <div >
          </div>
          <div className='btncover'>
          
            <button type="button" onClick={toggleMember} className="btn btnpos btntoggle" >
          {values.addToDB ? 'Make Admin':'Add new user'}
          </button>
          
            
        
        </div>

      <div className='form-center'>
        <form className='form' onSubmit={handleSubmit}>
            {showAlert && <Alert/>}
            

      <div className='form-center'>
      {values.addToDB &&
        <FormRow type='text' labelText='First Name' name='fname' value={values.fname} 
        handleChange={handleChange}/>
      }
      {values.addToDB &&
        <FormRow type='text' labelText='Last Name' name='lname' value={values.lname} 
        handleChange={handleChange}/>
      }  

        <FormRow type='email' name='email' value={values.email} 
        handleChange={handleChange}/>
        
        <button className='btn btn-block' type='submit' disabled={isLoading}>
          {isLoading?'Please Wait.....':'SUBMIT'}
        </button>
      </div>
      </form>
      </div>

        </div>
      </main>
    </Wrapper>
    
  )
}

export default Adduser