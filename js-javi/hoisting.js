//complemento: https://www.campusmvp.es/recursos/post/que-es-el-hoisting-en-javascript.aspx
var a = 2;
foo();
function foo(){ 
    console.log(a); 
    a = 3;  
    // 3  
    var a;  
    console.log(a); 
    // 3 funciona de igual manera
}
console.log(a);
// Output: 2