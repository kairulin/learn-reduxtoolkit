import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../store/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const handleLogout = () => { 
    dispatch(setLogout())
  };
  const state = useSelector((state) => state.user)

  return (
    <div className='info'>
      <div>
        <p>Name:{state.profile.name}</p>
        <p>Age:{state.profile.age}</p>
        <p>Email:{state.profile.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Login