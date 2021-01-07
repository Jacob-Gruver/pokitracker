// @ts-ignore
export const pokiApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    timeout: 50000
})

// @ts-ignore
export const sandPokiApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/models/pokemon",
    timeout: 50000
})
