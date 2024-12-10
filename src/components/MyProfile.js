import React from "react";

const MyProfile = ({ onClose }) => {
return (
    <div style={styles.overlay}>
        <div style={styles.modal}>
        <h2>Modal 창</h2>
        <p>여기에 내용을 입력하세요!</p>
        <button onClick={onClose}>닫기</button>
        </div>
    </div>
);
};

const styles = {
overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    },
modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
};

export default MyProfile;