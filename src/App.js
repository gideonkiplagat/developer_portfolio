import React from 'react';
import './App.css'; // You can link your custom styles here
import './custom.css';

// Import your components
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Footer from './components/Footer';
import HeaderWithPhoto from './components/HeaderWithPhoto';

function App() {
  return (
    <div className="App">
      <HeaderWithPhoto />
      <Header />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

