import React, { useState, useEffect } from 'react';
import RutinaCard from '../Components/componentsRutina/RutinaCard';
import '../css/Rutina.css';

const Rutinas = () => {
  const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    
    fetch('apiRuta')
      .then(response => response.json())
      .then(data => setRutinas(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div className="rutina-container">
      <div style={{ marginLeft: "10%" }}>
        <h1 className="rutina-title">Lista de Rutinas</h1>
        <div className="lineaRutina linea-derechaRutina" style={{ marginRight: "10%" }}></div>
      </div>
      <div className="rutinas-container">
        {rutinas.map((rutina, index) => (
          <RutinaCard key={index} {...rutina} />
        ))}
      </div>
    </div>
  );
};

export default Rutinas;
