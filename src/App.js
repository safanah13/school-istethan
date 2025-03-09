import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="content">
              <h1>نظام الاستعاضة المدرسي</h1>
              <p>نظام متكامل لإدارة الاستعاضة في المدارس</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
