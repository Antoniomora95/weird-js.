// Sin Arrow Function
class Ingredientes {
    constructor(ingredientes) {
        this.ingredientes = Array.isArray(ingredientes) ? ingredientes : [];
    }
    listar() {
        this.ingredientes.forEach(function(ingrediente, i, ingredientes) {
            debugger
            console.log(ingrediente, i + '/' + ingredientes.length);
        });
    }
}
var misIngredientes = new Ingredientes(['queso', 'lechuga', 'jamon']);
misIngredientes.listar();


// Con Arrow Function
class Ingredientes1 {
    constructor(ingredientes) {
        this.ingredientes = Array.isArray(ingredientes) ? ingredientes : [];
    }
    listar() {
        this.ingredientes.forEach((ingrediente, i) => {
            // ‘this’ si funcionará
            console.log(ingrediente, i+1 + '/' + this.ingredientes.length);
        });
    }
}
var misIngredientes = new Ingredientes1(['pan', 'leche', 'fruta']);
misIngredientes.listar();