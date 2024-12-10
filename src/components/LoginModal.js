import React, { useState } from 'react';
import '../assets/LoginModal.css';


const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    if (!isOpen) return null;  // 모달이 열리지 않으면 아무 것도 렌더링하지 않음

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setErrorMessage(''); // 이메일 변경시 오류 메시지 초기화
        setConfirm(''); // 비밀번호 힌트 초기화
    };
    const handleFindPassword = () => {
        const storedUser = JSON.parse(localStorage.getItem(email));
        const enteredNickname = prompt("닉네임을 입력하세요");
        console.log(storedUser);
        if (storedUser && storedUser.email === email) {
            // 해당 이메일이 로컬스토리지에 존재하는 경우
            if (enteredNickname === storedUser.nickName) {
                // 닉네임이 일치하면 비밀번호를 보여주기
                setConfirm(`비밀번호는: ${storedUser.password}`);
                setErrorMessage('');
            } else {
                // 닉네임이 일치하지 않으면 오류 메시지
                setConfirm('');
                setErrorMessage('닉네임이 일치하지 않습니다.');
            }
        } else {
            // 이메일이 존재하지 않거나 잘못된 경우
            setConfirm('');
            setErrorMessage('해당 이메일에 대한 정보가 없습니다.');
        }
    };
    const handleDeleteAllData = () => {
        // 로컬스토리지 데이터를 모두 삭제
        localStorage.clear();
        alert("회원정보가 삭제되었습니다.");
        onClose(); // 모달 닫기
    };

    const handleFindEmail = () => {
        const storedUser = JSON.parse(localStorage.getItem(email));
        console.log(storedUser)
        if (storedUser && storedUser.email === email) {
            // 해당 이메일이 로컬스토리지에 존재하는 경우
            setConfirm('이메일이 존재합니다');
        } else {
            // 이메일이 존재하지 않거나 잘못된 경우
            setErrorMessage('해당 이메일에 대한 정보가 없습니다.');
        }
    };
    //닫기 버튼 눌렀을때 이메일 상태 초기화
    const handleClose = () => {
        setEmail('');
        setConfirm('');
        setErrorMessage('');
        onClose(); // 부모 컴포넌트에서 전달된 onClose 호출
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
                <div className={`message-container ${(confirm || errorMessage) ? 'show' : ''}`}>
                    <div className={`message ${confirm ? 'confirm' : errorMessage ? 'error' : ''}`}>
                        {confirm && <p>{confirm}</p>} 
                        {/* confirm값이 존재하면 출력 */}
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </div>
                <button onClick={handleFindEmail}>이메일 찾기</button>
                <br></br>
                <button onClick={handleFindPassword}>비밀번호 찾기</button>
                <br></br>
                <button onClick={handleDeleteAllData} style={{ marginTop: '50px' }}>회원정보 전부 삭제</button>
            </div>
            <button onClick={handleClose} style={{ marginBottom: '350px' }}>닫기</button>
        </div>
    );
};

export default LoginModal;