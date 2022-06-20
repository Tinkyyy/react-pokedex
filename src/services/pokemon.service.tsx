import { pokeApi } from './request.service'
import {AxiosResponse} from "axios";

const getPokemonByName = async (name: string) => {
    return await pokeApi()
        .get('/pokemon/' + name)
        .then((response: AxiosResponse) => response.data)
}

const getPokemonById = async (id: number) => {
    return await pokeApi()
        .get('/pokemon/' + id)
        .then((response: AxiosResponse) => response.data)
}

const getAllPokemons = async () => {
    return await pokeApi()
        .get('/pokemon?limit=100000')
        .then((response: AxiosResponse) => response.data)
}

const PokemonService = {
    getPokemonByName,
    getPokemonById,
    getAllPokemons
}

export default PokemonService
