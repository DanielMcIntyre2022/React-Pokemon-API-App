import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './components/PokemonList';

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [ currentPageUrl, setCurrentPageUrl ] = useState("https://pokeapi.co/api/v2/pokemon");
  const [ nextPageUrl, setNextPageUrl ] = useState();
  const [ prevPageUrl, setPrevPageUrl ] = useState();
  const [loading, setLoading ] = useState(true);

  useEffect(() => {
      setLoading(true)
      axios.get(currentPageUrl)
        .then(response => {
        const data = response.data.results
        setLoading(false)
        setNextPageUrl(response.data.next)
        setPrevPageUrl(response.data.previous)
        setPokemon(data.map(p => p.name))
  });

  },[currentPageUrl]);

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  };

  const goToPrevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  };

  if (loading ) return "Loading..."

  return (
    <div className="App">
      <div>
         <PokemonList pokemon={pokemon}/>
      </div>
    </div>
  );
}

export default App;
