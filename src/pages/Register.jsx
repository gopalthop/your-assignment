// src/pages/Register.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages.css';

function Register() {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState('yes'); // Default matching image mockup selection

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="page-layout standard-padding">
      <div>
        <h1 className="heading-main">Create your<br />PopX account</h1>
        
        <form onSubmit={handleRegister} className="form-group" style={{ marginTop: '30px' }}>
          <div className="input-container">
            <label className="input-label">Full Name<span className="required-star">*</span></label>
            <input type="text" placeholder="Enter full name" className="custom-input" required />
          </div>

          <div className="input-container">
            <label className="input-label">Phone number<span className="required-star">*</span></label>
            <input type="tel" placeholder="Enter phone number" className="custom-input" required />
          </div>

          <div className="input-container">
            <label className="input-label">Email address<span className="required-star">*</span></label>
            <input type="email" placeholder="Enter email address" className="custom-input" required />
          </div>

          <div className="input-container">
            <label className="input-label">Password<span className="required-star">*</span></label>
            <input type="password" placeholder="Enter password" className="custom-input" required />
          </div>

          <div className="input-container">
            <label className="input-label" style={{ color: 'var(--text-muted)' }}>Company name</label>
            <input type="text" placeholder="Enter company name" className="custom-input" />
          </div>

          {/* Radio Group Setup */}
          <div className="radio-section">
            <p className="radio-title">Are you an Agency?<span className="required-star">*</span></p>
            <div className="radio-group">
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="agency" 
                  value="yes" 
                  checked={isAgency === 'yes'} 
                  onChange={(e) => setIsAgency(e.target.value)}
                />
                <span className="custom-radio"></span>
                Yes
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="agency" 
                  value="no" 
                  checked={isAgency === 'no'} 
                  onChange={(e) => setIsAgency(e.target.value)}
                />
                <span className="custom-radio"></span>
                No
              </label>
            </div>
          </div>

          {/* Create Account Submit button fixed at the base */}
          <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;