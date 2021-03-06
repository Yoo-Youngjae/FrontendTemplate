import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div className='form-container'>
                <div className='t-center mt-5 page-title'>Login</div>
                <div className='d-flex mt-5 d-v-center'>
                    <div className='w-20'></div>
                    <div className='w-20'>ID</div>
                    <input className='w-30 input-1'/>
                </div>
                <div className='d-flex mt-4 d-v-center'>
                    <div className='w-20'></div>
                    <div className='w-20'>Password</div>
                    <input className='w-30 input-1' type="password"/>
                </div>
                <div className='t-center mt-4 d-flex'>
                    <div className='w-30'></div>
                    <button className='w-40 button-blue'><Link to='/'> Login</Link></button>
                    <div className='w-30'></div>
                </div>
                <div className='d-flex mt-3'>
                    <div className='w-30'></div>
                    <div className='w-20'>Forget ID?</div>
                    <button className='w-20 button-white'>Find ID</button>
                </div>
                <div className='d-flex mt-3'>
                    <div className='w-30'></div>
                    <div className='w-20'>Don't have ID yet?</div>
                    <button className='w-20 button-white'><Link to='signup'>Signup</Link></button>
                </div>
            </div>
        )
    }
}
export default Login;