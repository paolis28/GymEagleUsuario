import React from 'react';
import Carrusel from './Components/Carousel.jsx';
import Precios from './Components/ComponentsInicio/Card.jsx';
import Navbar from './Components/ComponentsInicio/Navbar.jsx';
import './css/Inicio.css';

const Inicio = () => {
  
  return (
    <div className="containerInicio">
      <Navbar />
      <div className="letraInicio">
        <div className="linea linea-izquierda"></div>
        <h1 className="aparicion">Bienvenido a Nuestro Gimnasio</h1>
        <div className="linea linea-derecha"></div>
      </div>
      <div>
        <Carrusel />
      </div>
      <div className='LetraDescripcion' style={{ width: '100%' }}>
        <p>
          Descubre los beneficios de mantener un estilo de vida saludable en nuestro gimnasio.
        </p>
        <p>
          Ayudándote a alcanzar tus metas de acondicionamiento físico.
        </p>
      </div>
      <div className='preciosComponentsInicio' style={{ display: 'flex' }}>
        <Precios
          titulo="Pagos por día"
          precio="$30"
          descripcion="Accede a todas nuestras máquinas por un solo día."
        />
        <Precios
          titulo="Pagos por mensualidad"
          precio="$250"
          descripcion="Accede a todas nuestras máquinas y un usuario y contraseña única para acceder y ver todas nuestras rutinas"
          style={{ marginLeft: '10%' }} 
        />
      </div>
    </div>
  );
};

export default Inicio;
