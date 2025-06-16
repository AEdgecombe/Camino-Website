import React from 'react';
import '../styles/landing.css';
import JustGivingButton from '../components/JustGivingButton';
import caminoImage from '../assets/shirts1.jpg';

function Landing() {
  return (
    <div className="landing-page">
      <h1 className="section-title">Walking the Camino – Oía to Santiago</h1>

      <div className="landing-container">
        <div className="landing-text">
        <p>In May, my best friend Josh and I walked the final stretch of the Camino de Santiago—from the coastal village of Oía to the city of Santiago de Compostela. In the end, we covered over <strong>180km</strong> of coastline, hills, and quiet reflection.</p>

        <p><em>“The longest way round is the shortest way home.”</em> – James Joyce, <em>Ulysses</em></p>

        <p>This journey felt exactly like that. A long road to something essential.</p>

        <p>We walked for everyone affected by Alzheimer’s. For the memories lost, the stories left unfinished, the faces that faded, and the love that endured through it all. And for the many others who carry the weight of this disease every day.</p>

        <p>Together, with your incredible support, we raised <strong className="donation-highlight">£1,822</strong> (with their inclusion of Gift Aid) for <strong className="donation-highlight">Alzheimer’s Research UK</strong>—a charity working to change the future for families everywhere.</p>

        <p><strong>Thank you for every donation, message, and step we didn’t take alone. It meant the world to us.</strong></p>

        <p>– Alex & Josh</p>


          <JustGivingButton />
        </div>

        <div className="landing-img-container">
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
