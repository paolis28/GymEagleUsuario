// GymCard.js
import React from 'react';
import './CardsRutina.css';

function CardsRutina(props) {
  return (
    <div className="gym-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {/* <a href="#" className="cta-link">Más información</a> */}
    </div>
  );
}

export default CardsRutina;
