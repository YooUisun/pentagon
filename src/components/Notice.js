import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Notice.css';

function Notice() {
    const [activeKey, setActiveKey] = useState('first');
    const navigate = useNavigate();

    const handleSelect=(key)=>{
        setActiveKey(key);
    };

    const handleDivClick=(path)=>{
        navigate(path); //클릭 시 경로 이동
    }

    return (
        <div className="notice-container">
            <h1 className="notice-title">공지사항</h1>
            <Tab.Container id="notice-tabs" activeKey={activeKey} onSelect={handleSelect}>
            <div id="notice-nav">
                <div className={`notice-content ${activeKey === 'first' ? 'select-content' : ''}`} 
                onClick={() => handleSelect('first')}>
                    <p className='notice-check'>공지</p>
                </div>
                <div className={`notice-content ${activeKey === 'second' ? 'select-content' : ''}`} 
                onClick={() => handleSelect('second')}>
                    <p className='notice-check'>점검</p>
                </div>
                <div className={`notice-content ${activeKey === 'third' ? 'select-content' : ''}`} 
                onClick={() => handleSelect('third')}>
                    <p className='notice-check'>회사소식</p>
                </div>
            </div>

            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <div className="notice-list" >
                        <p className="notice-list-text" onClick={()=>handleDivClick('/')}>펜타곤 웹 페이지 최종 개설</p>
                        <p className="notice-list-date">2024.12.12</p>
                    </div>
                    <div className="notice-list" >
                        <p className="notice-list-text" onClick={()=>handleDivClick('/')} >펜타곤 개인정보처리방침 변경</p>
                        <p className="notice-list-date">2024.12.04</p>
                    </div>
                    <div className="notice-list" >
                        <p className="notice-list-text" onClick={()=>handleDivClick('/')} >펜타곤 웹 페이지 개설</p>
                        <p className="notice-list-date">2024.12.02</p>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <p>내용없음</p>
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
        </div>
    );
};

export default Notice;