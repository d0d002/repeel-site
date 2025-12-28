import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Contact />

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} RE:PEEL. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
