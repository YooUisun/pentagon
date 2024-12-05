import './App.css';
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
=======
import React from 'react';
import ExerciseMain from './pages/exerciseMain/ExerciseMain';  // ExerciseMain을 상위 컴포넌트로 사용
>>>>>>> 3a12a798b9122be57a6978bf0b9c45e99367bb5d
import MainPage from './pages/mainpage/MainPage';

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
    </Routes>
  )
=======
    <div>      
      <MainPage />
      {/* <ExerciseMain/> */}
    </div>
  );
>>>>>>> 3a12a798b9122be57a6978bf0b9c45e99367bb5d
}

export default App;
