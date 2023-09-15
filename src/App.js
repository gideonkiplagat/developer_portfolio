import React from 'react';
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your components
import HeaderWithPhoto from './components/HeaderWithPhoto';
import About from './components/About';
import Contacts from './components/Contacts';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ResumeNew from './components/ResumeNew';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderWithPhoto />
      <About />
      <Projects />
      <Skills />
      <ResumeNew />
      <Contacts />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;