import React from 'react';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <div className="app-body">
        <ChatBot />
      </div>
    </div>
  );
}

export default App;
