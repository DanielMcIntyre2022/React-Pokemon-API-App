import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = ` https://pokeapi.co/api/v2/pokemon`

axios.get(url).then((response => {
  console.log(response)
}));

function App() {

  return (
    <div className="App">
      <h1>Pokemon App</h1>
    </div>
  );
}

export default App;
