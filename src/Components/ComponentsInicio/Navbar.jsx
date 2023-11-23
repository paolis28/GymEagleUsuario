import React from 'react';
import './Navbar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Logo from '../../img/LogoGym.png';
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'

function Navbar() {
  const [body, setBody] = useState({celular: '', contraseña: ''});
  const navigate = useNavigate();
  let alertValues = {title:'', text:'', icon:''};

  const [showLoginForm, setShowLoginForm] = useState(false);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const messageAlert = (alertValues) => {
    Swal.fire({
      title: alertValues.title,
      text: alertValues.text,
      icon: alertValues.icon,
      confirmButtonText: 'Aceptar'
    });
  };
  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleChange = ({target}) =>{
    const {name, value} = target;
    setBody({
      ...body,
      [name]:value
    });
  }
  
  const toAccess = async(event) =>{
    event.preventDefault();
    const permitido = /^[1-9]\d{9}$/;
    if (!body.celular || !body.contraseña) {
      alertValues = {title: 'Oops!', text: 'Los campos son obligatorios', icon: 'error'};
      messageAlert(alertValues);
    }else if (!permitido.test(body.celular)) {
      alertValues = {title: 'Oops!', text: 'El número de celular debe ser de 10 digitos y no empezar con cero', icon: 'error'};
      messageAlert(alertValues);
    }else{
      try {
        await axios.post('http://localhost:3001/gimnasio/clientesrutina/login', body)
        alertValues = {title: 'Bienvenido!', text: 'Bienvenido '+body.usuario , icon: 'success'};
          messageAlert(alertValues);
        navigate('/rutina');
      } catch (error) {
        console.log(error)
        alertValues = {title: 'No encontrado!', text: 'El usuario o la contraseña son incorrectos' , icon: 'warning'};
          messageAlert(alertValues); 
      }
    }
  }

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
            <form onSubmit={toAccess}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                value={body.celular}
                name='celular'
                onChange={handleChange}
              />

              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={body.contraseña}
                name='contraseña'
                onChange={handleChange}
              />

              <button>Iniciar sesión</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
