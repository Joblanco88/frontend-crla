import './App.css';
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Description from './components/Description';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Description />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
