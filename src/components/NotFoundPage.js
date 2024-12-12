import React from "react";
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="nf-container">
            <h1 className="nf-header">이 페이지는 구현중입니다</h1>
            <p className="nf-message">This page is being implemented</p>
            <a href="/" className="nf-link">
            Go Back Home
            </a>
        </div>
    )
}

export default NotFoundPage;