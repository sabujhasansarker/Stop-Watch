import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import Title from './Components/Title/Title';
import Digits from './Components/Digits/Digits';

function App() {
  return (
    <div className="App container">
      <Title/>
      <Digits/>
    </div>
  );
}

export default App;
