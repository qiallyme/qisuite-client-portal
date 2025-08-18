import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import FinishSignIn from './pages/FinishSignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/finishSignIn" element={<FinishSignIn />} />
      </Routes>
    </Router>
  )
}

export default App
