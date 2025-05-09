// src/Login/Login.js
import React from 'react';
import './Login.css';
import LoginTitle from './LoginTitle'; // LoginTitleコンポーネントをインポート
import LoginForm from './LoginForm'; // LoginFormコンポーネントをインポート

const Login = () => {
  return (
    <section className='login'>
      <div className="login-container">
        <LoginTitle /> {/* タイトルを表示 */}
        <LoginForm /> {/* フォームを表示 */}
      </div>
    </section>
  );
};

export default Login;
