import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'; // Footer에 대한 스타일 css 파일
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTwitterSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
    <>
        <footer className="footer">
            <Container>
                <Row className='font-form'>
                    <p id="font-form1">상호명 및 호스팅 서비스 제공 : <span id='highlight'>㈜펜타곤</span></p>
                    <p id="font-form2">사업자 등록번호: 123-45-67890 | 대표이사 : 유의선</p>
                    <p id="font-form3">문의: 1234-5678(24시간 연중무휴)</p>
                    <p id="font-form4">충청남도 천안시 동남구 대흥로 215 7층 (휴먼교육센터)</p>
                    <p id="font-form5">Copyright ⓒ Pentagon Co., Ltd. All Rights Reserved.</p>
                </Row> 
                <Row className='font-form2'>
                    <Col>
                        <Nav className='nav-items'>
                            <Nav.Item className='nav-item'>
                                <Nav.Link as={Link} to="/privacy-policy"
                                className="ft-nav-link">개인정보 처리방침</Nav.Link>
                            </Nav.Item>
                            <p className='curtain'>|</p>
                            <Nav.Item className='nav-item'>
                                <Nav.Link as={Link} to="/not-found-page"
                                className="ft-nav-link">서비스 이용약관</Nav.Link>
                            </Nav.Item>
                            <p className='curtain'>|</p>
                            <Nav.Item className='nav-item'>
                                <Nav.Link as={Link} to="/not-found-page"
                                className="ft-nav-link">고객센터</Nav.Link>
                            </Nav.Item>
                            <div className='social-icons'>
                            <a href="https://www.instagram.com/thepentagon_gym" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon 
                                className='social-icon' 
                                icon={faInstagramSquare} 
                                />
                            </a>
                            <a href="https://www.twitter.com/thepentagon_gym" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon 
                                className='social-icon' 
                                icon={faTwitterSquare} 
                                />
                            </a>
                            <a href="https://www.facebook.com/thepentagon_gym" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon 
                                className='social-icon' 
                                icon={faFacebookSquare} 
                                />
                            </a>
                            </div>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
        </>
    )
}

export default Footer;
