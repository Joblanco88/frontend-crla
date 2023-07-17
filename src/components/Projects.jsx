import React from 'react';
import '../styles/Projects.css';
import areaExterna from '../assets/images/area-externa.jpeg';
import banheiro from '../assets/images/banheiro.jpeg';
import cozinhaCopa from '../assets/images/cozinha-copa.jpeg';
import salaMesas from '../assets/images/sala-mesas.jpeg';
import salaOdonto from '../assets/images/sala-odontologia.jpeg';

function Projects() {
  return (
    <div className='projects-main'>
      <img id='projectsimages' src={areaExterna} alt="" />
      <img id='projectsimages' src={banheiro} alt="" />
      <img id='projectsimages' src={cozinhaCopa} alt="" />
      <img id='projectsimages' src={salaMesas} alt=""  />
      <img id='projectsimages' src={salaOdonto} alt="" />
    </div>
  );
}

export default Projects;