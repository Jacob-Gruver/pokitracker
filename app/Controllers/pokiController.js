import { ProxyState } from "../AppState.js"
import { pokiService } from "../Services/pokiService.js"

function _drawPokis() {
    let template = '';
    ProxyState.pokis.forEach(p => {
        template += `<li class="action" onclick="app.pokiController.getPoki('${p.index}')">${p.name}</li>`;
    })
    document.getElementById('pokis').innerHTML = template;
}

function _drawActivePoki() {
    let template = ProxyState.displayedPoki.Template;

    document.getElementById("active-poki").innerHTML = template;
}

export default class pokiController {
    constructor() {
        console.log("Drawing my Pokemon!");
        ProxyState.on("pokis", _drawPokis);
        ProxyState.on("active-poki", _drawActivePoki);

        this.getAllPokis();
    }

    getAllPokis() {
        try {
            pokiService.getAllPokis();
        } catch {
            throw new console.error("Can't get all Pokemon! GOTTA CATCH EM ALL!!!");
        }
    }

    getPoki(index) {
        try{
            pokiService.getPoki(index);
        } catch {
            throw new console.error("Can't get my pone Pokemon!");
        }
    }
}