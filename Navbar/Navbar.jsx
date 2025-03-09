import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">نظام الاستعاضة المدرسي</a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-link">الرئيسية</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">من نحن</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">اتصل بنا</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

