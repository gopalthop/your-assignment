// src/pages/AccountSettings.jsx
import '../styles/pages.css';

function AccountSettings() {
  return (
    <div className="page-layout" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Top Header Navigation bar bar block */}
      <div className="settings-header">
        <h2>Account Settings</h2>
      </div>

      {/* Main Profile Info Section */}
      <div className="profile-section">
        <div className="profile-card">
          <div className="avatar-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
              alt="Marry Doe Avatar" 
              className="profile-avatar"
            />
            {/* The distinct camera edit circle badge indicator overlay */}
            <div className="camera-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
          </div>

          <div className="profile-details">
            <h3 className="profile-name">Marry Doe</h3>
            <p className="profile-email">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      {/* Dashed boundary divider line accent trailing off layout frame mockups */}
      <div className="dashed-divider"></div>
    </div>
  );
}

export default AccountSettings;