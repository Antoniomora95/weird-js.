/*Understand how does the functional
programming really work, in the first
example lets create our own map method
map = return a modified array*/
function mapForEach(array, callbackFn){
    if(!array || !(array instanceof Array) || !array.length){
        return;
    }
    let newArr = [];
    let index = 0;
    while (index < array.length) {
        newArr.push(callbackFn(array[index]));
        index++;
    }
    return newArr;
}
const commonCallback = (valueIndex) => valueIndex * 4;
let arr2 = mapForEach([3, 5, 6, 4, 8], commonCallback);
let arr3 = mapForEach([3, 5, 6, 4, 8], (el) => el *2);
/*now check if a condition is true*/

let arrBool = mapForEach([4, 6, 7, 10, 3], (value) => value > 6);
console.log(arrBool);















/*problem here in arr.push(func(item)) only receives 1
parameter and you need two (limit, item) so you can preset
one in checkWithLimit with bind*/
let checkWithLimit = function(limiter, item){
    return item > limiter;
};
let returnArrMap = mapForEach([3, 5, 6, 4, 8], checkWithLimit.bind(this, 10));
console.log(returnArrMap);
// now lets extract the bind from here //a little bit diff
//than the last exmp.
let bindFunction = function (initialFn, limiter) {
    return initialFn.bind(this, limiter);
};
let returnArrMap2 = mapForEach([3, 5, 6, 4, 22], bindFunction(checkWithLimit, 10));
console.log(returnArrMap2);

//another way
let returnBindFn = function(limit) {
    return function(limit, item){
        return item > limit;
    }.bind(this, limit);
};
let returnArrMap3 = mapForEach([3, 5, 6, 4, 22], returnBindFn(3));
console.log(returnArrMap3);






