import React from "react";
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className="nf-container">
            <h1 className="nf-header">404 not found</h1>
            <p className="nf-message">Oops! The page you are looking for does not exist.</p>
            <a href="/" className="nf-link">
            Go Back Home
            </a>
        </div>
    )
}

export default NotFoundPage;