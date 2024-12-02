import React from 'react';
import './App.css'; // 스타일시트가 필요하다면 포함
import RecordMain from './pages/RecordMain'; // RecordMain을 올바르게 임포트

function App() {
  return (
    <>
      <RecordMain /> {/* RecordMain 컴포넌트를 정상적으로 렌더링 */}
    </>
  );
}

export default App;
