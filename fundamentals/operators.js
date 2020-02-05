//OPERATOR
/*A special function that is syntactically
(written) differently, generally, operators take
two parameters and return one result*/
// operators are functions
var a  = 4 + 6;
//console.log(a);




//Operator Precedence and Associativity
var a = 3 + 4 * 5;
//console.log(a);
// the same associativity or the same operator
var a = 2, b = 3, c = 4;
a = b = c;
//console.log(a); 
//console.log(b);
//console.log(c); 
/*in this case the value is assigned from the rigth 
to the left* check this*/
/*b = c -----> return 4 ----- a = 4 so ---> a = 4, b = 4 and
c keeps its initial value 4*/ 





//COERCION
// javascript try to understand what are you going to 
//say in this case convert a number to a string and 
//put together both strings '12'
var a  = 1; b = '2';
//console.log(b+a);



//EXISTENCE AND BOOLEANS
var a;
a = 2;
// goes to internet and looks for a value
if(a || a === 0){
    //what does really happen here check
    // a || [a === 0] ---> true
    // a || true
    // false || true ----> true
    console.log('Something is there');
}











