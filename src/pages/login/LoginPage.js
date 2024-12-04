import React from 'react';
import '../../assets/LoginPage.css';

function LoginPage(){
    return(
        <div className='loginBox'>
            <form className='formStyle'>
                <label>Email</label>
                <input type="text" className="inputField"></input>                
                <label>Password</label>
                <input type="password" className="inputField"></input>
                <br></br>
                <button className="inputField">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;