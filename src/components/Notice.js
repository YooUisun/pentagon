import React from 'react';
import { Link } from 'react-router-dom';
import './Notice.css';

function Notice() {
    return (
        <div className="notice-container">
            <h1 className="notice-title">공지사항</h1>
            <Link to="/not-found-page" className="notice-item">펜타곤 웹 페이지 최종 개설</Link>
            <Link to="/not-found-page" className="notice-item">펜타곤 웹 페이지 개인정보 처리방침 개정</Link>
            <Link to="/not-found-page" className="notice-item">펜타곤 웹 페이지 개설</Link>
        </div>
    );
};

export default Notice;