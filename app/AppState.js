import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Poki from "./Models/Poki.js"

class AppState extends EventEmitter {
  /**@type {Poki[]} */
  pokis = [];
  myPokis = [];
 /**@type {Poki} */
  displayedPoki = null;
  
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
