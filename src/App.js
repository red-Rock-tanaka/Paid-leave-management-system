// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Snackbar1 from './Snakbar/Snackbar1';
import Snackbar2 from './Snakbar/Snackbar2';
import Login from './Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <div className='test'>
          <Routes>
            <Route path="/login" element={<Login />} /> {/* ログインページのルート */}
            <Route path="/" element={
              <>
                <div className="box">
                  <Snackbar1 /> { }
                </div>
                <div className="box">
                  <Snackbar2 /> { }
                </div>
                <Link to="/login"> {/* ログインページへのリンク */}
                  <button>ログイン（テスト）</button>
                </Link>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
