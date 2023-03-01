import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [ currentPageUrl, setCurrentPageUrl ] = useState("https://pokeapi.co/api/v2/pokemon");
  const [ nextPageUrl, setNextPageUrl ] = useState();
  const [ prevPageUrl, setPrevPageUrl ] = useState();

  useEffect(() => {

      axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
      const data = response.data.results
      setNextPageUrl(response.data.next)
      setPrevPageUrl(response.data.previous)
      setPokemon(data.map(p => p.name))
  });

  },[currentPageUrl]);

  return (
    <div className="App">
      <div>
         <PokemonList pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;
