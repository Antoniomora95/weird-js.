class Bird {
    property = 'sd';
    constructor(old, heigth) {
        this.old = old;
        this.heigth = heigth;
    }
    walk() {
        console.log('walk');
    }
}
let b = new Bird();
class Penguin {
    constructor(bird) {
        debugger
        this.bird = bird;
    }
    grow() {
        this.bird.old++;
        console.log('one more day', this);
    }
    swim() {
        console.log('nothing');
    }
}
let bird = new Bird(1, '2 meters');
let penguin = new Penguin(bird);
penguin.crecer(); // walk

