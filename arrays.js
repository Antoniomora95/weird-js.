  
var arr = [
    1, 
    false,
    {
        name: 'antonio',
        address:'tecnologico 801'
    },
    function(name){
        var greeting = 'hello';
        console.log(greeting+' '+name);
    },
    'hello'
];
console.log(arr);
arr[3](arr[2].name);