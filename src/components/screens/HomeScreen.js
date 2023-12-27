import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const HomeScreen = () => {
  const { phoneNumber } = useAuth(); // Use context values

  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      <p>Logged in as: {phoneNumber}</p>
      {/* Additional user information and logout functionality */}
    </div>
  );
};

export default HomeScreen;
