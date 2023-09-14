import React from 'react';
import './App.css'; // You can link your custom styles here

// Import your components
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

