import React, { useState } from 'react';
import '../assets/LoginModal.css';


const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [passwordHint, setPasswordHint] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;  // 모달이 열리지 않으면 아무 것도 렌더링하지 않음

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage(''); // 이메일 변경시 오류 메시지 초기화
        setPasswordHint(''); // 비밀번호 힌트 초기화
    };
    const handleFindPassword = () => {
        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.email === email) {
            // 해당 이메일이 로컬스토리지에 존재하는 경우
            setPasswordHint(`비밀번호는: ${storedUser.password}`);
        } else {
            // 이메일이 존재하지 않거나 잘못된 경우
            setErrorMessage('해당 이메일에 대한 정보가 없습니다.');
        }
    };
    const handleDeleteAllData = () => {
        // 로컬스토리지 데이터를 모두 삭제
        localStorage.clear();
        alert("회원정보가 삭제되었습니다.");
        onClose(); // 모달 닫기
    };
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>이메일/비밀번호 찾기</h2>
                <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    value={email}
                    onChange={handleEmailChange}
                />                
                {passwordHint && <p>{passwordHint}</p>}  {/* 비밀번호 힌트 표시 */}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}  {/* 오류 메시지 표시 */}
                <button onClick={handleFindPassword}>비밀번호 찾기</button>
                <br></br>
                <button onClick={onClose}>닫기</button>
                <br></br>
                
                <button onClick={handleDeleteAllData}>회원정보 전부 삭제</button>
            </div>
        </div>
    );
};

export default LoginModal;