import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './components/Contact';
import About from './components/About';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPol from './components/PrivacyPol';
import Conditions from './components/Conditions';
import FAQ from './components/FAQ';
import AllProps from './components/AllProps';
import PropView from './components/PropView';
import AdminSite from './components/AdminSite';
import Login from './components/Login';
import './i18n';
import GoogleTranslate from './components/GoogleTranslate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleTranslate/>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPol />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/props" element={<AllProps />} />
        <Route path={`/property/:id`} element={<PropView />} />
        <Route path={`/admin`} element={<AdminSite />} />
        <Route path={`/login`} element={<Login/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
