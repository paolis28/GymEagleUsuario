import React, { useState, useEffect } from 'react';
import RutinaCard from '../Components/componentsRutina/RutinaCard';
import '../css/Rutina.css';
import Chat from '../Components/componentsRutina/chat'

const Rutinas = () => {
  const [rutinas, setRutinas] = useState([]);

  useEffect(()=>{
    const getRutinas = () =>{
      fetch('http://localhost:3001/gimnasio/rutina/buscar')
      .then(res => res.json())
      .then(res => setRutinas(res))
    }
    getRutinas()
  },[]) 

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
      <Chat></Chat>
    </div>
  );
};

export default Rutinas;
