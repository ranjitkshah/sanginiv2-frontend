import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      navigate('/login')
      // Redirect to login or another page after logout
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      <p>This is the home screen of the application, accessible after successful login.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomeScreen;
