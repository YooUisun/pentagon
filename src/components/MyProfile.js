import React from 'react';
import './MyProfile.css';

    function MyProfile() {
        return (
            <div className="my-profile-modal">
                <div className="modal-header">
                <h2>My Profile</h2>
            </div>
            <div className="modal-content">
                <p>프로필 내용</p>
                {/* 프로필 정보나 기능을 추가할 공간 */}
            </div>
        </div>
    );
}

export default MyProfile;