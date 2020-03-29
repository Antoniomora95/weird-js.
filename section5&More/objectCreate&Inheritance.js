/*object create ---> create an empty object where
its prototype points to whatever you pass into it
Object.create(obj)*/

//support older browsers
if(!Object.create) {
    Object.create = function (obj){
        if(arguments.length > 1) {
            throw new Error('Object create implmentation only accepts one parameter')
        }
        function F(){}
        F.prototype = obj;
        return new F();
    };
}
var person = {
    firstname: 'default',
    lastname: 'default',
    greet: function (){
        return 'Hi '+ this.firstname;
    }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Does';
console.log(john);

/*polyfill: add a special feature to support older browsers
and it will work in the same way than in new browsers */