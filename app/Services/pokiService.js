import { ProxyState } from "../AppState.js";
import Poki from "../Models/Poki.js";
import { pokiApi } from "./AxiosService.js";

class PokiService {

    async getAllPokis() {
        console.log("Getting all Pokemon! GET THEM ALL!");
        let res = await pokiApi.get(" ");
        ProxyState.pokis = res.data.results;
        console.log(ProxyState.pokis);
    }

    async getPoki(index) {
        console.log("Getting one Pokemon!");
        debugger
        let res = await pokiApi.get(index);
        ProxyState.displayedPoki = new Poki(res.data);  
    }

}
export const pokiService = new PokiService();
