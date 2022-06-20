import * as React from "react"

import PokemonService from "../services/pokemon.service"
import {useState} from "react"


import {Button, TextField} from "@mui/material";


function PokemonSearch({
    sendPokemon,
} : any){

    function handleSendPokemon(param: any) {
        sendPokemon(param)
    }

    const [pokemonName, setPokemonName] = useState('Pikachu')
    const isPokemonNameValid = pokemonName != null && pokemonName.trim().length > 0

    const handleSubmit = (event: any) => {
        event.preventDefault()

        PokemonService.getPokemonByName(pokemonName.toLowerCase())
            .then(response => {
                if (response) {
                    handleSendPokemon(response)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div id={"formContainer"}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        placeholder="Pikachu"
                        value={pokemonName}
                        label="Pokemon Name"
                        variant="standard"
                        error={!isPokemonNameValid}
                        helperText={!isPokemonNameValid ? 'This field is required' : ''}
                        required={true}
                        onChange={event => setPokemonName(event.target.value)}
                    />

                    <br/>
                    <br/>

                    <Button
                        variant="contained"
                        type="submit"
                        disabled={!isPokemonNameValid}
                    >
                        Check
                    </Button>

                </form>
            </div>
        </>
    )
}

export default PokemonSearch
