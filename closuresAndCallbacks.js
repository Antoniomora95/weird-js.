function sayHiLater (){
    var greeting = 'Hi!!';
    setTimeout(function () {
        debugger
        console.log(greeting, 'Antonio');
    }, 2500);

    setTimeout(function () {
        debugger
        greeting = 'changed';
    }, 200);
}
//sayHiLater();

//jquery uses function expressions and
// first -class functions!
//$('button').click(function(){
//});
/*CALLBACK FUNCTION: a function you give to another
function, to be executed when the other function is
finished */

function tellWhenDone(callback){
    var a = 1000; // some work
    var ab = 2000; // some work
    debugger
    callback(a); // the callback, it runs the function I give it!!
}

tellWhenDone(
    function(a){
        console.log('Iam done!', a)
    }
    );
tellWhenDone(function(){console.log('All done...')});


document.addEventListener('click', function(){console.log('ede')});