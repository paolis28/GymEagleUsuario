import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footercontenedor">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contacto</h3>
            {/* <p><FaPhone /> Teléfono:</p> */}
            <p><FaEnvelope /> Correo electrónico: </p>
            <p><FaMapMarkerAlt /> Dirección: Colonia francisco I Madero, Tuxtla Gutierrez Chiapas </p>
          </div>

          <div className="social-icons">
            <h3>Síguenos</h3>
            <motion.a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook className="icon" />
            </motion.a>
            <motion.a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter className="icon" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram className="icon" />
            </motion.a>
          </div>

         
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Black Eagle Gym Todos los derechos reservados.</p>
          <p>Política de Privacidad | Términos y Condiciones</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
