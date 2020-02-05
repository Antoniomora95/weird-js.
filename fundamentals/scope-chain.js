// The outer environment
// the lexical environment ??
/*
    Lexical environment only means where a function
    or variable was created
 */
function a() {
    function b() {

        function c () {
            console.log(myVar);
        }
        var myVar = 3;
        console.log(myVar);
        c();
    }

    b();
    console.log(myVar);
}
a();
var myVar  = 1;
console.log(window);

// WE ARE LEARNING THE SCOPE CHAIN