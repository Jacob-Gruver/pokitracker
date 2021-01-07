export default class Poki {
    constructor({id, index, name, img, description, weight, height, types}) {
        this.id = id,
        this.index = index, 
        this.name = name,
        this.img = img,
        this.description = description,
        this.weight = weight,
        this.height = height,
        this.types = types

    }
    get Template() {
        return 
        `
        <div class="col-6 bg-white" id="acive-poki">
        <div class="card text-left">
            <img class="card-img-top" src="${this.img}" alt="holder.js/100px180/">
            <div class="card-body">
              <h4 class="card-title">${this.name}</h4>
              <p class="card-text">Description ${this.description}</p>
            </div>
          </div>
     </div>
    `
    }

}


