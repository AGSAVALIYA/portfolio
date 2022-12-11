import React from 'react';
import About from './Components/About';
import Certificates from './Components/Certificates';
import Projects from './Components/Projects';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className='overflow-hidden font-mono flex flex-col md:flex-row items-center md:items-stretch h-screen w-screen'>
      <Sidebar/>
      <div className="p-5 overflow-auto flex-1">
        <About/>
        <Skills/>
        <Projects/>
        <Certificates/>
      </div>
    </div>
  );
}

export default App;
