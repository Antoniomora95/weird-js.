// The outer environment
// the lexical environment ??
/*
    Lexical environment only means where a function
    or variable was created
 */
function a() {
    debugger
    var myVar = 3;
    function b() {
        debugger
        var mysecondVar = 'sds';
        function c () {
            console.log(mysecondVar, myVar);
            debugger
            var third = true;
            (function (){
                var fourth = 9;
                console.log(third, myVar, mysecondVar);
                debugger
                (function (){
                    console.log(third, myVar, mysecondVar, fourth);
                    debugger
                }());
            }());
        }
        c();
    }
    b();
}
a();
var myVar  = 1;
console.log(window);

// WE ARE LEARNING THE SCOPE CHAIN