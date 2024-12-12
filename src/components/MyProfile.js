import React from 'react';
import './MyProfile.css';

function MyProfile() {
    
    return (
        <div className="my-profile-modal">
            <div className="modal-header">
                <h2 style={{ fontSize: '24px' }}>닉네임님, 환영합니다!</h2>
            </div>
            <div className="modal-content">
                <p>내 프로필 Modal 구현중...</p>
                <p>이곳에 내 정보가 표시됩니다.</p>
            </div>
        </div>
    );
}

export default MyProfile;