// الاستيرادات الضرورية
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// استيراد الصفحات
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// استيراد المكونات
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* شريط التنقل سيظهر في جميع الصفحات */}
        <Navbar />
        
        {/* المحتوى الرئيسي */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* يمكن إضافة مسار 404 للصفحات غير الموجودة */}
            <Route path="*" element={
              <div className="not-found">
                <h2>404 - الصفحة غير موجودة</h2>
              </div>
            } />
          </Routes>
        </main>

        {/* تذييل الصفحة سيظهر في جميع الصفحات */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
