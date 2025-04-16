import React from 'react';
import '../styles/landing.css';
import JustGivingButton from '../components/JustGivingButton';
import caminoImage from '../assets/camino-landing.jpg'; // ✅ import it here

function Landing() {
  return (
    <div className="landing-page">
      <h1 className="landing-title">Walking the Camino – Oía to Santiago</h1>

      <div className="landing-wrapper">
      <div className="landing-text">
          <p>This May, I’m walking the final stretch of the Camino de Santiago—from the coastal village of Oía to the city of Santiago de Compostela. It’s over 100km of coastline, hills, and soul-searching, and I’ll be doing it alongside my best friend, Josh.</p>

          <p><em>“The longest way round is the shortest way home.”</em> – James Joyce, <em>Ulysses</em></p>

          <p>This walk feels like that. A long road to something essential.</p>

          <p>We’re walking for all those affected. For all the memories lost to Alzheimer’s. For the stories that were never finished, the faces that became unfamiliar, the love that endured even when recognition faded. And for the countless others who have been impacted by this disease.</p>

          <p>We’re raising money for Alzheimer’s Research UK, a charity dedicated to finding a cure and changing the future for families around the globe. Every donation goes directly to their work—and every pound helps.</p>

          <p>If you believe in symbolic journeys, strange epiphanies, or just want to support a good cause (or two tired pilgrims), we’d be truly grateful.</p>

          <p><strong>Thank you.</strong><br />– Alex & Josh</p>

          <JustGivingButton />
        </div>
        <div className="landing-image">
          <img 
            src={caminoImage} 
            alt="View from the Camino de Santiago route"
            className="landing-img"
          />
        </div>


      </div>
    </div>
  );
}

export default Landing;
