class Pajaro {
    constructor(edad, altura) {
        this.edad = edad;
        this.altura = altura;
    }
    caminar() {
        console.log('Camina');
    }
}
class Pinguino {
    constructor(pajaro) {
        debugger
        this.pajaro = pajaro;
    }
    crecer() {
        this.pajaro.edad++;
        console.log('one more day', this);
    }
    nadar() {
        console.log('Nada');
    }
    }
    let pajaro = new Pajaro(1, '2 metros');
    let pinguino = new Pinguino(pajaro);
    pinguino.crecer(); // Camina
