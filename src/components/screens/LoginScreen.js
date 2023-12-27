import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Import useAuth

const LoginScreen = () => {
  const [otp, setOtp] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Define phoneNumber state
  const [verificationInProgress, setVerificationInProgress] = useState(false); // Define verificationInProgress state
  const navigate = useNavigate();
  const { verifyPhoneNumber, setVerificationStatus } = useAuth(); // Use context values


  const sendOtp = async () => {
    try {
      // Assuming phoneNumber is set by an input field
      await axios.post('http://localhost:3000/api/otp/send', { phoneNumber });
      setVerificationInProgress(true); // Set verification in progress
      verifyPhoneNumber(phoneNumber); // Update phoneNumber in context
    } catch (error) {
      console.error('Error in sending OTP:', error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/otp/verify', { phoneNumber, code: otp });
      if (response.data.success) {
        setVerificationStatus(true);
        navigate('/home');
      } else {
        alert('Verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error in verifying OTP:', error);
      alert('An error occurred during verification.');
    }
  };

  return (
    <div>
      <h3>LOGIN VIA OTP</h3>
      <input 
        type="text" 
        placeholder="Phone Number" 
        onChange={(e) => setPhoneNumber( '+91' + e.target.value)} 
        disabled={verificationInProgress}
      />
      {verificationInProgress ? (
        <>
          <input 
            type="text" 
            placeholder="OTP" 
            onChange={(e) => setOtp(e.target.value)} 
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      ) : (
        <button onClick={sendOtp}>Send OTP</button>
      )}
    </div>
  );
};

export default LoginScreen;
