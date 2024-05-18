import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/home';
import Services from './sections/Services';
import Statistics from './sections/Statistics';
import Contact from './sections/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
