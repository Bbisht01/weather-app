import React, {useContext,useState} from 'react'
import { AuthContext } from '../context/AuthContext';
import "./Login.css"
import WeatherInfo from './WeatherInfo';

const Login=()=> {
    const [state,setState]= useState({email:"",password:""})

    const {isAuth,handleLogin} = useContext(AuthContext)
    console.log(isAuth)

    //  console.log(loginData);

    const handleEmail=(e)=>{
        setState({...state,email:e.target.value})

    }
    const handlePassword=(e)=>{
        setState({...state,password:e.target.value})

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
       // console.log(state);
        handleLogin(state.email,state.password)

    }
  return (
      <>
      {!isAuth ? <>  
      
      <form onSubmit={handleSubmit} className="login_form">
      <h1>Login</h1>
          <input placeholder='Enter your email' value={state.email} onChange={handleEmail} />
          <input placeholder='Enter password' value={state.password} onChange={handlePassword}/>
          <input type="submit" value="login" id='btn' />
          
      </form>
    </> : <WeatherInfo/>
    }
    </>
  )
}

export default Login