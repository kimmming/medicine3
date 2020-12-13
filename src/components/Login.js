import React from 'react';
import './Login.css';
import logo_y from './white_bold.png';


const Login = () => {
    return (
        <div>
            <center>
            <div className="logo">
            <div>
               <img src={logo_y}
               width='300'
               height='150'
               />
            </div>
            </div>
            Login
            </center>
        </div>
    )
}

export default Login;