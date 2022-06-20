import React, {useState} from "react"

import PokemonSearch from "../components/PokemonSearch"
import "./pokemon.page.css"
import PokemonCard from "../components/PokemonCard";


function PokemonPage() {
    const [pokemon, setPokemon] = useState()

    function callbackReceivePokemon(pokemon: any) {
        setPokemon(pokemon)
    }

    return (
        <>
            {pokemon
                ? <PokemonCard pokemon={pokemon}/>
                : <PokemonSearch sendPokemon={callbackReceivePokemon}/>
            }
        </>
    );
}

export default PokemonPage
