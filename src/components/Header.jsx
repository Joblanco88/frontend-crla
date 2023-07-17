import React from 'react';
import '../styles/Header.css';
import perfil from '../assets/images/perfil.jpeg';

function Header() {
  return (
    <div className='header-main'>
      <div id='firstsegment'>
        <h2 id='firstsegtext' className='header-name'>Claudia Ribeiro Lobo</h2>
        <h3 id='firstsegtext' className='header-description'>Desenhista Projetista</h3>
      </div>
      <div id='secondsegment'>
        <img className='header-logo' src={ perfil } />
        <div>
          <span>Descrição</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
