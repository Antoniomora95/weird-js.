// Execution context and variable environments

function b () {
    console.log(myVar);
}
function a() {
    myVar = 2;
    console.log(myVar);
    b();
}
var myVar = 1;
console.log(myVar);
a();
