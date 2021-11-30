import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className='App'>
      <header
        style={{
          height: 300,
        }}
      >
        fiejifjeoir
      </header>
      {props.children}
    </div>
  );
}

export default App;
