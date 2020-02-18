// ES6 Clase Básica
class Pajaro {
    constructor(nombre, peso, altura) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
    }
    caminar() {
        console.log('Camina');
    }
}
class Pinguino extends Pajaro {
    constructor(nombre, peso, altura, extra) {
        super(nombre, peso, altura);
        this.extra = extra; 
    }
        nadar() {
            console.log('Nada', this);
    }
}
// Objeto Pinguino
let pinguino = new Pinguino('Alitas', '1kg', '13cm', 'else');
pinguino.caminar(); // Camina
pinguino.nadar(); // Nada




// Javascript classical inheritance
// Constructor para Pajaro
function PajaroClassic(peso, altura) {
    this.peso = peso;
    this.altura = altura;
}
// Añade Método para prototipo Pajaro
PajaroClassic.prototype.caminar = function() {
    console.log('Camina');
}
// Constructor para Pinguino
function PinguinoClassic(peso, altura) {
    PajaroClassic.call(this, peso, altura);
}
// Herencia prototipada (Pingüino es un Pajaro)
PinguinoClassic.prototype = Object.create(PajaroClassic.prototype);
console.log(PinguinoClassic.prototype);
PinguinoClassic.prototype.constructor = PinguinoClassic;

// Añade Método para prototipo Pinguino
PinguinoClassic.prototype.nadar = function() {
    console.log('Nada', );
}
// Crear nuevo objeto Pinguino
let pinguino1 = new PinguinoClassic('15kg', '2metros');
pinguino1.caminar(); // Camina
pinguino1.nadar(); // Nada