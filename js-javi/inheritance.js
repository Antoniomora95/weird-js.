// ES6 basic class
class Bird {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    walk() {
        console.log('Camina');
    }
}
// ES6 subclass
class Penguin extends Bird {
    constructor(name, weight, height, extra) {
        super(name, weight, height);
        this.extra = extra;
    }
    swim() {
        console.log('nothing', this);
    }
}
// Objeto Pinguino
let penguin = new Penguin('Alitas', '1kg', '13cm', 'else');
penguin.walk(); // walk
penguin.swim(); // swim








// Javascript classical inheritance
// Builder for Bird
function ClassicBird(weight, height) {
    this.weight = weight;
    this.height = height;
}
// Add Method for Bird prototype
ClassicBird.prototype.walk = function () {
    console.log('Walk');
}
// Builder for Penguin
function classicPenguin(weight, height) {
    classicBird.call(this, weight, height);
}
// Prototyped inheritance (Penguin is a bird)
classicPenguin.prototype = Object.create(classicBird.prototype);
classicPenguin.prototype.constructor = classicPenguin;

// Add Method for penguin prototype
classicPenguin.prototype.swim = function () {
    console.log('Nothing');
}
// Create new Penguin object
let penguin = new classicPenguin('15kg', '2 meters');
penguin.walk(); // Walk
penguin.swim(); // Nothing