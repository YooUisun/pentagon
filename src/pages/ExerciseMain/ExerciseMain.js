import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import lowLevelImage from '../../assets/image/low-level.mp4';
import midLevelImage from '../../assets/image/mid-level2.mp4';
import highLevelImage from '../../assets/image/high-level.mp4';
import '../../assets/ExerciseMain.css';




function ExerciseMain() {

    return (
        <div>

            {/* Routes를 사용하여 경로에 따라 컴포넌트를 렌더링 */}
            {/* <Routes> */}
            {/* 기본 경로 '/'에서 ExerciseMain을 렌더링 */}

            <Row className="justify-content-center centered-row">
                <Card className="m-4" style={{ width: '22rem' }} >
                    {/* <Card.Img variant="top" src={lowLevelImage} style={{ height: '220px', objectFit: 'cover' }} /> */}
                    <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                        <video
                            className='video'
                            src={lowLevelImage}
                            type="video/mp4"
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title className='titleStyle'>초급 프로그램</Card.Title>
                        <Card.Text>근력 및 근 지구력 향상을 통한 대근육 발달과정</Card.Text>
                        <Link to="/details1">
                            <Button className='buttonStyle2'>자세히 알아보기</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    {/* <Card.Img variant="top" src={midLevelImage} style={{ height: '220px', objectFit: 'cover' }} /> */}
                    <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                        <video
                            src={midLevelImage}
                            type="video/mp4"
                            className='video'
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <Card.Body style={{ color: 'white' }}>
                        <Card.Title className='titleStyle'>중급 프로그램</Card.Title>
                        <Card.Text>프리웨이트 기구를 통한 근육 강화와 덤벨과 바벨을 통한 세부근육 발달과정</Card.Text>
                        <Link to="/details2">
                            <Button className='buttonStyle2'>자세히 알아보기</Button>
                        </Link>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                        <video
                            src={highLevelImage}
                            type="video/mp4"
                            className='video'
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                    <Card.Body style={{ color: 'white', }}>
                        <Card.Title className='titleStyle'>고급 프로그램</Card.Title>
                        <Card.Text>대,소 근육밸런스와 근육의 조화발달, 프리웨이트를 이용한 발달 과정</Card.Text>
                        <Link to="/details3">
                            <Button className='buttonStyle2'>자세히 알아보기</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}
export default ExerciseMain;

