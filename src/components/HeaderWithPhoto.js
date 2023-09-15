// HeaderWithPhoto.js
import React from 'react';
import './HeaderWithPhoto.css'; // Create this CSS file for styling

function HeaderWithPhoto() {
  const imageUrl = process.env.PUBLIC_URL + '/your-photo.jpg'; // Adjust the filename

  return (
    <header className="header-with-photo">
      <div className="header-content">
        <img
          src={imageUrl}
          alt="Your Name"
          className="profile-photo"
        />
        <h1>Gideon Kiplagat`</h1>
        {/* ... rest of the component */}
      </div>
    </header>
  );
}

export default HeaderWithPhoto;

