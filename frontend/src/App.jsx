import './App.css'
import RegisterPage from './Screens/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Screens/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
