import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import NavBar from './pages/NavBar';
import Technology from './pages/Technology';

const App = () => {
  // article data is an array of 
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path = "/" element = {<LandingPage/>}/>
          <Route path = "/technology" element = {<Technology/>}/>
        </Routes>
      </Router>
  )
}

export default App
