const add = (a, b) => a + b;
let args = [3,5];
console.log(add(...args)); // 8

// lo mismo que add(args[0], args[1]);,
//lo mismo que add.apply(null, args);
let cde = ['c', 'd', 'e'];
let scale = ['a', 'b', ...cde, 'f'];
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
let mapABC = {
    a: 5,
    b: 6,
    c: 3};
let mapABCD = {...mapABC, d: 7};
console.log(mapABCD);
// {a: 5, b: 6, c: 3, d: 7}

/*REST PARAMETER*/
function addSimple(a, b) {return a + b}
addSimple(3, 2); // 5
function add2(...numbers) {
return numbers[0] + numbers[1];
}
add2(3, 2); // 5
const addES6 = (...numbers) => {
    console.log(numbers);
  return  numbers.reduce((previous, current) => previous + current, 0);
}
console.log(addES6(1, 2, 3, 4, 5)); // 6  

// DESTRUCTURING
let foo = ['uno', 'dos', 'tres'];
let foo1 = foo[0];
let foo2 = foo[1];
let foo3 = foo[2];
let arr = ['uno', 'dos', 'tres'];
let [uno, dos, tres] = arr;
console.log(uno); // uno


/*******DESTRUCTURING AND OBJECT*******/
let javier = {nombre: 'Javier', apellido1: 'Ruiz'};
let luisa = {
    nombre: 'Luisa',
    apellido1: 'Santana',
    apellido2: 'López'
};
function nombre({nombre, apellido1, apellido2 = 'N/A'}){
    console.log(`Hola ${nombre} ${apellido1} ${apellido2}`);
}
nombre(javier);
// Hola Javier Ruiz N/A
nombre(luisa);
// Hola Luisa Santana López
/**
* Destructuring Module
**/
let miModulo = {
    dibujaCuadrado: function dibujaCuadrado(altura) {
        return altura * altura; 
    },
    dibujaCirculo: function dibujaCirculo(radio) {
        return Math.PI * radio;
    }
}
let { dibujaCuadrado, dibujaCirculo } = miModulo;
console.log(dibujaCuadrado(5), dibujaCirculo(10));