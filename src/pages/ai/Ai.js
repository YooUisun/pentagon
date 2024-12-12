import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Horseking from '../../assets/image/horseking.jpg';
import Kimegg from '../../assets/image/kimegg.jpg';
import Kimjongguk from '../../assets/image/kimjongguk.jpg';
import '../../assets/Ai.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function Ai() {

    return (
        <div className='aiContainer'>

            <Row className="aiback">


                <Card className="aicard" >

                    <Card.Img variant="top" src={Horseking} className='cardImg' />
                    <Card.Body>
                        <Card.Title className='aiCard_Title'>말왕 트레이너 </Card.Title>
                        <p className='aiCard_Txt'>쉽고 재밌게 운동하자 ! 말왕입니다 ! </p>

                        <div>
                            <a href='https://www.youtube.com/@MrRagoona88'>
                                <FontAwesomeIcon icon={faYoutube} className='youtube_icon' />
                            </a>
                            <a href='https://www.instagram.com/horseking123/'>
                                <FontAwesomeIcon icon={faInstagram} className='insta_icon' />
                            </a>
                        </div>
                        <Nav.Link as={Link} to="/Gpt"><button className='help_btn'>상담 바로가기</button></Nav.Link>
                        
                    </Card.Body>
                </Card>

                <Card className="aicard">
                    <Card.Img variant="top" src={Kimegg} className='cardImg' />
                    <Card.Body>
                        <Card.Title className='aiCard_Title'>김계란 트레이너</Card.Title>
                        <p className='aiCard_Txt'>안녕 친구들~ 빡빡이 아저씨야~ </p>

                        <div>
                            <a href='https://www.youtube.com/@%ED%94%BC%EC%A7%80%EC%BB%AC%EA%B0%A4%EB%9F%AC%EB%A6%AC'>
                                <FontAwesomeIcon icon={faYoutube} className='youtube_icon' />
                            </a>
                            <a href='https://www.instagram.com/physical_gallery_egg/'>
                                <FontAwesomeIcon icon={faInstagram} className='insta_icon' />
                            </a>
                        </div>

                        <Nav.Link as={Link} to="/Gpt"><button className='help_btn'>상담 바로가기</button></Nav.Link>
                    </Card.Body>
                </Card>

                <Card className="aicard">
                    <Card.Img variant="top" src={Kimjongguk} className='cardImg' />
                    <Card.Body>
                        <Card.Title className='aiCard_Title'>김종국 트레이너</Card.Title>
                        <p className='aiCard_Txt'>본업은 헬스 트레이너, 부업은 가수</p>

                        <div>
                            <a href='https://www.youtube.com/@GYMJONGKOOK'>
                                <FontAwesomeIcon icon={faYoutube} className='youtube_icon' />
                            </a>
                            <a href='https://www.instagram.com/kim_jong_kook/'>
                                <FontAwesomeIcon icon={faInstagram} className='insta_icon' />
                            </a>
                        </div>

                        <Nav.Link as={Link} to="/Gpt"><button className='help_btn'>상담 바로가기</button></Nav.Link>
                    </Card.Body>
                </Card>

            </Row>
        </div>
    );
}

export default Ai;
