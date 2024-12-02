import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExerciseMain from './pages/ExerciseMain/ExerciseMain';
import DetailPage from './pages/ExerciseMain/DetailPage';

function App() {
  return (
    <div>
      <Routes>
        {/* 기본 경로 '/'에서 ExerciseMain 컴포넌트 렌더링 */}
        <Route path="/" element={<ExerciseMain />} /> 
        {/* '/details' 경로에서 DetailPage 컴포넌트 렌더링 */}
        <Route path="/details" element={<DetailPage />} /> 

        {/* '/new' 경로에서 NewPage 컴포넌트 렌더링 */}
        {/* <Route path="/new" element={<NewPage />} />  */}
      </Routes>
    </div>
  );
}

export default App;
