import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = ` https://pokeapi.co/api/v2/pokemon`

function App() {

  const [ pokemon, setPokemon ] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(url)
    console.log(data.results)
    setPokemon(data)
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
