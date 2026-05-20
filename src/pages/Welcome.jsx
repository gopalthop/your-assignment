// src/pages/Welcome.jsx
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-layout welcome-container">
      <div className="welcome-content">
        <h1 className="heading-main">Welcome to PopX</h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <div className="button-group">
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/register')}
        >
          Create Account
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;