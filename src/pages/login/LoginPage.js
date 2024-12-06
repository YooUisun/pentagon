import React, { useState } from 'react';
import '../../assets/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../../components/LoginModal';

function LoginPage() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [emailError, setEmailError] = useState("");
    let [passwordError, setPasswordError] = useState("");
    let navigate = useNavigate();

    //이메일 유효성 검증
    function isValidEmail(str) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co)$/.test(str);
    }
    //비밀번호 유효성 검증
    function strongPassword(str) {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
    }
    let onEmailHandler = (event) => {
        setEmail(event.currentTarget.value); //현재 입력중인 값 Email에 저장
        setEmailError(''); //이메일 입력시 오류메시지 초기화
    }
    let onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value); //현재 입력중인 값 Password에 저장
        setPasswordError(''); //비밀번호 입력시 오류메시지 초기화
    }
    let handleLogin = (event) => {
        event.preventDefault();  //폼 제출시 새로고침 방지
        let valid = true;
        window.scrollTo(0, 0);
        if (email.trim() != '' && password.trim() != '') {
            if (!isValidEmail(email)) {
                setEmailError("이메일 형식이 올바르지 않습니다.");
                valid = false;  // 이메일 유효성 검사 실패
            } else {
                setEmailError(""); // 이메일이 유효하면 오류 메시지 제거
            }

            // 비밀번호 유효성 검사
            if (!strongPassword(password)) {
                setPasswordError("비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.");
                valid = false;  // 비밀번호 유효성 검사 실패
            } else {
                setPasswordError(""); // 비밀번호가 유효하면 오류 메시지 제거
            }

            // 이메일과 비밀번호가 맞는지 확인
            if (valid) {
                let storedUser = JSON.parse(localStorage.getItem(email));
                //getItem은 로컬스토리지에 저장된 값 가져오는 메서드(key입력)
                //JSON.parse는 가져온 JSON문자열을 자바스크립트 객체로 변환하는 메서드
                if (storedUser && storedUser.email === email && storedUser.password === password) {
                    //조건에 storedUser 넣는 이유 = null,undefined 방지
                    // 로그인 성공
                    alert("로그인 성공!");
                    setEmail('');
                    setPassword('');
                    navigate('/'); // 홈 화면으로 이동
                } else {
                    // 로그인 실패                    
                    alert('로그인 정보가 없습니다');
                }
            }
        } else if (email == '') {
            alert('이메일을 입력하세요');
        } else if (password == '') {
            alert('비밀번호를 입력하세요');
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='loginBox'>
            <form className='loginStyle'>
                <div className='loginInfo'>
                    <label>Email</label><span className='findInfo' onClick={openModal}>이메일/비밀번호 찾기</span>
                </div>
                <input
                    type="text"
                    className="inputField"
                    value={email}
                    onChange={onEmailHandler}
                />
                {emailError && <div className="error-message">{emailError}</div>}

                <label>Password</label>
                <input
                    type="password"
                    className="inputField"
                    value={password}
                    onChange={onPasswordHandler}
                />
                {passwordError && <div className="error-message">{passwordError}</div>}
                <br></br>
                <button className="inputField" onClick={handleLogin}>Login</button>
            </form>
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )
}
export default LoginPage;