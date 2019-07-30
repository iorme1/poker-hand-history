import React from 'react';
import './App.css';
import HandHistory from './components/HandHistory';
import Board from './components/board';
import Villain from './components/Villain';
import Hero from './components/Hero';
import Notes from './components/Notes';

function App() {
  return (
    <div className="App">
      <HandHistory/>
      <div className="row">
        <div className="col-3 text-center">
          <Hero />
        </div>
        <div className="col-6 text-center">
          <Board />
        </div>
        <div className="col-3 text-center">
          <Villain />
        </div>
      </div>
      <Notes />
    </div>
  );
}

export default App;
