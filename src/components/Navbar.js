import React from "react";
import FavoriteContext from "../context/favoriteContexts";

const { useContext } = React;

const Navbar = () =>{

const {favoritePokemons} = useContext(FavoriteContext);
let imgUrl=
"https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return <nav>
        <div>
            <div>
                <a href="/ReactPokeApi">
                <img src={imgUrl} 
                alt="pokeapi-logo"
                className="navbar-img"
                
                    
                />
                </a>
            </div>
        </div>
        <div> ❤️ {favoritePokemons.length}</div>
    </nav>


}

export default Navbar;