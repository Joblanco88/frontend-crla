import React from 'react';
import '../styles/Header.css';
import perfil from '../assets/images/perfil.jpeg';

function Header() {
  const descText = 'Crio ambientes de acordo com clientes, combinando funcionalidade com elegância. Objetivo transformar o espaço de acordo com a personalidade e o estilo de vida de cada um.';
  return (
    <div className='header-main'>
      <div id='firstsegment'>
        <h2 id='firstsegtext' className='header-name'>Claudia Ribeiro Lobo</h2>
        <h3 id='firstsegtext' className='header-work'>Desenhista Projetista</h3>
      </div>
      <div id='secondsegment'>
        <img className='header-logo' src={ perfil } />
        <span className='header-description'>{ descText }</span>
      </div>
    </div>
  );
}

export default Header;
