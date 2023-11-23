import React from 'react';
import './RutinaCard.css';

const RutinaCard = ({ nombre, descripcion, series, repeticiones }) => {
  return (
    <div className="rutina-card">
      
      <div className="contenido">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>Series: {series}</p>
        <p>Repeticiones: {repeticiones}</p>
      </div>
    </div>
  );
};

export default RutinaCard;
