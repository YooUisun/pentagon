import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Horseking from '../../assets/image/horseking.jpg';
import Kimegg from '../../assets/image/kimegg.jpg';
import Kimjongguk from '../../assets/image/kimjongguk.jpg';
import '../../assets/Ai.css';

function Ai() {
    const [inputText, setInputText] = useState('');  // 사용자 질문 상태
    const [inputText2, setInputText2] = useState('');
    const [inputText3, setInputText3] = useState('');
    const [responseText, setResponseText] = useState('');  // GPT 답변 상태
    const [responseText2, setResponseText2] = useState('');
    const [responseText3, setResponseText3] = useState('');
    const [loading, setLoading] = useState(false);  // 로딩 상태
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);
    const [error, setError] = useState(null);  // 에러 상태
    const [error2, setError2] = useState(null);
    const [error3, setError3] = useState(null);
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); // 딜레이 두고 요청

    // GPT API에 질문을 보내고 답변을 받는 함수
    const getGPTResponse = async (input, setResponse, setLoading, setError) => {
        if (!input) {
            alert("질문을 입력하세요!");
            return;
        }


        setLoading(true);
        setError(null); // 이전 에러 초기화

        const retryRequest = async (retries, delayTime) => {
            try {
                // 요청 전에 딜레이
                await delay(delayTime); // 딜레이 추가

                const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}` // 환경변수에서 API 키 가져오기
                    },
                    body: JSON.stringify({
                        model: 'gpt-3.5-turbo',  // 모델 선택
                        messages: [{ role: 'user', content: inputText }] // 유저 메시지
                    })
                });

                console.log("API 응답 상태:", response.status); // 응답 상태 코드 확인
                if (response.status === 429) {
                    // 429 오류가 발생하면 일정 시간 뒤에 재시도
                    if (retries > 0) {
                        const retryDelay = Math.pow(2, retries) * 1000; // 재시도 딜레이 (2초, 4초, 8초...)
                        console.log(`429 오류 발생, ${retryDelay}ms 뒤에 다시 시도합니다.`);
                        await retryRequest(retries - 1, retryDelay);
                    } else {
                        throw new Error('재시도 한도 초과');
                    }
                } else if (!response.ok) {
                    throw new Error('API 요청 실패');
                }

                const data = await response.json();
                console.log("전체 API 응답 데이터:", data); // 전체 응답 데이터 확인

                if (data && data.choices && data.choices.length > 0) {
                    const gptReply = data.choices[0]?.message?.content || '응답을 받을 수 없습니다.';
                    setResponse(gptReply);
                } else {
                    setResponse('응답을 받을 수 없습니다.');
                }

            } catch (error) {
                console.error("Error fetching GPT response:", error);
                setError("오류가 발생했습니다.");
                setResponse('응답을 받을 수 없습니다.');
            } finally {
                setLoading(false); // 로딩 상태 종료
            }
        };     
        await retryRequest(1, 0);
    };

    return (
        <div style={{ marginTop: '70px' }}>
            <Row className="justify-content-center aiback">
                <Card style={{ width: '60rem', margin: '17px', height: '230px' }} className="d-flex flex-row ">
                    <Card.Img variant="top" src={Horseking} className='cardImg' />
                    <Card.Body style={{ height: '100px' }}>
                        <Card.Title>말왕 트레이너</Card.Title>
                        <div className="d-flex">
                            <div style={{ width: '50%' }}>
                                <textarea
                                    rows="5"
                                    style={{ width: '100%' }}
                                    placeholder="여기에 질문을 입력하세요..."
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)} // 입력한 값을 상태로 설정
                                />
                                <br />
                                <div className='aiRespon'>
                                    <button onClick={() => getGPTResponse(inputText, setResponseText, setLoading, setError)} disabled={loading}>질문하기</button>
                                    {loading && <p style={{ marginLeft: '10px' }}>로딩 중...</p>} {/* 로딩 상태 표시 */}
                                    {error && <p style={{ color: 'red', marginLeft: '10px' }}>{error}</p>} {/* 에러 메시지 표시 */}
                                </div>
                            </div>
                            <div className='aiRespon2'>

                                <textarea
                                    rows="5"
                                    style={{ width: '100%' }}
                                    value={responseText} // GPT의 답변을 상태로 표시
                                    readOnly
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '60rem', margin: '17px', height: '230px' }} className="d-flex flex-row">
                    <Card.Img variant="top" src={Kimegg} className='cardImg' />
                    <Card.Body style={{ height: '100px' }}>
                        <Card.Title>김계란 트레이너</Card.Title>
                        <div className="d-flex">
                            <div style={{ width: '50%' }}>
                                <textarea
                                    rows="5"
                                    style={{ width: '100%' }}
                                    placeholder="여기에 질문을 입력하세요..."
                                    value={inputText2}
                                    onChange={(e) => setInputText2(e.target.value)} // 입력한 값을 상태로 설정
                                />
                                <br />
                                <div className='aiRespon'>
                                    <button onClick={() => getGPTResponse(inputText2, setResponseText2, setLoading2, setError2)} disabled={loading2}>질문하기</button>
                                    {loading2 && <p style={{ marginLeft: '10px' }}>로딩 중...</p>} {/* 로딩 상태 표시 */}
                                    {error2 && <p style={{ color: 'red', marginLeft: '10px' }}>{error2}</p>} {/* 에러 메시지 표시 */}
                                </div>
                            </div>
                            <div className='aiRespon2'>

                                <textarea
                                    rows="5"
                                    style={{ width: '100%' }}
                                    value={responseText2} // GPT의 답변을 상태로 표시
                                    readOnly
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card style={{ width: '60rem', margin: '17px', height: '230px' }} className="d-flex flex-row">
                    <Card.Img variant="top" src={Kimjongguk} className='cardImg' />
                    <Card.Body style={{ height: '100px' }}>
                        <Card.Title>김종국 트레이너</Card.Title>
                        <div className="d-flex">
                            <div style={{ width: '50%' }}>
                                <textarea
                                    rows="5"
                                    style={{ width: '100%' }}
                                    placeholder="여기에 질문을 입력하세요..."
                                    value={inputText3}
                                    onChange={(e) => setInputText3(e.target.value)} // 입력한 값을 상태로 설정
                                />
                                <br />
                                <div className='aiRespon'>
                                    <button onClick={() => getGPTResponse(inputText3, setResponseText3, setLoading3, setError3)} disabled={loading3}>질문하기</button>
                                    {loading3 && <p style={{ marginLeft: '10px' }}>로딩 중...</p>} {/* 로딩 상태 표시 */}
                                    {error3 && <p style={{ color: 'red', marginLeft: '10px' }}>{error3}</p>} {/* 에러 메시지 표시 */}
                                </div>
                            </div>
                            <div className='aiRespon2'>
                                <textarea
                                    rows="5"
                                    style={{ width: '100%' }}
                                    value={responseText3} // GPT의 답변을 상태로 표시
                                    readOnly
                                />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default Ai;
