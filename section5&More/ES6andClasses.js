/*SYNTACTIC SUGAR----> a different way to type
something that does not change how it works
under the hood 
*function constructor and object create are
doing the same thing*/

var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        adress: [
            '111 Main st',
            '222 third st'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        adress: [
            '333 Main st',
            '444 fourth st'
        ],
        greet: function(){
            return 'Hello!'
        }
    }
];
console.log(Object.prototype.toString.call(people));
console.table(people);
// this is  a bug
console.log(typeof null);