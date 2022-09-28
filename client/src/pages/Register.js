import React,{ useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterPage'
import { FormRow, Alert } from '../components'
import { useAppContext} from '../context/appContext'

const initialState = {
  fname:'',
  lname:'',
  email:'',
  password:'',
  isMember:true,
}

const Register = () => {
    const [values,setValues] = useState(initialState)
    const {user,isLoading,showAlert,displayAlert,setupUser} = useAppContext()
    const navigate = useNavigate()
  
  const toggleMember =() => {
    //console.log('Toggle clicked')
    setValues({...values,isMember:!values.isMember})
  }
  
    const handleChange =(e) =>{
      setValues({...values,[e.target.name]:e.target.value})
    }
  
    const onSubmit =(e) =>{
      e.preventDefault()
    
      const {fname,lname,email,password,isMember} = values

      if((!fname && !lname && !isMember) || !email || !password){
        //console.log('NOT A MEMBER')
        displayAlert()
        return
      } 
      if (!isMember && (fname === '' || lname === '' || email === '' || password === '')) {
        displayAlert()
        return
      }
      
      const currentUser = {fname,lname,email,password}
      if (isMember){
        setupUser({currentUser,endPoint:'login',alertText:'Login sccessfully. Redirecting to Dashboard!'})
      } else {
       setupUser({currentUser,endPoint:'register',alertText:'User sccessfully created. Redirecting to Dashboard!'})
      }    
    }
  
    useEffect(() => {
      //console.log('USE EFFECT',user)
      if(user){setTimeout(() => {navigate('/user')},1000)}
    },[user,navigate])
  

    return (
      <Wrapper className='full-page'>
          <form className='form' onSubmit={onSubmit}>
          
          <h3>{values.isMember ? 'LOGIN' : 'REGISTER'}</h3>
          
            {showAlert && <Alert/>} 

        {!values.isMember &&
        <FormRow
        type='text'
        name='fname'
        labelText = 'First Name'
        value={values.fname}
        handleChange={handleChange}
        ></FormRow>
        }

        {!values.isMember &&
        <FormRow
        type='text'
        name='lname'
        labelText = 'Last Name'
        value={values.lname}
        handleChange={handleChange}
        ></FormRow>
        }
          
        <FormRow
        type='email'
        name='email'
        value={values.email}
        handleChange={handleChange}
        ></FormRow>

        <FormRow
        type='password'
        name='password'
        value={values.password}
        handleChange={handleChange}
        ></FormRow>  
    
        <button type='submit' className='btn btn-block' disabled={isLoading}>SUBMIT</button>
        
        <p>
        {values.isMember ? 'Not a member yet?':'Already a member?'}
        <button type="button" onClick={toggleMember} className="member-btn">
          {values.isMember ? 'Register':'Login'}
          </button>
        </p>
          
        </form>
        <div>
            <footer style={{bottom:'0',position:'fixed'}}>© EE 2022</footer>
          </div>
      </Wrapper>
    )

  }
  
  export default Register