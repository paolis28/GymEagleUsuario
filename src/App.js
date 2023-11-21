import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import Rutina from './pages/Rutinas'

import Footer from './Components/Footer'
import Navbar from './Components/Navbar';


function App() {
  const currentPath = window.location.pathname.toLowerCase(); // Convierte a minusculas 
  const navbarDisplay = (currentPath !== '/' ) ? "block" : "none";

  return (
    <Router>
       <div style={{ display: navbarDisplay }}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/rutina" element={<Rutina />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
