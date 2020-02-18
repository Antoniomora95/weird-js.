
// bad practice
var module = function() {
    var labels = {
        home: 'home',
        contact: 'contact'
    };
    var setCurrent = function() {
        return current+=2;
    };
    function getCurrent(){
        return current;
    };
    return {
        current: null,
        set: setCurrent,
        get: getCurrent
    }
}();

// good practice
var module1 = function() {
    var current = null;
    var labels = {
        home: 'home',
        contact: 'contact'
    };
    var setCurrent = function() {
        return current+=2;
    };
    function getCurrent(){
        return current;
    };
    return {
        set: setCurrent,
        get: getCurrent,
        labels: labels
    }
}();
console.log(module1.set(), '++');
console.log(module1.get(), '++');
console.log(module1.set(), '++');
console.log(module1.get(), '++');
console.log(module1.labels, '++');


