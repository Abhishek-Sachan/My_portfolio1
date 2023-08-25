
import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/Education/Resume';
import Portfolio from './components/Projects/Portfolio';
import Contact from './components/Contact/Contact';


function App() {
  return (
   <>
   <Sidebar />
   <main>
          <Home  />
          <About  />
          
          <Resume  />
          <Portfolio />
          
          <Contact />



   </main>
   
   
   </>
  );
}

export default App;
