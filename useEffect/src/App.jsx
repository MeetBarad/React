
import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const LoginApplication = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === '1234') {
      alert('Login Successful. Welcome ' + username);
    } else {
      alert('Invalid Username or Password');
    }
  };

  return (
    <div className="page">

      <div className="circle circle-one"></div>
      <div className="circle circle-two"></div>

      <div className="login-card">

        <div className="logo">🔐</div>

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Login to continue your journey
        </p>

        <form onSubmit={LoginApplication}>

          <div className="input-group">
            <label>Username</label>

            <div className="input-box">
              <span>👤</span>

              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-box">
              <span>🔒</span>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="options">

            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button type="submit">
            Login →
          </button>

        </form>

        <p className="signup">
          Don't have an account?
          <a href="#"> Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default App;

