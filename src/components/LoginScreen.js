import React, { useState, useEffect } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig'; // Importing auth from firebaseConfig
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const navigate = useNavigate(); // useHistory hook for navigation

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth,'send-otp-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved - allow OTP to be sent
      }
    });
    window.recaptchaVerifier.render();
  }, []);

  const sendOtp = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log("OTP has been sent");
    } catch (error) {
      console.error("Error in sending OTP: ", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      const userCredential = await signInWithCredential(auth, credential);
      console.log("OTP Verified successfully");
      navigate('/home'); // Redirect to home screen upon successful verification
    } catch (error) {
      console.error("Error in verifying OTP: ", error);
    }
  };

  return (
    <div>
        <h3>LOGIN OTP SCREEN</h3>
      <input type="text" placeholder="Phone Number" onChange={e => setPhoneNumber("+91-" + e.target.value)} />
      { verificationId 
        ? <div>
            <input type="text" placeholder="OTP" onChange={e => setOtp(e.target.value)} />
            <button onClick={verifyOtp}>Verify OTP</button>
          </div>
        : <button id="send-otp-button" onClick={sendOtp}>Send OTP</button>
      }
    </div>
  );
};

export default Login;
