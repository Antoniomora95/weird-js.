var person = {
    firstname:'Antonio',
    lastname:'Mora',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};
// You are trying to call a method attached to a key
// in the above object
var logName = function(lang1, lang2){
    console.log('Logged: '+ this.getFullName());
    console.log('Args...'+ lang1+' ' + lang2);
    console.log('-------------');
};
// this produces an error logName();

// the bind method creates a copy of whatever function
//you are calling it on
var logPersonName = logName.bind(person, 'English sp', 'Espanish sp');
//now you run the function
logPersonName();

/*Now with CALL method as its name says you're 
running the function directly
The first parameter you pass to call, is what the *this*
keyboard should point to*/
logName.call(person, 'Spn', 'Eng');

/*Now the APPLY method, is equal than call but here you pass
the parameters in an array */
logName.apply(person, ['Esp', 'Engl']);



/*Now lets do it with and immediately invoked
function expression*/
(function(lang1, lang2){
    console.log('Logged: '+ this.getFullName());
    console.log('Args...'+ lang1+' ' + lang2);
    console.log('-------------');
}.apply(person, ['Esp since a IIFE', 'Engl since a IIFE']));

//Now lets do function borrowing
/*Basically you decide what 'THIS' is going to be, 
in thts case inside the person.getFullName*/
var person2 = {
    firstname: 'Lisset Paulina',
    lastname:'Salinas'
};
console.log(person.getFullName.apply(person2));