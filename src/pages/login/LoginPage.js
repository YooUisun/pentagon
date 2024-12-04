import React, { useState } from 'react';

import '../../assets/LoginPage.css';

function LoginPage() {
    let error = function () {
        if (Email == '') {
            alert('이메일을 입력해 주세요.');
            return false; //이메일 비어있으면 로그인진행 막음
        }
        return true; //이메일 있으면 로그인 진행
    };
    let error2 = function () {
        if (Password == '') {
            alert('비밀번호를 입력해 주세요.');
            return false; //비밀번호 비어있으면 로그인진행 막음
        }
        return true;
    };
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");

    let onEmailHandler = (event) => {
        setEmail(event.currentTarget.value); //현재 입력중인 값 Email에 저장
    }
    let onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    let handleLogin = (event) => {
        event.preventDefault(); //폼 제출시 새로고침 방지
        if (Email == '') {
            error();
        } else if (Password == '') {
            error2();
        }        
    };
    return (
        <div className='loginBox'>
            <form className='formStyle'>
                <label>Email</label>
                <input type="text" className="inputField" value={Email} onChange={onEmailHandler}></input>
                <label>Password</label>
                <input type="password" className="inputField" value={Password} onChange={onPasswordHandler}></input>
                <br></br>
                <button className="inputField" onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}
export default LoginPage;