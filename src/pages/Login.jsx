// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Navigate straight to account screen on form submission
    navigate('/account');
  };

  return (
    <div className="page-layout standard-padding">
      <div>
        <h1 className="heading-main">Signin to your<br />PopX account</h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        <form onSubmit={handleLogin} className="form-group">
          <div className="input-container">
            <label className="input-label">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="custom-input" 
              required 
            />
          </div>

          <div className="input-container">
            <label className="input-label">Password</label>
            <input 
              type="password" 
              placeholder="Enter password" 
              className="custom-input" 
              required 
            />
          </div>

          <button type="submit" className="btn btn-disabled">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;