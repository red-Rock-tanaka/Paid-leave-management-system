// src/Login/LoginForm.js
import React from 'react';

const LoginForm = () => {
  return (
    <div className="input-container">
      <input type="email" placeholder="メールアドレス" className="input-field" />
      <input type="password" placeholder="パスワード" className="input-field" />
      <button className="login-button">ログイン</button>
    </div>
  );
};

export default LoginForm;
