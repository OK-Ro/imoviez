import React from "react";

function Welcome({ onClose }) {
  return (
    <div className="welcome-page">
      <img src="path-to-your-logo.png" alt="iMoviez Logo" className="logo" />
      <h1>Unlimited movies, TV shows, and more.</h1>
      <p>
        Find the latest and greatest movies and shows all available on iMoviez.
      </p>
      <button className="get-started-button" onClick={onClose}>
        Get Started
      </button>
    </div>
  );
}

export default Welcome;
