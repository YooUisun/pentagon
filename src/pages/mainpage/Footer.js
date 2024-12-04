import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css'; // Footer에 대한 스타일 css 파일

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className='font-form'>
                    <p id="font-form1">상호명 및 호스팅 서비스 제공 : ㈜펜타곤</p>
                    <br></br>
                    <p id="font-form2">사업자 등록번호: 123-45-67890 | 대표이사 : 유의선</p>
                    <p id="font-form3">충청남도 천안시 동남구 대흥로 215 7층</p>
                    <p id="font-form4">Copyright ⓒ Pentagon Co., Ltd. All Rights Reserved. </p>
                </Row>
                { /* 
                <Row>
                    <Col className="text-center">
                        <Nav className="justify-content-center">
                            <Nav.Item>
                                <Nav.Link href="#privacy-policy">Privacy Policy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#terms-of-service">Terms of Service</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row> */}
            </Container>
        </footer>
    )
}

export default Footer;
