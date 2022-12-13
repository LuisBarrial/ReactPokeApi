import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../context/favoriteContexts";


const Pokemon = (props) => {
    
    const pokemon = props.pokemon;
    const { favoritePokemons, updateFavoritePokemons } = useContext(
        FavoriteContext
      );
    
      const redHeart = "❤️";
      const blackHeart = "🖤";
      const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
    
      const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
      };

    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <Link to={'/index/'+pokemon.name}>
                <img className="pokemon-img" 
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                />
                </Link>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>
                        #{pokemon.id}
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">  
                        {pokemon.types.map((type,idx)=>{
                        let className=(idx%2===0)? "pokemon-type-text Bug": "pokemon-type-text Water";
                          return <div key={idx} className={className}> {type.type.name} </div>
                            
                        })}
                    </div>
                    <button onClick={clickHeart}>
                    <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;