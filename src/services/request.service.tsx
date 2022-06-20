import axios from 'axios'

interface IConfigAxios {
    baseURL: string
    timeout: number
    headers: {
        'Content-Type': string
        'accept': string
    }
}

const axiosConfig = () => {
    const config : IConfigAxios = {
        baseURL: 'https://pokeapi.co/api/v2/',
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
        }
    };

    return config
}

export const pokeApi = () => axios.create(axiosConfig())
