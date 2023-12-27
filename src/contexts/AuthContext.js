import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const verifyPhoneNumber = (number) => {
    setPhoneNumber(number);
  };

  const setVerificationStatus = (status) => {
    setIsVerified(status);
  };

  return (
    <AuthContext.Provider value={{ phoneNumber, isVerified, verifyPhoneNumber, setVerificationStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
