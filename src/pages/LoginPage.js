import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'test@gmail.com' && password === 'test') {
      setUser({ email, category });
      navigate('/test');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="brand">
        </div>
      </div>
      <div className="login-right">
        <div className="login-form">
          <h2>User Sign in</h2>
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">--Select your exam category--</option>
            <option value="sports">Sports</option>
            <option value="arts">Arts</option>
            <option value="history">History</option>
            <option value="physics">Physics</option>
          </select>
          <button onClick={handleLogin}>SIGN IN</button>
          <p>
            Don't have an Account? <span className="signup-link">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
