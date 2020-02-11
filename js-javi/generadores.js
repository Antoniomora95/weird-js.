function* getNumber() {
    var index = 0;
    while (true) {
        yield index++;
    };
};
var generator = getNumber();
console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
//otro ejemplo:
function* stringIteration() {
    var str = 'hola mundo';  
    var index = 0;
    while (index < str.length) {
        yield str[index++];
    };
};
var generator = stringIteration();
console.log(generator.next().value); // h
console.log(generator.next().value); // o
console.log(generator.next().value); // l