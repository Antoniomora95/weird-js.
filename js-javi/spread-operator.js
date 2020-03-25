const add = (a, b) => a + b;
let args = [3, 5];
console.log(add(...args)); // 8

// lo mismo que add(args[0], args[1]);,
//lo mismo que add.apply(null, args);
let cde = ['c', 'd', 'e'];
let scale = ['a', 'b', ...cde, 'f'];
// [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’]
let mapABC = {
    a: 5,
    b: 6,
    c: 3
};
let mapABCD = { ...mapABC, d: 7 };
console.log(mapABCD);
// {a: 5, b: 6, c: 3, d: 7}

/*REST PARAMETER*/
function addSimple(a, b) { return a + b }
addSimple(3, 2); // 5
function add2(...numbers) {
    return numbers[0] + numbers[1];
}
add2(3, 2); // 5
const addES6 = (...numbers) => {
    console.log(numbers);
    return numbers.reduce((previous, current) => previous + current, 0);
}
console.log(addES6(1, 2, 3, 4, 5)); // 6  

// DESTRUCTURING
let foo = ['one', 'two', 'three'];
let foo1 = foo[0];
let foo2 = foo[1];
let foo3 = foo[2];
let arr = ['one', 'two', 'three'];
let [one, two, three] = arr;
console.log(uno); // one


/*******DESTRUCTURING AN OBJECT*******/
let javier = {
    name: 'Javier',
    lastname: 'Ruiz'
};
let luisa = {
    name: 'Luisa',
    lastname: 'Santana',
    motherlastname: 'López'
};
function name({ name, lastname, motherlastname = 'N/A' }) {
    console.log(`Hello ${name} ${lastname} ${motherlastname}`);
}
name(javier);
// Hola Javier Ruiz N/A
name(luisa);
// Hello Luisa Santana López
/**
* Destructuring Module
**/








/** Represents a Person **/
class Person {
    /**
  * Initialoizes the class
  * @constructor
  * @param {string} name – The person's name
  * @param {number|string} age – This is the age`s person**/
  constructor(name, age) {
  ...
  }
  /**
  * Converts the name and age in a paragrapk to show it
  * 
  * @return {string} Returns the person's age in a text **/

  getFullText() {
  ...
  }
}






