// src/Snackbar/Snackbar1.js
import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import './Snackbar1.css';

const Snackbar1 = () => {
  return (
    <div className="snackbar">
      <FaCheckSquare className="check-icon" />
      <span className="snackbar-text">申請しました</span>
    </div>
  );
};

export default Snackbar1;
