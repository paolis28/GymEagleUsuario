import React from 'react';
import Cards from './Components/Cards/CardsRutina'
import './Inicio.css'

function Inicio(){
    return(
        <div className="contenedorInicio">
    
        <header className="header">
          <div className="logo">
            <h1>Eagle Gym</h1>
          </div>
          <nav className="nav-links">
            {/* <a href="">Inicio</a>
            <a href="">Servicios</a>
            <a href="">Iniciar Sesión</a> */}
          </nav>
        </header>
        <section className="hero">
          <h1>Bienvenido al Gimnasio Eagle Gym</h1>
          <p>Descubre una vida más saludable y activa con nosotros.</p>
          {/* <a  className="cta-button">Únete Ahora</a> */}
        </section>
        <section className="about">
          <h2>Quiénes Somos</h2>
          <p>Somos un gimnasio dedicado a mejorar tu bienestar físico y mental. Ofrecemos una amplia gama de servicios y clases para ayudarte a alcanzar tus objetivos.</p>
        </section>
        <section className="features">
          <div className="feature">
            <h3>Servicios Personalizados</h3>
            <p>Ofrecemos planes de entrenamiento personalizados adaptados a tus necesidades individuales.</p>
          </div>
          <div className="feature">
            <h3>Precios Asequibles</h3>
            <p>Nuestros planes son accesibles para todos, sin importar tu presupuesto.</p>
          </div>
        </section>
        <section className="cards">
          <Cards
            title="Nuestros Precios"
            description="Conoce nuestros planes y tarifas."
          />
          <Cards
            title="Nuestras Rutinas"
            description="e"
          />
          <Cards
            title="si"
            description="a"
          />
        </section>
      </div>
    );
}

export default Inicio;