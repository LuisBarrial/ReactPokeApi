import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Results";
import { useState, useEffect } from "react";
import { getPokemonData, getPokemons, SearchPokemon } from "./api";
import { FavoriteProvider } from "./context/favoriteContexts";

function Indexs(){
const [pokemons, setPokemons] = useState([]);
const [page,setPage] = useState(0);
const [searching,setSearching] = useState(false);
const [notFound, setNotFound] = useState(false);
const [total,setTotal] = useState(0);
const [loading,setLoading]=useState(true);
const [favorites,setFavorites]=useState([]);
const localStorageKey = "favorite_pokemon";

const fetchPokemons = async () => {
  try {
    setLoading(true);
    const data = await getPokemons(25,25*page);
    
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url)
      
    });
    
    const results = await Promise.all(promises)
    setPokemons(results);
    setLoading(false);
    setTotal(Math.ceil(data.count / 25));
    setNotFound(false);
  } catch (err) {}
}
useEffect(() => {
  fetchPokemons();
},[page]);

const updateFavoritePokemons = (name) =>{
  const updated = [...favorites];
  const isFavorite = favorites.indexOf(name);
  if(isFavorite >=0){
    updated.splice(isFavorite,1);

} else{
    updated.push(name);
}

setFavorites(updated);
}

const loadFavoritePokemons = () => {
const pokemons =
  JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
  
setFavorites(pokemons);
};

useEffect(() => {
loadFavoritePokemons();
}, []);

useEffect(() => {
if (notFound) {
  fetchPokemons();
}
}, [page]);

const onSearch =  async (pokemon) => {

if(!pokemon){
  return fetchPokemons();
}
else{
  setLoading(true)
  const result = await SearchPokemon(pokemon);
  console.log(result);
  setNotFound(false);
  setSearching(true);
  if(!result){
    setLoading(false)
    setNotFound(true);
    return;
  }else{
    setPokemons([result]);
    setPage(0);
    setTotal(1);

  }

  setLoading(false);
  setSearching(false)


}


}
localStorage.favoritos=favorites;

return (
  
  <FavoriteProvider 
  value={{
    favoritePokemons: favorites, 
    updateFavoritePokemons: updateFavoritePokemons
    }}
    >
  <div>
    <Navbar />

    <div className="App">

      <Searchbar  onSearch={onSearch} />
      { notFound? <div>No se encontro el Pokemon que buscabas 😭
</div>
      :
        <Pokedex 
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total = {total}
        />
}
    </div>
  </div>
</FavoriteProvider>)
 }

 export default Indexs;