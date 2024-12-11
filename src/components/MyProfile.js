import React, { useState, useEffect } from 'react';
import './MyProfile.css';

function MyProfile() {
    
    // localStorage에 user 객체를 JSON 문자열로 저장
    localStorage.setItem('user', JSON.stringify(user));

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
        console.log(storedUser.email); // 저장된 이메일 출력
        console.log(storedUser.nickName); // 저장된 닉네임 출력
        console.log(storedUser.phone); // 저장된 전화번호 출력
        console.log(storedUser.birthdate.year, storedUser.birthdate.month, storedUser.birthdate.day); // 저장된 생년월일 출력
    }

    return (
        <div className="my-profile-modal">
            <div className="modal-header">
                <h2>내 프로필</h2>
                <p><strong>닉네임:</strong> {user.nickName}</p>
            </div>
            <div className="modal-content">
                <div className="profile-info">

                    <p><strong>전화번호:</strong> {user.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;