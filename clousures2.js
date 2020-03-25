function buildFunctions(){
    var arr = [];
    for (var index = 0; index < 3; index++) {
        arr.push(
            function(){
                debugger
                console.log(index, 'for');
            }
        );  
    }
    return arr;
}
var returnedArray = buildFunctions();
//returnedArray[0]();
//returnedArray[1]();
//returnedArray[2]();




function buildFunctions2(){
    var arr = [];
    for (var index = 0; index < 3; index++) {
        /*let is a scope variable, curly braces? so every time
        enters to the cycle a new j variable is created
        or if you want to preserve a value you neeed to create
        a separate execution context, so you need to execute
        every function in this case with an IIFE*/
        //let j = index;
        arr.push(
            (function(actualIndex){
                debugger
                return function() {
                    console.log(actualIndex, 'with IIEF');
                }
            }(index))
        );  
    }
    return arr;
}
var returnedArray2 = buildFunctions2();
returnedArray2[0]();
returnedArray2[1]();
returnedArray2[2]();



