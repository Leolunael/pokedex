import { createContext, useState, useContext } from "react";

const PokemonContext = createContext(null);

const usePokemon = () => useContext(PokemonContext);

const initialDresseur = {
    name: 'Sasha',
    level: 1,
    badges: 0
};

const PokemonProvider = ({children}) =>{
    const [dresseur, setDresseur]= useState (initialDresseur);
    const [favorites, setFavorites] = useState([]);
    const [team, setTeam] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);


    return (
          <PokemonContext.Provider value={[pokemon, setPokemon]}>
            {children}
          </PokemonContext.Provider>
    )
}

const fetchPokemons =async () =>{
    try{
        setLoading(true)

        const response = await api.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        set(response.data);

        const pokemonDetails = await Promise.all(
            data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                return await pokemonResponse.json();
            })
        );
        setPokemons(pokemonDetail);
    } catch (error) {

    } finally {
        setLoading(false);
    }
}

useEffect(() => {
    fetchPokemons();
}, []);






export default PokemonContext;