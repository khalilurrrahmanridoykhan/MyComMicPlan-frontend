import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPanel = ({ setAuthToken }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
    navigate('/login');
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Add your admin panel content here */}
    </div>
  );
};

export default AdminPanel;