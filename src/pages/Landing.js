import React from 'react';
import '../styles/landing.css';
import JustGivingButton from '../components/JustGivingButton';

function Landing() {
  return (
    <div className="landing-container">
      <h1>Camino de Santiago</h1>
      <p>Follow my journey across the Camino. Each day brings new stories, landscapes, and thoughts.</p>
      <JustGivingButton />
    </div>
  );
}

export default Landing;
