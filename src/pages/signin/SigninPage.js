import React, { useState } from 'react';
import '../../assets/SigninPage.css';

function SigninPage() {
    return (
        <div className='signContainer'>
            <div className='signinBox'>
                <h1>회원가입</h1>
                <form className='formStyle'>
                    <br></br>
                    <h3>기본정보</h3>
                    <label>Email</label>
                    <input type="text" className="inputField" placeholder='Email'></input>
                    <label>Password</label>
                    <input type="password" className="inputField" placeholder='password'></input>
                    <label>Password 확인</label>
                    <input type="password" className="inputField" placeholder='password 확인'></input>
                    <br></br>
                    <h3>닉네임</h3>
                    <input type="text" className="inputField" placeholder='닉네임'></input>

                    <br></br>
                    <h3>전화번호</h3>
                    <div className='phone'>
                        <select>
                            <option selected>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                        </select><input type="text" className="inputField" placeholder='휴대폰번호를 입력해주세요'></input>
                    </div>                    
                    <br></br>
                    <h3>생일</h3>
                    <input type="text" className="inputField" placeholder=''></input>
                    <br></br>
                    <button className="inputField">Signin</button>
                </form>
            </div>
        </div>
    )
}

export default SigninPage;