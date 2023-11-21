import React from 'react';
import './RutinaCard.css';

const RutinaCard = ({ nombre, descripcion, series, repeticiones, imagenURL }) => {
  return (
    <div className="rutina-card">
      <div className="imagen-container">
        <img src={imagenURL} alt={nombre} className="rutina-imagen" />
      </div>
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
