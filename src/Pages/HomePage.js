import {useState} from "react";
import {Link} from 'react-router-dom';
import {usePokemon} from '../context/PokemonContext';

const HomePage = () => {
    const { pokemons, loading, addToFavorites, removeFromFavorites, isFavorite, addToTeam, isInTeam } = usePokemon();

    const [searchTerm, setSearchTerm] = useState(() =>localStorage.getItem("Pokemon") ?? "");

    useEffect(() => {localStorage.setItem("Pokemon", searchTerm);}, [searchTerm]);

    const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    };
    const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <>
      <h1>MiniPokédex</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      <p>
        Search for: <strong>{searchTerm}</strong>
      </p>
      <hr />
      <List pokemons={filteredPokemons} />
    </>
    )
}

const Search = ({search, onSearch}) => {
  return (
    <>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value= {search} onChange={(e) => onSearch(e.target.value)} placeholder="Pikachu" />
    </>
  );
};

const List = ({ pokemons }) => (
  <ul>
    {pokemons.map((pokemons) => (
      <li key={pokemons.name}>
        <strong>{pokemons.name}</strong> - Type: {pokemons.type}
      </li>
    ))}
  </ul>
);

export default HomePage;