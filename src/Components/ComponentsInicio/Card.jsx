import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const GymProduct = ({ titulo, precio, descripcion, style }) => {
  return (
    <div className="contenedor-producto-gym" style={style}>
    
      <div className="encabezado-producto-gym">
      <div className="iconoCardInicio">
          <FontAwesomeIcon icon={faDumbbell} className="icono-gym" />
        </div>
        <div>
        <h2>{titulo}</h2>
        </div>
        
      </div>
      <p className="precio-gym">Precio: {precio}</p>
      <p className="descripcion-gym">{descripcion}</p>
    </div>
  );
};

GymProduct.propTypes = {
  titulo: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
export default GymProduct;
