import React from 'react'
import './error-indicator.css'
import iconImage from './icon-repairs.png';

const ErrorIndicator = () => {

  return (
    <div className="error-indicator">
      <div className="er-in-content">
        <img src={iconImage} alt="repair.." />
        <span>BOOOOOOOOOM!!! ERROR!!!</span>
        <span>...Reboot please...</span>
      </div>
    </div>
  );
};

export default ErrorIndicator;