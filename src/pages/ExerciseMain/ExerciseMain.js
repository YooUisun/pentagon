import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import '../../assets/ExerciseMain.css';
import lowLevelImage from '../../assets/image/low-level.jpg';
import midLevelImage from '../../assets/image/mid-level.jpg';
import highLevelImage from '../../assets/image/high-level.jpg';

function ExerciseMain() {
    let navigate = useNavigate(); // useNavigate 훅 사용

    let DetailClick = () => { // 상세보기 클릭 시 다른 페이지로 이동
        navigate('/details'); // /details 경로로 이동
    };

    return (
        <div>
            <Row className="justify-content-center centered-row">
                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={lowLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>초급 프로그램</Card.Title>
                        <Card.Text>
                            내용
                        </Card.Text>
                        <Button variant="danger" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={midLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>중급 프로그램</Card.Title>
                        <Card.Text>
                            내용
                        </Card.Text>
                        <Button variant="success" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>

                <Card className="m-4" style={{ width: '22rem' }} >
                    <Card.Img variant="top" src={highLevelImage} style={{ height: '220px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>고급 프로그램</Card.Title>
                        <Card.Text>
                            내용
                        </Card.Text>
                        <Button variant="secondary" onClick={DetailClick}>자세히 알아보기</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default ExerciseMain;
// "primary"    파란색 강조 버튼
// "secondary"  회색 버튼
// "success"    초록색 버튼
// "danger"     빨간색 버튼
// "warning"    노란색 버튼
// "info"       파란색 버튼
// "light"      밝은 회색 버튼
// "dark"       어두운 회색 버튼
// "link"       링크 스타일의 버튼
