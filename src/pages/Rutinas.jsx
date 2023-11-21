import React from 'react';
import RutinaCard from '../Components/componentsRutina/RutinaCard'
import '../css/Rutina.css'

const App = () => {
  const rutinas = [
    {
      nombre: 'Rutina 1',
      descripcion: 'Esta es la descripción de la Rutina 1',
      series: 3,
      repeticiones: 10,
    },
    {
      nombre: 'Rutina 2',
      descripcion: 'Esta es la descripción de la Rutina 2',
      series: 4,
      repeticiones: 12,
    },
    
  ];

  return (
    <div className="rutina-container">
      <h1 className="rutina-title">Lista de Rutinas</h1>
      <div className="decoracion-linea"></div>
      <div className="rutinas-container">
        {rutinas.map((rutina, index) => (
          <RutinaCard key={index} {...rutina} />
        ))}
      </div>
    </div>
  );
};

export default App;
