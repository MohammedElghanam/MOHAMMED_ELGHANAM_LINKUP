import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1])); 
    const expirationTime = decodedToken.exp * 1000; 
    const currentTime = Date.now();

   
    if (currentTime <= expirationTime) {
      return decodedToken;  
    } else {
      return false; 
    }
  } catch (error) {
    return false; 
  }
};

const useProtected = ({ children }) => {
  const navigate = useNavigate();
  const decodedToken = isAuthenticated(); 

  useEffect(() => {
    if (!decodedToken) {
      navigate('/'); 
    }
  }, [navigate, decodedToken]);

  if (!decodedToken) {
    return null;  
  }

  return React.cloneElement(children, { userData: decodedToken }); 
};

export default useProtected;
