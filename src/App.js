import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Forms from './Forms';
import AdminPanel from './AdminPanel'; // Import the AdminPanel component

const App = () => {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem('authToken'));

  useEffect(() => {
    setAuthToken(sessionStorage.getItem('authToken'));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={authToken ? <Navigate to="/admin" /> : <Login setAuthToken={setAuthToken} />} />
        <Route path="/forms" element={authToken ? <Forms /> : <Navigate to="/login" />} />
        <Route path="/admin" element={authToken ? <AdminPanel setAuthToken={setAuthToken} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;