import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Home from './components/Home';
import About from './components/About';
import FAQ from './components/Faq';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-root">
      <Navbar page={page} setPage={setPage} />
      <div className="app-body">
        {page === 'home'     && <Home setPage={setPage} />}
        {page === 'sentinel' && <ChatBot />}
        {page === 'about'    && <About />}
        {page === 'faq'      && <FAQ />}
      </div>
    </div>
  );
}

export default App;