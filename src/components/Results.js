import React from "react";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const pokemons = props.pokemons;
    const page = props.page;
    const setPage = props.setPage;
    const total = props.total;
    const loading = props.loading;
    const lastPage = () => {
        const nextPage= Math.max(page-1,0);
        setPage(nextPage);
    }
    const nextPage = () => {
        const nextPage = Math.min(page+1,total);
        setPage(nextPage);
    }
    return(
        <div>

            <div className="header">

                <h1>Pokedex</h1>
                <Pagination 
                 page={page+1}
                 totalPages={total}
                 onLeftClick={lastPage}
                 onRightClick={nextPage}
                />
                
            </div>
            { loading?<><div className="lds-ring"><div></div><div></div><div></div><div></div></div><div>Cargando Pokemons</div></>:
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx)=>{
                    return (
                        <Pokemon pokemon={pokemon} key={pokemon.name}/>
                    )
                })}
            </div>
            }
        </div>

    );

};
export default Pokedex;



