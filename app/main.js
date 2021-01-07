import pokiController from "./Controllers/pokiController.js"
import myPokiController from "./Controllers/myPokiController.js"

class App {

  pokiController = new pokiController();
  myPokiController = new myPokiController();
  
}

window["app"] = new App();
