import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/LoginScreen';
import HomeScreen from './components/HomeScreen'; // Import HomeScreen
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} /> {/* Redirect from root to /login */}
        <Route path="/login" element={<Login />} /> {/* Route for LoginScreen */}
        <Route path="/home" element={<HomeScreen />} /> {/* Route for HomeScreen */}
      </Routes>
    </Router>
  );
};

export default App;
