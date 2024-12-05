import './App.css';
import React from 'react';
import ExerciseMain from './pages/exerciseMain/ExerciseMain';  // ExerciseMain을 상위 컴포넌트로 사용
import MainPage from './pages/mainpage/MainPage';

function App() {
  return (
    <div>      
      <MainPage />
      {/* <ExerciseMain/> */}
    </div>
  );
}

export default App;
