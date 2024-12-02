<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import RadarChart from './pages/record/components/RadarChart';

function App() {
  return (
    <RadarChart>

    </RadarChart>
=======
import React from 'react';
import './App.css'; // 스타일시트가 필요하다면 포함
import RecordMain from './pages/RecordMain'; // RecordMain을 올바르게 임포트


function App() {
  return (
    <>
      <RecordMain /> {/* RecordMain 컴포넌트를 정상적으로 렌더링 */}
    </>
>>>>>>> ab50fbf6b2b5a4cc6e5019b574da65de0f2c9791
  );
}

export default App;
