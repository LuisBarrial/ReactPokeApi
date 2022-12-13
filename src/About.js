import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchPokemon } from "./api";
import Error from "./components/error";
import Navbar from "./components/Navbar";


function Aboutjs (){
    const {pokename} = useParams();
    const [pokemones, setPokemones]=useState([])
    const [notFound,setNotFound]=useState(true);


    const obtenerdataPokemon = async () => {

        
        const result = await SearchPokemon(pokename);
        setPokemones(result); 
        if(result.length!==0){
        setNotFound(false);}

        
   
    }
    useEffect(()=>{ obtenerdataPokemon()},[])



   

    return(
        <>
        <Navbar></Navbar>
        {notFound? <Error/>:
        <>
        <div >
           {pokemones.name}
        </div>
        <img
            src={pokemones.sprites.front_default}
            alt={pokemones.name}
        />
        <div>
           weight: {pokemones.weight}
        </div>
        <div>
            Height: {pokemones.height}
        </div>
        </>}
       
        </>
    )


};

export default Aboutjs;