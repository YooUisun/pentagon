import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import MainPage from './pages/mainpage/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
    </Routes>
  )
}

export default App;
