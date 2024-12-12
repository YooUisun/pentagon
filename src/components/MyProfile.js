import React, { useState, useEffect } from 'react';
import './MyProfile.css';

function MyProfile() {
    
    // localStorage에 user 객체를 JSON 문자열로 저장

    return (
        <div className="my-profile-modal">
            <div className="modal-header">
                <h2>내 프로필</h2>
            </div>
            <div className="modal-content">
                <div className="profile-info">

                </div>
            </div>
        </div>
    );
}

export default MyProfile;