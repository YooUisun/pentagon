import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; //React Router의 Link 컴포넌트를 import.
import './Footer.css'; // Footer에 대한 스타일 css 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className='font-form'>
                    <p id="font-form1">상호명 및 호스팅 서비스 제공 : <span id='highlight'>㈜펜타곤</span></p>
                    <br></br>
                    <p id="font-form2">사업자 등록번호: 123-45-67890 | 대표이사 : 유의선</p>
                    <p id="font-form3">문의: 1234-5678(24시간 연중무휴)</p>
                    <p id="font-form4">충청남도 천안시 동남구 대흥로 215 7층 (휴먼교육센터)</p>
                    <p id="font-form5">Copyright ⓒ Pentagon Co., Ltd. All Rights Reserved.</p>
                </Row> 
                <Row className='font-form2'>
                    <Col>
                        <Nav className='nav-items'>
                            <Nav.Item className='nav-item'>
                                <Nav.Link href="#privacy-policy">개인정보 처리방침</Nav.Link>
                            </Nav.Item>
                            <p className='nav-item'>|</p>
                            <Nav.Item className='nav-item'>
                                <Nav.Link href="#terms-of-service">서비스 이용약관</Nav.Link>
                            </Nav.Item>
                            <p className='nav-item'>|</p>
                            <Nav.Item className='nav-item'>
                                <Nav.Link href="#contact-us">고객센터</Nav.Link>
                            </Nav.Item>
                            <div className='social-icons'>
                            <Link to="/instagram">
                                <FontAwesomeIcon 
                                className='social-icon' 
                                icon={faInstagramSquare} 
                                size="3x" 
                                />
                            </Link>
                            <Link to="/twitter">
                                <FontAwesomeIcon 
                                className='social-icon' 
                                icon={faTwitterSquare} 
                                size="3x" 
                                />
                            </Link>
                            </div>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
