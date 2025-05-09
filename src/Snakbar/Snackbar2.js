// src/Snackbar/Snackbar2.js
import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import './Snackbar2.css';

const Snackbar2 = () => {
  return (
    <div className="snackbar2">
      <FaCheckSquare className="check-icon2" />
      <span className="snackbar-text2">申請を取り消しました</span>
    </div>
  );
};

export default Snackbar2;
