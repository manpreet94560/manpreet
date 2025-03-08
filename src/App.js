import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/hero';
import './App.css'
import Aos from 'aos';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
