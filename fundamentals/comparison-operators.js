//console.log(1 < 2 < 3);
// 1 < 2 ---> it is true and true is equal to 1
// 1 < 3 ---> true  Javascript always will try convert the 
// values into a number coercion

//console.log(3 < 2 < 1);
// 3 < 2 --> it is false and false is  equal to 0
// so 0 < 1 ---> this is true jaja

var a = 0;
var b = false;

if (a !== b) {
    console.log('They are not equal');
} else {
    console.log('equal');
}