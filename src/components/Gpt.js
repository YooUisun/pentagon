import React, { useState } from 'react';
import './Gpt.css';

function Gpt() {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // OpenAI API 호출 함수
    const mockGPTResponse = (question) => {
        if (question.includes('현재시간')) {
            const currentDate = new Date();
            const months = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            //.padStart(2, '0'); 최소길이 2로 설정. 뒤에 설정한 값을 앞에 붙임. 여기선 0
            //  문자 1이라면 앞에 0을 붙여서 01이 나옴
            const days = currentDate.getDate().toString().padStart(2, '0');
            const hours = currentDate.getHours().toString().padStart(2, '0');
            const minutes = currentDate.getMinutes().toString().padStart(2, '0');
            const seconds = currentDate.getSeconds().toString().padStart(2, '0');
            return `현재 시간은 ${months}월 ${days}일 ${hours}:${minutes}:${seconds} 입니다.`;
            //$ 템플릿 리터럴은 백틱 (`)을 사용하여 문자열을 정의하고
            //${} 구문을 이용해 변수나 표현식을 문자열 안에 삽입
        }
        const answers = {
            "안녕": "안녕하세요! 무엇을 도와드릴까요?",
            "펜타곤이란?": "펜타곤은 너야",
        };

        return answers[question] || "그 질문에 대한 답을 모르겠어요.";
    };

    // 사용자가 질문을 보내면, 로컬에서 미리 정의된 답변을 반환
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            const mockResponse = mockGPTResponse(inputText);
            setResponse(mockResponse);
            setLoading(false);
        }, 1500); // 1.5초 후에 응답을 설정 (딜레이 시간)

        // 입력 필드 초기화
        setInputText('');
    };

    return (
        
            <div className="Gpt">
                <h1>트레이너에게 물어보세요</h1>
                <div className='ask-container'>
                    <h1>Q :</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id='ai-input'
                            className='ai-input'
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Ask a question..."
                        />
                        <button type="submit" className='ai-but'>Ask</button>
                    </form>
                </div>
                <br></br>
                {loading ? (<p>Loading...</p>) : (
                    <div className='respon-container'>
                        <h1>A :</h1>
                        <p id='ai-respon' className='ai-input'>{response}</p>
                    </div>
                )}
            </div>
        
    );
}

export default Gpt;