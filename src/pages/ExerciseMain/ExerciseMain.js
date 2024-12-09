import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import lowLevelImage from '../../assets/image/low-level.mp4';
import midLevelImage from '../../assets/image/mid-level.mp4';
import highLevelImage from '../../assets/image/high-level.webp';
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
                                    src={lowLevelImage}
                                    type="video/mp4"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    autoPlay
                                    loop
                                    muted
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>초급 프로그램</Card.Title>
                                <Card.Text>근력 및 근 지구력 향상을 통한 대근육 발달과정</Card.Text>
                                <Link to="/details1">
                                    <Button variant="primary">자세히 알아보기</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <Card className="m-4" style={{ width: '22rem' }} >
                            {/* <Card.Img variant="top" src={midLevelImage} style={{ height: '220px', objectFit: 'cover' }} /> */}
                            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                                <video
                                    src={midLevelImage}
                                    type="video/mp4"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    autoPlay
                                    loop
                                    muted
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>중급 프로그램</Card.Title>
                                <Card.Text>프리웨이트 기구를 통한 근육 강화와 덤벨과 바벨을 통한 세부근육 발달과정</Card.Text>
                                <Link to="/details2">
                                    <Button variant="primary">자세히 알아보기</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                        <Card className="m-4" style={{ width: '22rem' }} >
                            <Card.Img variant="top" src={highLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>고급 프로그램</Card.Title>
                                <Card.Text>대,소 근육밸런스와 근육의 조화발달, 프리웨이트를 이용한 발달 과정</Card.Text>
                                <Link to="/details3">
                                    <Button variant="primary">자세히 알아보기</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Row>
                    {/* <Route path="/" element={} /> */}
                {/* NavBar에서 운동 눌렀을때 이동 하도록 설정 */}
                {/* <Route path="/" element={<MainPage />} />
                {/* '/details' 경로에서 DetailPage 컴포넌트를 렌더링 */}
                {/* <Route path="/details1" element={<DetailPage01 />} />
                <Route path="/details2" element={<DetailPage02 />} />
                <Route path="/details3" element={<DetailPage03 />} />
                <Route path="/Ai" element={<Ai />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Signin" element={<SigninPage />} />
                <Route path="/ExcerciseMain" element={<ExerciseMain />} /> */}
            {/* </Routes> */}            
        </div>
    );
}
export default ExerciseMain;
