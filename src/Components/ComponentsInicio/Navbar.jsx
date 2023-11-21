import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../img/LogoGym.png';

function Navbar() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log('Usuario:', username);
    console.log('Contraseña:', password);

  
    setShowLoginForm(false);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <div className="ColumnaM">
        <div className="Fila1I">
          <div className='ContenedorImgM'>
        <img src={Logo} alt="" />
          </div>
          <div className='ContenedorLetraM'>
            <h1>BLACK EAGLE GYM</h1>
          </div>
          <div>
            <button className='FinalizarM' onClick={handleLoginClick}>
              Iniciar sesión
            </button>
          </div>
        </div>
        {showLoginForm && (
          <div className="LoginForm">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit">Iniciar sesión</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
