import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [cred, setCred] = useState({
        username: undefined,
        password: undefined
    })

    const navigate = useNavigate();
    const {user, loading, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        setCred((prev)=>({...prev,[e.target.id]: e.target.value}));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try{
            const result = await axios.post('/auth/login',cred);
            dispatch({type: "LOGIN_SUCCESS", payload: result.data});
            navigate('/');
        } catch(err) {
            dispatch({type: "LOGIN_FAIL", payload: err.response.data});
        }
    }

  return (
    <div className='login-container'>
        <h2 className="login-text">USER LOGIN</h2>
        <span className="login-error">{error?.message}</span>
        <input type="text" onChange={handleClick} id='username' name='username' placeholder='Username' />
        <input type="password" onChange={handleClick} id='password' name='password' placeholder='Password' />
        <button onClick={handleSubmit} className="login-btn">LOGIN</button>
    </div>
  )
}

export default Login