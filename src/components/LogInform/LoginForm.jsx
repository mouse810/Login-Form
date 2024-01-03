import React from 'react';
import './LoginForm.css';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const LoginForm = () => {
  return (
    <div className='login-form'>
      <form action=''>
        <h2>Log-In</h2>
        <div className='input-box'>
          <input type='text' placeholder='username' required />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required />
          <RiLockPasswordFill className='icon' />
        </div>
        <div className='remember-forget'>
          <label>
            <input type='checkbox' /> Remember Me
          </label>
          <a href='#'>Forget Password?</a>
        </div>
        <button>Log In</button>
        {/* <div className='remember-forgot'>
        </div> */}
        <div className='register-link'>
          <p>
            Don't Have Account? <a href='#'>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
