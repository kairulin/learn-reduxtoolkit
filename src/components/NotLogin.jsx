import React,{useRef} from 'react'
import { useDispatch } from 'react-redux';
import { setLogin } from '../store/userSlice';

const NotLogin = () => {
    const dispatch = useDispatch();

    const nameRef = useRef();
    const ageRef = useRef();
    const emailRef = useRef();

    const handleLogin = () => {
        const nameValue = nameRef.current.value;
        const ageValue = ageRef.current.value;
        const emailValue = emailRef.current.value;
        dispatch(setLogin({
              name:nameValue,
            age:ageValue,
            email:emailValue      
         }
          
        ));
     };

    return (
        <div className='login'>
            <h1 className='title'>登入</h1>
            <div>
                <label htmlFor="name">Nmae:</label>
                <input type="text" placeholder='name' ref={nameRef}/>

                <label htmlFor="age">Age:</label>
                <input type="text" placeholder='age' ref={ageRef}/>

                <label htmlFor="email">Email:</label>
                <input type="text" placeholder='email' ref={emailRef}/>
                <button onClick={handleLogin}>Logout</button>
            </div>

        </div>
    )
}

export default NotLogin