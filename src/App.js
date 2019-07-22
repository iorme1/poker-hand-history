import React from 'react';
import './App.css';
import HandHistory from './components/HandHistory';
import Board from './components/board';

function App() {
  return (
    <div className="App">
      <HandHistory/>
      <Board />
    </div>
  );
}

export default App;
