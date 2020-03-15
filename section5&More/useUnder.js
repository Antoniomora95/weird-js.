var arr1 = [4, 5, 8, 4, 0, 5];
var arr6 = _.map(arr1, function(item){
    return item * 3;
});
console.log(arr6);
var arr7 = _.filter(arr1, function(item){
    return item % 2 === 0;
});
console.log(arr7);
