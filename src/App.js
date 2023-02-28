import './App.css';
import { useState } from 'react';
import PokemonList from './components/PokemonList';

function App() {

  const [pokemon, setPokemon] = useState(["bulbarsaur", "charmender"]);

  return (
    <div className="App">
      <div>
         <PokemonList pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;
