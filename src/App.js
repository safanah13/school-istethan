import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>مرحباً بكم في نظام الاستعاضة المدرسي</h1>
        <p>
          نظام إدارة الاستعاضة للمدارس
        </p>
        <button className="login-button">
          تسجيل الدخول
        </button>
      </header>
    </div>
  );
}

export default App;
