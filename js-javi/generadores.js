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
//example:
function* stringIteration() {
    var str = 'hello world';  
    var index = 0;
    while (index < str.length) {
        yield str[index++];
    };
};
var generator = stringIteration();
console.log(generator.next().value); // h
console.log(generator.next().value); // e
console.log(generator.next().value); // l